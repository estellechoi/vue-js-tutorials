// import libraries from node_modules.
import Vue from "vue";
import Vuex from "vuex";
// import all the exported from each file.
// import * as getters from "./getters";
// import * as mutations from "./mutations";
import todoApp from "./modules/todoApp";

// When Vuex used with a module system, you must explicitly install Vuex via Vue.use();
// Vue.use(); 뷰 어디에서나 해당 플러그인을 사용할 수 있도록 전역 사용하기로 지정한다.
Vue.use(Vuex);

// Vuex instance
export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  /*
  // actions make mutations async (비동기)
  // 데이터 요청, Promise, ES6 async 등 비동기 처리는 모두 actions에 선언
  actions: {
    // 컴포넌트에서 호출할 때는 this.$store.dispatch("delayDoubleNumber");
    delayDoubleNumber(context) {
      // context 객체로 store 의 메소드와 속성에 접근 가능
      setTimeout(() => context.commit("doubleNumber"), 2000);
    },
    fetchProductData(context) {
      // ajax
      return axios.get("").then(res => context.commit("setData", res));
    }
  }
  */
});
