// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入自定义组件
import NavMain from './components/NavMain'
import Footer from './components/Footer'
// 引用第三方模块
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;
// 注册全局组件
Vue.component('nav-main',NavMain);
Vue.component('div-footer',Footer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
