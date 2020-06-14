<template>
  <el-form-item :label="label" size="mini">
    <div class="widget-wrap">
      <model-view v-bind="viewProps()" />
      <el-button-group class="button-rw">
        <el-button size="mini" @click="onread">r</el-button>
        <el-button size="mini" @click="onwrite" v-if="!readonly">w</el-button>
      </el-button-group>
    </div>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    readonly: Boolean,
  },
  methods: {
    onread() {
      console.log('onread')
    },
    onwrite() {
      console.log('onwrite')
    },
    viewProps() {
      return null
    }
  }
}
</script>

<style>
.widget-wrap {
  display: flex;
}

.button-rw {
  flex-shrink: 0;
}
</style>
