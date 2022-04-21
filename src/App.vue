<template>
  <div id="app">
    <!-- <a-icon type="profile" /> -->
    <TodoList />
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'

  export default {
    name: 'App',
    components: {
      TodoList,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 800px;
    align-items: center;

    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }
</style>
