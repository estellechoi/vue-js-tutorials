<template>
  <div>
    <ul>
      <!-- array length => the number of <li> -->
      <li class="shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <!-- checkbox icon-->
        <!-- v-bind:class : html 속성인 class 에 동적으로 값을 부여하기 -->
        <i
          class="far fa-check-square checkboxBtn"
          v-bind:class="{ checkboxBtnCompleted : todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>

        <!-- todo item -->
        <span v-bind:class="{ textCompleted : todoItem.completed }">{{ todoItem.item }}</span>

        <!-- remove button icon-->
        <span class="removeBtn" v-on:click="removeTodo(index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  methods: {
    removeTodo: function(i) {
      // remove from localStorage
      // removeItem('key');
      localStorage.removeItem(localStorage.key(i));
      // remove from vue data
      // array.splice(n, i) : return new array after removing n items from the item of index i.
      this.todoItems.splice(i, 1);
    },
    toggleComplete: function(todoItem, i) {
      // toggle false/true
      todoItem.completed = !todoItem.completed;
      // localStorage does not offer update api, so update it as following.
      localStorage.removeItem(localStorage.key(i));
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  // when instance created
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
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
</style>
