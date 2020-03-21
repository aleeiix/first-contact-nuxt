<template>
  <div class="container">
    <div class="card my-2" v-for="article in articles" :key="article.id">
      <div class="card-body">
        <nuxt-link :to="`/blog/${article.id}`">
          <h1>{{ article.title }}</h1>
        </nuxt-link>
        <p>{{ article.body }}}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: []
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      this.articles = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style></style>
