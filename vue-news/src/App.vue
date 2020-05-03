<template>
  <div id="app">
    <!-- cmd + click -->
    <menu-bar></menu-bar>
    <transition name="page">
      <!-- <router-view> 요소는 url 에 해당하는 컴포넌트 태그로 대체된다. -->
      <router-view></router-view>
    </transition>
    <spinner :loading="isLoading"></spinner>
  </div>
</template>

<script>
import bus from "./utils/bus.js";
import Spinner from "./components/Spinner.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
  components: {
    Spinner,
    MenuBar
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    startSpinner() {
      this.isLoading = true;
    },
    endSpinner() {
      this.isLoading = false;
    }
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  // to prevent event objects from stacking.
  beforeDistroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #34495e;
}

a:hover {
  color: tomato;
  text-decoration: underline;
}

a.router-link-exact-active,
a.router-link-active {
  text-decoration: underline;
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
