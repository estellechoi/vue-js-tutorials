// import libraries from node_modules.
import Vue from "vue";
import Vuex from "vuex";

// When Vuex used with a module system, you must explicitly install Vuex via Vue.use();
// Vue.use(); 뷰 어디에서나 해당 플러그인을 사용할 수 있도록 전역 사용하기로 지정한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    headerText: "TODO !"
  }
});
