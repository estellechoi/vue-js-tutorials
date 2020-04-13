<template>
  <div id="app">
    <!-- cmd + click -->
    <menu-bar></menu-bar>
    <transition name="page">
      <!-- <router-view> 요소는 url 에 해당하는 컴포넌트 태그로 대체된다. -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
export default {
  components: {
    MenuBar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
