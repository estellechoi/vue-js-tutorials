<template>
  <!-- The template root requires exactly one element. -->
  <div id="app">
    <!-- props -->
    <AppHeader v-bind:propsdata="str"></AppHeader>
  </div>
</template>

<script>
// imports component file into a variable.
import AppHeader from './components/AppHeader.vue'

export default {
  /*
  new Vue({
    data: {
      str: 'hi'
    }
  });
  */

  // data property should be a function returning an obeject.
  // so that components cannot refer to data of other components. (?)
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    // 'app-header': AppHeader
    AppHeader
  }
}
</script>

<style>

</style>