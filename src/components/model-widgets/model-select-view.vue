<template functional>
  <el-select v-bind="props.selectAttrs" v-on="listeners" :value="props.value" @change="listeners.input">
    <el-option
      v-for="item in props.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
