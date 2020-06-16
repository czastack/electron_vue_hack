<template>
  <model-widget-layout>
    <el-input class="model-view" v-model="value" v-bind="attrs" v-on="listeners"></el-input>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </model-widget-layout>
</template>

<script>
import modelWidget from './model-widget.js'

export default {
  extends: modelWidget,
  name: 'model-input',
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>

</style>
