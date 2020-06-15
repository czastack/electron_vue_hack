<template functional>
  <el-input v-bind="data.attrs" v-on="listeners" @change="listeners.input" :class="[data.staticClass, data.class]"></el-input>
</template>
