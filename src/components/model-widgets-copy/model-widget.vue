<template>
  <el-form-item :label="label" size="mini">
    <div class="widget-wrap">
      <model-view-proxy :component="$options.modelView" v-bind="viewProps()" v-model="value" class="model-view" />
      <el-button-group class="button-rw">
        <el-button size="mini" @click="onread">r</el-button>
        <el-button size="mini" @click="onwrite" v-if="!readonly">w</el-button>
        <slot name="extra-button"></slot>
      </el-button-group>
    </div>
  </el-form-item>
</template>

<script>
/**
 * 分发不同model view的函数组件
 */
const ModelViewProxy = {
  functional: true,
  props: ['component'],
  render(createElement, context) {
    const { component } = context.props
    const { data, listeners } = context
    // 转发v-model
    listeners.change = listeners.input
    // 替换成attrs
    context.props = data.attrs
    // 合并样式
    data.attrs.class = [data.staticClass, data.class]
    if (component) {
      return component.render(createElement, context)
    } else {
      return createElement('div', context.data, 'need reload')
    }
  }
}

export default {
  props: {
    label: String,
    readonly: Boolean,
  },
  data() {
    return {
      value: '',
    }
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
    },
    log(obj) {
      console.log(obj)
    },
  },
  components: {
    ModelViewProxy,
  }
}
</script>

<style lang="scss" scoped>
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
