<template>
  <div class="header-wrap">
    <div class="header-wrap-box">
      TodoList
      <input
        type="text"
        v-model="inputValue"
        :placeholder="palceHolder"
        class="input-box"
        data-test="input"
        @keyup.enter="addTodoItem()"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data () {
    return {
      palceHolder: '请输入',
      inputValue: ''
    }
  },
  mounted () {},
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
<style scoped lang="scss">
.header-wrap {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #000;
  .header-wrap-box {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-box {
      height: 32px;
      width: 300px;
      outline: none;
      padding: 0 6px;
      box-sizing: border-box;
    }
  }
}
</style>
