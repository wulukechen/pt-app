// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import 'lib-flexible/flexible.js'
import 'lib-flexible'
import Vuex from 'vuex'
/****公共组件****************/
import store from './vuex/index.js'
//路由组件
import routers  from './router.js'
import axios from 'axios'
//UI组件
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/******公共样式*************/
//引入公共样式
import './assets/CSS/style.css'

/*****全局变量**************/
Vue.config.productionTip = false
Vue.prototype.$router = VueRouter;
Vue.prototype.axios=axios;
Vue.prototype.HOST = 'http://127.0.0.1:8088/';
//Vue.prototype.HOST = 'http://39.105.89.63:8088/Blade-0.0.1-SNAPSHOT'

Vue.use(VueRouter)
Vue.use(MuseUI);
Vue.use(ElementUI);
Vue.use(Vuex)

/*******局部变量路由********/
const router = new VueRouter({
  routes: routers
})


/* eslint-disable no-new */
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')




export default router; //将路由器导出
