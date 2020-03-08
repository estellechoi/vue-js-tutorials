<template>
  <div class="inputBox shadow">
    <!-- .enter : event modifier -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <!-- awesome icon font -->
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- Modal component -->
    <modal v-if="showModal" @close="showModal = false">
      <!-- replace <slot name="header">default header</slot> of Modal component. -->
      <h3 slot="header" class="closeModalBtn">
        경고 !
        <i class="fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">할 일을 입력하세요.</div>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  // modal component added
  components: {
    modal: Modal
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // $emit('event', parameter, parameter, ..);
        // this.$emit("addNewTodo", this.newTodoItem);
        const text = this.newTodoItem.trim();
        // call one of mutations of store.js.
        // this.$store.commit("mutation", parameter);
        this.$store.commit("addOneItem", text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  height: 40px;
  line-height: 40px;
}

/* span */
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
