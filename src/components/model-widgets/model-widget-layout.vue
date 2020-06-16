<template>
  <el-form-item :label="widget.label" size="mini">
    <div class="widget-wrap">
      <slot></slot>
      <el-button-group class="button-rw">
        <el-button size="mini" @click="widget.onread">r</el-button>
        <el-button size="mini" @click="widget.onwrite" v-if="!widget.readonly">w</el-button>
        <slot name="extra-button"></slot>
      </el-button-group>
    </div>
  </el-form-item>
</template>

<script>

export default {
  inject: ['widget'],
  name: 'model-widget-layout',
}
</script>

<style lang="scss">
.widget-wrap {
  display: flex;
  align-items: center;

  .model-view {
    width: 100%;
  }
}

.button-rw {
  flex-shrink: 0;
  margin-left: 8px;
}
</style>
