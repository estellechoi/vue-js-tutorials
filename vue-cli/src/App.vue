<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- use component with tag-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import component
import HelloWorld from './components/HelloWorld.vue'

// Vue instance properties and componet properties can be declared here.
export default {
  name: 'App',
  components: {
    // add imported component
    // 'hello-world': HelloWorld
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
