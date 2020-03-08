// import libraries from node_modules.
import Vue from "vue";
import Vuex from "vuex";

// When Vuex used with a module system, you must explicitly install Vuex via Vue.use();
// Vue.use(); 뷰 어디에서나 해당 플러그인을 사용할 수 있도록 전역 사용하기로 지정한다.
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      // * let : in for loop, the number changes repeatedly.
      for (let i = 0; i < localStorage.length; i++) {
        // loglevel:webpack-dev-server : 자동주입값 제외하기
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // .key(i) : 인덱스 i번째 key 이름을 반환
          // .getItem('key') : key 에 해당하는 value 반환
          // JSON.parse('object') : parse string data to objects.
          // ↔︎ JSON.stringify(object)
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

// Vuex
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  }
});
