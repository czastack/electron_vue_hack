<template>
  <div class="hello">
    <hack-tool ref="hacktool">
      <model-group-tab label="全局">
        <model-input label="输入" />
        <model-input-number label="计数器" :attrs="{min: 0}" />
        <model-select label="选择" :options="$options.options" />
        <model-select-count label="选择数量" :options="$options.options" />
        <model-flags label="标志位" :labels="['a', 'b', 'c']" />
        <model-switch label="Switch" />
        <model-checkbox label="Checkbox" />
      </model-group-tab>
      <model-group-tab label="位置">
        <model-coord label="Coord" />
      </model-group-tab>
    </hack-tool>
  </div>
</template>

<script>
import Vue from 'vue'
import HackTools from '@/components/hack-tools'
import ModelWidgets from '@/components/model-widgets'
import ModelGroupTab from '@/components/model-widgets/model-group-tab'

console.log(ModelGroupTab)

Vue.use(HackTools)
Vue.use(ModelWidgets)

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  options: [
    {
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
    }
  ],
  created() {

  },
  data() {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
</style>
