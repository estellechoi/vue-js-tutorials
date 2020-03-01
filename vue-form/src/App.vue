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
      // evt.preventDefault(); // prevent form submit and reset
      console.log(this.username,this.password);
    }
  }
}
</script>

<style>

</style>