<template>
  <div class="container">
    <h2>Vuex</h2>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";

export default {
  created() {
    db.collection("tasks")
      .get()
      .then(query => {
        query.forEach(element => {
          console.log(element.data());
        });
      });
  }
};
</script>

<style></style>
