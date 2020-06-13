<template>
  <el-container class="home">
    <el-header>
      <el-row :gutter="20" type="flex" class="header-row">
        <div class="header-block">
          <el-image></el-image>
        </div>
        <div class="header-block">
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="hover">
            <el-image slot="reference"></el-image>
          </el-popover>
        </div>
      </el-row>
    </el-header>
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside class="nav-left">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="nav.filterText">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="nav.data"
          :props="nav.defaultProps"
          :filter-node-method="navFilterNode"
          @node-click="handleNavClick"
          ref="tree"
          v-slot="{ node }">
          <span class="custom-tree-node">
            <i class="el-icon-date"></i>
            <span>{{ node.label }}</span>
          </span>
        </el-tree>
      </el-aside>
      <el-container>
        <el-main>
          <!-- TAB标签页 -->
          <el-tabs v-model="tabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              :key="item.name"
              v-for="item in tabs"
              :label="item.title"
              :name="item.name"
            >
              <component :is="item.component" v-if="item.component"></component>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <!-- 底部 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      nav: {
        filterText: '',
        data: [{
          id: 1,
          label: '修改器',
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
      },

      tabsValue: '2',
      tabs: [{
        title: 'Tab 1',
        name: '1',
      }, {
        title: 'Tab 2',
        name: '2',
      }],
      tabIndex: 2
    }
  },
  methods: {
    /**
     * 侧边导航栏过滤
     */
    navFilterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },

    /**
     * 导航节点点击
     */
    handleNavClick(data/* , node, component */) {
      if (!data.children) {
        console.log(data)
        const component = window.require('test-lib.umd.min')
        const newItem = {
          title: component.name,
          name: component.name,
          component,
        }
        this.tabs.push(newItem)
        this.tabsValue = newItem.name
      }
    },

    /**
     * 添加标签页
     */
    addTab(data) {
      this.tabs.push(data)
      this.tabsValue = data.name
    },

    /**
     * 移除标签页
     */
    removeTab(targetName) {
      const tabs = this.tabs
      let activeName = this.tabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.tabsValue = activeName
      this.tabs = tabs.filter(tab => tab.name !== targetName)
    }
  },
  watch: {
    'nav.filterText': function (value) {
      this.$refs.tree.filter(value)
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
.header-row {
  height: 100%;
  align-items: stretch;
}
.header-block {
  padding: 8px;
  position: relative;

  &:not(:last-child) {
    border-right: 1px solid rgba(224,230,237,.5);
  }

  .el-image {
    cursor: pointer;
  }
}
.nav-left {
  border-right: 1px solid #e6e6e6;
  padding: 8px;

  .filter-tree {
    margin-top: 15px;
  }
}
</style>
