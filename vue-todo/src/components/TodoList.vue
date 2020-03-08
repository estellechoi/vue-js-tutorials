<template>
  <div>
    <!-- 
        ul tag was replaced with this for CSS transition effect offered by Vue.js
        name prop should fit CSS selector
    -->
    <transition-group name="list" tag="ul">
      <!-- array length => the number of <li> -->
      <li
        class="shadow"
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
      >
        <!-- checkbox icon-->
        <!-- v-bind:class : html 속성인 class 에 동적으로 값을 부여하기 -->
        <i
          class="far fa-check-square checkboxBtn"
          v-bind:class="{ checkboxBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>

        <!-- todo item -->
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <!-- remove button icon-->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // get props data from parent component App.vue
  // props: ["propsTodoItems"],
  methods: {
    removeTodo(todoItem, i) {
      this.$emit("removeTodoItem", todoItem, i);
    },
    toggleComplete(todoItem, i) {
      this.$emit("toggleTodoItem", todoItem, i);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  /* flexbox elements -> block elements ? */
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkboxBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkboxBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* transition effect for list items */
/* from Vue.js official doc */

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
