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
  extends: modelWidget,
  data() {
    return {
      value: 1,
    }
  },
  methods: {
    onread() {
      console.log('onread2')
    },
    viewProps() {
      return { value: 1 }
    }
  },
  components: {
    modelView,
  }
}
</script>

<style>

</style>
