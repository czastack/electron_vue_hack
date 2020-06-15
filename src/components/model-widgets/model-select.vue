<script>
import modelWidget from './model-widget.vue'
import modelView from './model-select-view.vue'

export default {
  extends: modelWidget,
  props: ['options'],
  data() {
    return {
      value: '',
    }
  },
  methods: {
    viewProps() {
      return {
        selectAttrs: null,
        options: this.options
      }
    },
    log(obj) {
      console.log(obj)
    }
  },
  components: {
    modelView,
  }
}
</script>

<style>

</style>
