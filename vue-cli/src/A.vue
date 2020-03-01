<template>
    <!-- vue : .vue file 자동완성 단축키 -->
    <!-- Sigle File Componet -->

    <!-- HTML -->    
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>  
</template>

<script>
// import component
import HelloWorld from './components/HelloWorld.vue'

// Vue instance properties and componet properties can be declared here.
export default {
    // JavaScript
  name: 'A',
  components: {
    // add imported component
    // 'hello-world': HelloWorld
    HelloWorld
  }
}
</script>

<style>
/* CSS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>