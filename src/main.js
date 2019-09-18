// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastClick from "fastclick"
import router from './router'
import store from './store'
import install from 'utils/install'
import obj from 'utils/index'
import {
	ToastPlugin,
	LoadingPlugin,
	AlertPlugin
} from 'vux'

import {
	WechatPlugin
} from 'vux'
Vue.use(WechatPlugin)

Vue.use(install)

import './assets/css/reset.css';
import './assets/stylus/index.styl';
let httpHead = {
	// "channel": isWeixin?'1':(isios?'2':(isandroid?'3':'5')),//微信(公众号)传1，ios传2，安卓传3，其他传5
	"clientTime": new Date().getTime(),
	"authToken": authToken,
}
router.beforeEach((to, from, next) => {
	// 获取authToken
	let authToken = localStorage.getItem("authToken") || "";
	if (!authToken) {
		authToken = obj.getQueryString("authToken")
		if (authToken) {
			localStorage.setItem("authToken", authToken)
		}
	}
	//title变化
	if (to.meta.title) {
		document.title = to.meta.title
	}
	Vue.prototype.$http.defaults.headers['common'] = httpHead;
	Vue.prototype.$http.defaults.headers['common']['authToken'] = localStorage.getItem("authToken") || "";
	next()
});

fastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})