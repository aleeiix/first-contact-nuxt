<template>
  <div class="container mb-5">
    <h2>Editar Tarea</h2>
    <form @submit.prevent="updateTask(task)">
      <input type="text" class="form-control mb-2" v-model="task.name" />
      <b-button type="submit" class="btn-warning">Editar</b-button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { db } from "@/plugins/firebase";

export default {
  computed: {
    task: {
      get() {
        return {
          id: this.$store.state.task.id,
          name: this.$store.state.task.name
        };
      }
    }
  },
  methods: {
    ...mapActions(["updateTask"])
  },
  fetch({ store, params }) {
    return db
      .collection("tasks")
      .doc(params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          const task = Object.assign({}, doc.data(), { id: doc.id });
          return store.commit("setTask", task);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style>
</style>