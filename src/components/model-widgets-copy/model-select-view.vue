<template functional>
  <el-select v-bind="props.selectAttrs" v-on="listeners" :value="data.model.value" :class="props.class">
    <el-option
      v-for="item in props.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
