<template>
  <div class="undo-list">
    <div class="undo-list-title">
      正在进行
      <span
        data-test="count"
        class="count-box"
      >
        {{ list.length }}
      </span>
    </div>
    <div class="item-box">
      <div
        v-for="(item, index) in list"
        :key="'list-item-'+index"
        class="list-item"
        data-test="list"
      >
        <span class="item-title">
          {{ item }}
        </span>
        <span
          data-test="delete-button"
          class="item-delete"
          @click="$emit('delete', index)"
        >
          -
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UndoList',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="scss">
.undo-list {
  width: 100%;
  height: 100%;
  .undo-list-title {
    line-height: 30px;
    margin: 10px 0;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .count-box {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #e6e6e6;
    border-radius: 50%;
    font-size: 20px;
    color: #000;
  }
  .item-box {
    .list-item {
      padding: 0 10px;
      margin-bottom: 10px;
      line-height: 32px;
      font-size: 14px;
      background: #fff;
      border-left: 5px solid #629a9a;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      .delete-button {
        cursor: pointer;
      }
      .item-title {
        font-size: 16px;
        color: #000;
      }
      .item-delete {
        font-style: 14px;
      }
      .item-input {
        font-size: 16px;
        width: calc(100% - 100px);
        display: inline-block;
        cursor: pointer;
        box-sizing: border-box;
      }
    }
  }
}
</style>
