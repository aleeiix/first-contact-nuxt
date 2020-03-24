import { db } from "@/plugins/firebase";

export const state = () => ({
  tasks: null,
  task: null
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  addTask(state, payload) {
    state.tasks.push(payload);
  },
  deleteTask(state, payload) {
    state.tasks = state.tasks.filter(task => task.id !== payload.id);
  },
  updateTask(state, payload) {
    const index = state.tasks.findIndex(task => task.id === payload.id);
    state.tasks[index] = payload;
  },
  setTask(state, payload) {
    state.task = payload;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return db
      .collection("tasks")
      .get()
      .then(query => {
        const tasks = [];
        query.forEach(element => {
          const task = Object.assign({}, element.data(), { id: element.id });
          tasks.push(task);
        });
        return commit("setTasks", tasks);
      })
      .catch(error => {
        console.error(error);
      });
  },
  async addTask({ commit }, payload) {
    try {
      const task = { name: payload, date: new Date() };
      const doc = await db.collection("tasks").add(task);

      const taskAdded = Object.assign(task, { id: doc.id });
      commit("addTask", taskAdded);
    } catch (error) {
      console.error(error);
    }
  },
  deleteTask({ commit }, payload) {
    db.collection("tasks")
      .doc(payload.id)
      .delete()
      .then(() => {
        commit("deleteTask", payload);
      })
      .catch(error => {
        console.error(error);
      });
  },
  updateTask({ commit }, payload) {
    console.log(payload);
    db.collection("tasks")
      .doc(payload.id)
      .update(payload)
      .then(() => {
        commit("updateTask", payload);
        this.app.router.push("/vuex");
      })
      .catch(error => {
        console.error(error);
      });
  }
};
