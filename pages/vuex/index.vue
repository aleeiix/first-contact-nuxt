<template>
  <div class="container">
    <h2>Vuex</h2>

    <form class="mb-5" @submit.prevent="addTask(newTask)">
      <input type="text" class="form-control mb-2" v-model="newTask" />
      <b-button class="btn-success" type="submit">Agregar</b-button>
    </form>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{task.id}} - {{task.name}}
        <b-button class="btn-sm btn-warning">Editar</b-button>
        <b-button class="btn-sm btn-danger">Eliminar</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      newTask: null
    };
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
    ...mapActions(["addTask"])
  }
};
</script>

<style></style>
