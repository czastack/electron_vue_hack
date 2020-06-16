export default {
  inheritAttrs: false,
  provide() {
    return {
      widget: this,
    }
  },
  props: {
    label: String,
    readonly: Boolean,
    // 传递给element控件的attrs和listeners
    attrs: Object,
    listeners: Object,
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
    log(obj) {
      console.log(obj)
    },
  },
}
