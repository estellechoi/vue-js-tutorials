<template>
  <div>
    <ul>
      <!-- array length = the number of <li> -->
      <li v-for="item in todoItems" v-bind:key="item">{{ item }}</li>
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
  // when instance created
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        // loglevel:webpack-dev-server : 자동주입값
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // .key(i) : 인덱스 i번째 key 이름을 반환
          // .getItem('key') : key 에 해당하는 value 반환
          this.todoItems.push(localStorage.getItem(localStorage.key(i)));
        }
      }
    }
  }
};
</script>

<style></style>
