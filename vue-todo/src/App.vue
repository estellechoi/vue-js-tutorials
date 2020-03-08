<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addNewTodo="addOneItem"></todo-input>
    <!-- props binding works whenever its target data change. -->
    <todo-list
      v-bind:propsTodoItems="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:toggleTodoItem="toggleOneItem"
    ></todo-list>
    <todo-footer v-on:clearTodos="clearAllItems"></todo-footer>
  </div>
</template>

<script>
// import components
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem: function(newTodoItem) {
      // * const : cannot override
      const obj = {
        completed: false,
        item: newTodoItem // input value from child component
      };
      // localStorage.setItem('key', 'value');
      // JSON.stringify(object); parse obejcts to string data
      localStorage.setItem(newTodoItem, JSON.stringify(obj));

      // add to vue data
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, i) {
      // removeItem('key'); remove from localStorage
      // console.log(localStorage.key(i));
      localStorage.removeItem(todoItem.item);

      // remove from vue data
      // array.splice(n, i) : return new array after removing n items from the item of index i.
      this.todoItems.splice(i, 1);
    },
    toggleOneItem: function(todoItem, i) {
      // toggle vue data false/true
      // but 자식 컴포넌트에 전달한 props data를 부모 컴포넌트에서 다시 전달받아 조작하는 것은 not good.
      // todoItem.completed = !todoItem.completed;
      this.todoItems[i].completed = !this.todoItems[i].completed;

      // update localStorage
      // localStorage does not offer update api, so update it as following.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(
        this.todoItems[i].item,
        JSON.stringify(this.todoItems[i])
      );
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // when instance created
  created: function() {
    if (localStorage.length > 0) {
      // * let : in for loop, the number changes repeatedly.
      for (let i = 0; i < localStorage.length; i++) {
        // loglevel:webpack-dev-server : 자동주입값 제외하기
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // .key(i) : 인덱스 i번째 key 이름을 반환
          // .getItem('key') : key 에 해당하는 value 반환
          // JSON.parse('object') : parse string data to objects.
          // ↔︎ JSON.stringify(object)
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    // as vue style-guide
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
