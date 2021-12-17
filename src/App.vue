<template>
  <div id="app">
    <b-navbar>
      <b-navbar-brand> CodeTheorist Dev Tools </b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <img alt="Vue logo" src="./assets/logo.png" />
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
