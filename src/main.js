// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastClick from "fastclick"
import router from './router'
import store from './store'
import install from 'utils/install'
import obj from 'utils/index'
import Vant from 'vant';
import {
	ToastPlugin
} from 'vux'
Vue.use(ToastPlugin)

import {
	WechatPlugin
} from 'vux'
Vue.use(WechatPlugin)

Vue.use(install)

import './assets/css/reset.css';
import './assets/stylus/index.styl';
import 'vant/lib/index.css';
Vue.use(Vant);

let httpHead = {
	// "channel": isWeixin?'1':(isios?'2':(isandroid?'3':'5')),//微信(公众号)传1，ios传2，安卓传3，其他传5
	"clientTime": new Date().getTime(),
	// "authToken": authToken,
}
router.beforeEach((to, from, next) => {
	// 获取authToken
	// 4b5c98b6800a03b3d18a9dbcd55107743ae7d11fab03c5006fc07d2fa479e430
	// let authToken = "c58ae00cf383fb9aad84458b495965039e32fc2cbf7976c6ca39c8ebf2cbf1c5";
	let authToken = localStorage.getItem("XX-Token") || "";
	if (!authToken) {
		authToken = obj.getQueryString("XX-Token")
		if (authToken) {
			localStorage.setItem("XX-Token", authToken)
		}
	}
	if (authToken) {
		localStorage.setItem("XX-Token", authToken)
	}
	//title变化
	if (to.meta.title) {
		document.title = to.meta.title
	}
	// Vue.prototype.$http.defaults.headers['common'] = httpHead;
	Vue.prototype.$http.defaults.headers['XX-Token'] = localStorage.getItem("XX-Token") || "";
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