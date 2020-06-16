<template>
  <div class="aside-tools">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      class="aside-tree"
      :data="data"
      :props="defaultProps"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      ref="tree"
      v-slot="{ node }">
      <span class="custom-tree-node">
        <!-- <i class="el-icon-date"></i> -->
        <span>{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  inject: ['home'],
  data() {
    return {
      filterText: '',
      data: [{
        id: 1,
        label: '测试',
        children: [{
          id: 4,
          label: 'PC',
          children: [{
            id: 9,
            label: 'test'
          }, {
            id: 10,
            label: 'test2'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    /**
     * 节点过滤
     */
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },

    /**
     * 节点点击
     */
    handleNodeClick(data/* , node, component */) {
      if (!data.children) {
        console.log(data)
        const component = window.require('test-lib.umd.min')
        const newItem = {
          title: component.name,
          name: component.name,
          component,
        }
        this.home.addTab(newItem)
      }
    },
  },
  watch: {
    filterText (value) {
      this.$refs.tree.filter(value)
    }
  },
}
</script>

<style scoped lang="scss">
.aside-tree {
  margin-top: 15px;
}
</style>
