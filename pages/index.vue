<template>
  <div class="container">
    <div class="text-center mt-5">
      <logo />
      <h1 class="title">
        first-contact-nuxt
      </h1>
      <h2 class="subtitle">
        My exceptional Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head: {
    title: "Esta es mi pagina de inicio",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Esta es la descripcion de mi pagina de inicio"
      }
    ]
  }
};
</script>

<style></style>
