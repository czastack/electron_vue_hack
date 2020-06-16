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
      <el-aside class="aside-left" :class="{'aside-collapse': asideTabHide}">
        <el-tabs tab-position="left" class="aside-left-tabs" ref="asideTabs" @tab-click="asideTabClick">
          <el-tab-pane label="tools">
            <span slot="label"><i class="el-icon-document"></i></span>
            <aside-tools />
          </el-tab-pane>
          <el-tab-pane label="test">
            <span slot="label"><i class="el-icon-reading"></i></span>
            <div>test</div>
          </el-tab-pane>
        </el-tabs>
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

          <hello-world />

        </el-main>
        <!-- 底部 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AsideTools from './home/aside-tools.vue'

export default {
  name: 'Home',
  provide() {
    return {
      home: this,
    }
  },
  data() {
    return {
      asideTabHide: false,
      asideTabLast: '0',
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
     * 侧栏tab点击
     */
    asideTabClick(tab, event) {
      if (this.asideTabLast !== tab.index) {
        this.asideTabLast = tab.index
        if (this.asideTabHide) {
          this.asideTabHide = false
        }
      } else {
        // 显示隐藏侧栏
        this.asideTabHide = !this.asideTabHide
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
  components: {
    HelloWorld,
    AsideTools,
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
    height: 100%;
  }
}
.aside-left {
  border-right: 1px solid #e6e6e6;
  padding: 20px 20px 0 0;

  .aside-left-tabs {
    height: 100%;
  }
  &.aside-collapse {
    width: auto!important;
    padding: 20px 0 0 0;

    .el-tabs__header {
      margin-right: 0!important;
    }
    .el-tabs__content {
      display: none;
    }
  }
}
</style>
