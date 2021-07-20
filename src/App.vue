<template>
  <div id="app">
    <todo-list />
  </div>
</template>

<script>
import TodoList from './components/containers/TodoList/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
