<template>
  <el-form-item :label="label" size="mini" class="model-coord">
    <div class="model-view model-coord-content">
      <div class="flex-grow-1">
        <el-form ref="form" label-position="left" label-width="50px">
          <el-form-item label="名称" size="mini">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="X坐标" size="mini">
            <el-input v-model="x"></el-input>
          </el-form-item>
          <el-form-item label="Y坐标" size="mini">
            <el-input v-model="y"></el-input>
          </el-form-item>
          <el-form-item label="Z坐标" size="mini">
            <el-input v-model="z"></el-input>
          </el-form-item>
        </el-form>
        <el-button-group>
          <el-button size="mini" @click="onread">r</el-button>
          <el-button size="mini" @click="onwrite" v-if="!readonly">w</el-button>
          <el-button size="mini">添加</el-button>
          <el-button size="mini">更新</el-button>
          <el-button size="mini">删除</el-button>
          <el-button size="mini">保存</el-button>
          <el-button size="mini">载入</el-button>
        </el-button-group>
      </div>
      <select multiple></select>
    </div>
  </el-form-item>
</template>

<script>
import modelWidget from './model-widget.js'

export default {
  extends: modelWidget,
  name: 'model-coord',
  data() {
    return {
      name: '',
      x: '',
      y: '',
      z: '',
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.model-coord {
  .model-coord-content {
    display: flex;
  }
  select {
    width: 200px;
    margin-left: 8px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    overflow: auto;
  }
}
</style>
