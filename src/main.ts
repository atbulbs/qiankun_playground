import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

// 导入qiankun所需方法
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 当地一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载的子应用
  initGlobalState, // 微前端之间的通信
  start, // 启动
} from 'qiankun'

// 渲染主应用
new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')

// 注册子应用
registerMicroApps(
  [
    {
      name: 'one',
      entry: '//localhost:8001',
      container: '#micro-view',
      activeRule: '/one',
    },
    // {
    //   name: 'two',
    //   entry: '//localhost:8002',
    //   container: '#micro-view',
    //   activeRule: '/two',
    // },
  ],
  {
    beforeLoad: [
      // (app) => {
      //   console.log('beforeLoad', app)
      // },
    ],
    beforeMount: [
      // (app) => {
      //   console.log('beforeMount')
      // },
    ],
    beforeUnmount: [
      // (app) => {
      //   console.log('beforeUnmount')
      // },
    ],
    afterUnmount: [
      // (app) => {
      //   console.log('afterUnmount')
      // },
    ],
  }
)

// setDefaultMountApp('one')

// 第一个子应用加载完毕后回调
runAfterFirstMounted(() => {
  console.log('第一个子应用加载完毕后的回调')
})

// 启动qiankun
start()
