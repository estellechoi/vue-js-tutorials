const addOneItem = (state, newTodoItem) => {
  const obj = {
    completed: false,
    item: newTodoItem
  };
  // localStorage.setItem('key', 'value');
  // JSON.stringify(object); parse obejcts to string data
  localStorage.setItem(newTodoItem, JSON.stringify(obj));

  // add to state
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  // removeItem('key'); remove from localStorage
  // console.log(localStorage.key(i));
  localStorage.removeItem(payload.todoItem.item);

  // remove from state
  // array.splice(n, i) : return new array after removing n items from the item of index i.
  state.todoItems.splice(payload.index, 1);
};

const toggleOneItem = (state, payload) => {
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
};

const clearAllItems = state => {
  localStorage.clear();
  state.todoItems = [];
};

/*
    doubleNumber(state) {
      state.playNum++;
    },
    setData(state, fetchedData) {
      state.product = fetchedData;
    }
    */

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
