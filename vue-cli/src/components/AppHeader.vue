<template>
    <!-- Sigle File Componet -->
  <header>
      <h1>{{ propsdata }}</h1>
      <button v-on:click="sendEvent">Send</button>
  </header>
</template>

<script>
// component 태그는 2단어 이상으로 구성한다. 컴포넌트를 참조할 때 html 태그와 중복되는 일을 방지하기 위해서. 
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            // create and emit event
            this.$emit('passEvent');
        }
    }
}
</script>

<style>

</style>