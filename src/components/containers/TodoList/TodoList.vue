<template>
  <div class="todo-list">
    <Header @add="handleAdd" />
    <div class="todo-body">
      <UndoList
        :list="undoList"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>
<script>
import Header from './coms/Header.vue'
import UndoList from './coms/UndoList.vue'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  props: {},
  data () {
    return {
      undoList: []
    }
  },
  mounted () {},
  methods: {
    handleAdd (value) {
      this.undoList.push(value)
    },
    handleDelete (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>
<style scoped lang="scss">
.todo-list {
  width: 100%;
  height: 100%;
  background: #cdcdcd;
  .todo-body {
    width: 600px;
    margin: 50px auto;
    height: calc(100% - 80px);
  }
}
</style>
