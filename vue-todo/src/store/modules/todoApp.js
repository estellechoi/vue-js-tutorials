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

const state = {
  todoItems: storage.fetch()
  // playNum: 10,
  // product: null
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

// methods (payload : 인자)
// mutations 에는 동기처리 로직만 넣어야 한다. 시간차를 두고 state 값을 변경하는 경우 그 변화를 추적하기 어렵기 때문이다.
const mutations = {
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
    state.todoItems.splice(payload.index, 1);
  },
  toggleOneItem(state, payload) {
    // toggle vue data false/true
    // but 자식 컴포넌트에 전달한 props data를 부모 컴포넌트에서 다시 전달받아 조작하는 것은 not good.
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index]
      .completed;

    // update localStorage
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      state.todoItems[payload.index].item,
      JSON.stringify(state.todoItems[payload.index])
    );
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }

  /*
          doubleNumber(state) {
            state.playNum++;
          },
          setData(state, fetchedData) {
            state.product = fetchedData;
          }
          */
};

// 'default exporting' means only one exporting is valid in one file.
export default {
  state,
  getters,
  mutations
};
