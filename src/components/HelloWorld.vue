<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <grid :cap="10" :cols="2">
        <model-input label="输入1" />
        <model-select label="输入2" :options="$options.options" />
      </grid>
    </el-form>
  </div>
</template>

<script>
import ModelInput from '@/components/model-widgets/model-input.vue'
import ModelSelect from '@/components/model-widgets/model-select.vue'

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
  components: {
    ModelInput,
    ModelSelect,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
