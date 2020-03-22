import { db } from "@/plugins/firebase";

export const state = () => ({
  tasks: null
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  addTask(state, payload) {
    state.tasks.push(payload);
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
  }
};
