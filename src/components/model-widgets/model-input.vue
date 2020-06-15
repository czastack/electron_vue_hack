<script>
import modelWidget from './model-widget.vue'
import modelView from './model-input-view.vue'

/* const modelView = {
  inheritAttrs: false,
  render() {
    return (<el-input attrs={this.$attrs}></el-input>)
  }
} */

export default {
  name: 'model-input',
  extends: modelWidget,
  modelView,
  data() {
    return {

    }
  },
  methods: {
    onread() {
      console.log('onread2')
    },
    viewProps() {
      return null
    }
  },
}
</script>

<style>

</style>
