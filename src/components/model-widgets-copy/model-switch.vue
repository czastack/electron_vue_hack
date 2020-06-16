<script>
import modelWidget from './model-widget.vue'
import modelView from './model-switch-view.vue'

export default {
  name: 'model-switch',
  extends: modelWidget,
  modelView,
  data() {
    return {
      value: false,
    }
  },
  methods: {

  },
}
</script>

<style>

</style>
