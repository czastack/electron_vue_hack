<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <grid :cap="10" :cols="2" class="grid-reactive">
        <model-input label="输入" />
        <model-input-number label="计数器" :attrs="{min: 0}" />
        <model-select label="选择" :options="$options.options" />
        <model-flags label="标志位" :labels="['a', 'b', 'c']" />
        <model-switch label="Switch" />
        <model-checkbox label="Checkbox" />
      </grid>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import ModelWidgets from '@/components/model-widgets'

Vue.use(ModelWidgets)

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  options: [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }],
  data() {
    return {
      form: {},
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
@media screen and (max-width: 1200px) {
  .grid-reactive {
    grid-template-columns: 1fr!important;
  }
}
</style>
