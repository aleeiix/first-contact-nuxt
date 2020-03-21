<template>
  <div class="container" v-if="article !== null">
    <div class="card">
      <div class="card-body">
        <h1>{{ article.title }}</h1>
        <p class="small">
          {{ article.user.name }}
        </p>
        <p>{{ article.body }}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Volver</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      article: null
    };
  },
  async asyncData({ params }) {
    try {
      const res = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${params.id}`
      );

      const resUser = await axios.get(
        `http://jsonplaceholder.typicode.com/users/${res.data.userId}`
      );

      const article = Object.assign({}, res.data, { user: resUser.data });

      return { article };
    } catch (error) {
      return { error };
    }
  }
};
</script>

<style></style>
