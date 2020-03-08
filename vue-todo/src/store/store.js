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
  // data
  state: {
    todoItems: storage.fetch()
  },
  // methods (payload : 인자)
  mutations: {
    addOneItem(state, newTodoItem) {
      const obj = {
        completed: false,
        item: newTodoItem
      };
      // localStorage.setItem('key', 'value');
      // JSON.stringify(object); parse obejcts to string data
      localStorage.setItem(newTodoItem, JSON.stringify(obj));

      // add to state
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      // removeItem('key'); remove from localStorage
      // console.log(localStorage.key(i));
      localStorage.removeItem(payload.todoItem.item);

      // remove from state
      // array.splice(n, i) : return new array after removing n items from the item of index i.
      state.todoItems.splice(payload.i, 1);
    },
    toggleOneItem(state, payload) {
      // toggle vue data false/true
      // but 자식 컴포넌트에 전달한 props data를 부모 컴포넌트에서 다시 전달받아 조작하는 것은 not good.
      // todoItem.completed = !todoItem.completed;
      state.todoItems[payload.i].completed = !state.todoItems[payload.i]
        .completed;

      // update localStorage
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        state.todoItems[payload.i].item,
        JSON.stringify(state.todoItems[payload.i])
      );
    },
    clearAllItems() {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
