<template>
  <model-widget-layout>
    <el-checkbox class="checkAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group class="model-view" v-model="checkedLabels" @change="handleCheckedLabelChange">
      <el-checkbox v-for="{ label, value } of options" :key="value" :label="label" :value="value" />
    </el-checkbox-group>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </model-widget-layout>
</template>

<script>
import modelWidget from './model-widget.js'

export default {
  extends: modelWidget,
  name: 'model-flags',
  props: ['labels', 'values'],
  data() {
    return {
      value: false,
      checkedLabels: [1, 2],
      checkAll: false,
      isIndeterminate: false,
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedLabels = val ? this.labels : []
      this.isIndeterminate = false
    },
    handleCheckedLabelChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.labels.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.labels.length
    }
  },
  computed: {
    realValues() {
      let values = this.values
      const length = this.labels.length
      if (!values) {
        values = new Array(length)
        for (let i = 0; i < length; i++) {
          values[i] = 1 << i
        }
      }
      return values
    },

    options() {
      const labels = this.labels
      const values = this.realValues
      const options = []
      for (let i = 0; i < labels.length; i++) {
        options.push({
          label: labels[i],
          value: values[i],
        })
      }
      return options
    },
  },
}
</script>

<style lang="scss" scoped>
  .widget-wrap .checkAll {
    margin-right: 30px;
  }
  .model-view.el-checkbox-group {
    display: flex;
  }
</style>
