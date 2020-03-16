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

// Vuex instance
export const store = new Vuex.Store({
  // data
  state: {
    todoItems: storage.fetch(),
    playNum: 10,
    product: null
  },
  // getters
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  // methods (payload : 인자)
  // mutations 에는 동기처리 로직만 넣어야 한다. 시간차를 두고 state 값을 변경하는 경우 그 변화를 추적하기 어렵기 때문이다.
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
    },
    doubleNumber(state) {
      state.playNum++;
    },
    setData(state, fetchedData) {
      state.product = fetchedData;
    }
  },
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
});
