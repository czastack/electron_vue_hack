<template>
  <el-tabs ref="tabs" v-model="tabsValue" type="card">
    <slot></slot>
  </el-tabs>
</template>

<script>
export default {
  provide () {
    return {
      hacktool: this,
    }
  },
  data() {
    return {
      tabsValue: '',
    }
  },

}
</script>

<style lang="scss">
</style>
