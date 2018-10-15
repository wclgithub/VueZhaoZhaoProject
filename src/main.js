// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入自定义组件
import NavMain from './components/NavMain'
import Footer from './components/Footer'
import MyHome from './components/MyHome'
import MyInfo from './components/MyInfo'
import MyOldInfo from './components/MyOldInfo'
import MyOrder from './components/MyOrder'
import MyColl from './components/MyColl'
import MyState from './components/MyState'
// 引用第三方模块
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;
// 注册全局组件
Vue.component('nav-main',NavMain);
Vue.component('div-footer',Footer);
Vue.component('my-home',MyHome);
Vue.component('my-info',MyInfo);
Vue.component('my-oldinfo',MyOldInfo);
Vue.component('my-order',MyOrder);
Vue.component('my-coll',MyColl);
Vue.component('my-state',MyState);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
