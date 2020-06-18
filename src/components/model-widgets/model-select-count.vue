<template>
  <model-widget-layout>
    <el-select class="model-view" v-model="choice" v-bind="attrs" v-on="listeners">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input-number controls-position="right" class="model-view" v-model="count" v-bind="inputAttrs" v-on="inputListeners"></el-input-number>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </model-widget-layout>
</template>

<script>
import modelWidget from './model-widget.js'

export default {
  extends: modelWidget,
  name: 'model-select-count',
  props: {
    options: Array,
    inputAttrs: Object,
    inputListeners: Object,
  },
  data() {
    return {
      choice: '',
      count: '',
    }
  },
  methods: {

  },
}
</script>

<style>

</style>
