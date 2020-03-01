<template>
  <!-- * .prevent : event modifier -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <!-- input is auto focused when its label is clicked -->
      <label for="username">Id : </label>
      <input type="text" id="username" v-model="username">
      <!-- v-model : two-way data binding -->
    </div>
    <div>
      <label for="password">Password : </label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
// * axios : http 통신 라이브러리 (npm i axios)
import axios from 'axios';

export default {
  // Component 간 데이터 공유를 방지하기 위해 data는 객체가 아닌 함수로 작성한다. (값을 참조할 수 없도록)
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      // prevent form submit and reset
      // evt.preventDefault(); -> event modifier 사용
      
      // REST API 규칙에 따라 아래 URL로 데이터를 보내고 받을 수 있다.
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      
      axios.post(url, data)
      // Promise 구문 : .then().catch()
      // when success
      .then(function(res) {
        console.log(res); 
      })
      // when error
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>