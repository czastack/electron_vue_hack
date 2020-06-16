<template>
  <model-widget-layout>
    <el-select class="model-view" v-model="value" v-bind="attrs" v-on="listeners">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </model-widget-layout>
</template>

<script>
import modelWidget from './model-widget.js'

export default {
  extends: modelWidget,
  name: 'model-select',
  props: ['options'],
  data() {
    return {
      value: '',
    }
  },
  methods: {

  },
}
</script>

<style>

</style>
