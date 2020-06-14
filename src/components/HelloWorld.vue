<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <grid :cap="10" :cols="2">
        <model-input label="HP" />
        <model-input label="HP" />
      </grid>
    </el-form>
  </div>
</template>

<script>
import ModelInput from '@/components/model-widgets/model-input.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      form: {},
    }
  },
  components: {
    ModelInput,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
