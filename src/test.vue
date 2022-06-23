<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  props: ["background-color"],
  setup() {
    const messages = reactive([]);
    const newMessage = ref("");
  },
});
</script>

<template>
  <div>
    <label>New Message</label>
    <input v-model="newMessage" @keyup="checkEnter" autofocus />
    <button @click="addMessage">Add Message</button>
    <div class="messages">
      <div v-for="msg in messages" :key="msg">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
