<template>
  <div class="model-group">
    <el-form ref="form" :model="form" class="model-group-form" label-width="80px">
      <grid :cols="cols" class="grid-reactive">
        <slot></slot>
      </grid>
    </el-form>
    <slot name="footer">
      <div>
        <el-button size="mini">读取</el-button>
        <el-button size="mini">写入</el-button>
        <el-button size="mini">导入</el-button>
        <el-button size="mini">导出</el-button>
        <slot name="footer-button"></slot>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'model-group',
  props: {
    cols: {
      type: Number,
      default: 2,
    }
  },
  provide() {
    return {
      group: this,
    }
  },
  data() {
    return {
      form: {},
    }
  },
}
</script>

<style lang="scss">
.model-group {
  display: flex;
  flex-direction: column;

  .model-group-form {
    flex-grow: 1;
  }
}
</style>
