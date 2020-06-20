<template functional>
  <el-tab-pane :label="data.attrs.label">
    <model-group v-bind="data.attrs" v-on="listeners">
      <template v-for="(_, slot) of scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    </model-group>
  </el-tab-pane>
</template>
