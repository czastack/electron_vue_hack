<script>
import modelWidget from './model-widget.vue'
import modelView from './model-select-view.vue'

export default {
  name: 'model-select',
  extends: modelWidget,
  modelView,
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
  },
}
</script>

<style>

</style>
