import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('pages/index')), 'index');
const find = r => require.ensure([], () => r(require('pages/find')), 'find');
const order = r => require.ensure([], () => r(require('pages/order')), 'order');
const mine = r => require.ensure([], () => r(require('pages/mine')), 'mine');
const search = r => require.ensure([], () => r(require('pages/search')), 'search');
const message = r => require.ensure([], () => r(require('pages/message')), 'message');
const guide = r => require.ensure([], () => r(require('pages/guide')), 'guide');
const friend = r => require.ensure([], () => r(require('pages/friend')), 'friend');
const salary = r => require.ensure([], () => r(require('pages/salary')), 'salary');
const cash = r => require.ensure([], () => r(require('pages/cash')), 'cash');

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			redirect: 'index'
		}, {
			path: '/index',
			name: 'index',
			meta: {
				requireAuth: true,
				title: '365fine',
				flag: 'index',
				belongToGroup: '365fine',
				keepAlive: false,
			},
			component: index
		}, {
			path: "/find",
			name: 'find',
			meta: {
				title: '发现',
				flag: 'find',
				keepAlive: true,
			},
			component: find
		}, {
			path: "/order",
			name: 'order',
			meta: {
				title: '订单',
				flag: 'order',
				keepAlive: true,
			},
			component: order
		}, {
			path: "/mine",
			name: 'mine',
			meta: {
				title: '我的',
				flag: 'mine',
				keepAlive: true,
			},
			component: mine
		}, {
			path: "/search",
			name: 'search',
			meta: {
				title: '搜索',
				flag: 'search',
				keepAlive: true,
			},
			component: search
		}, {
			path: "/message",
			name: 'message',
			meta: {
				title: '消息',
				flag: 'message',
				keepAlive: true,
			},
			component: message
		}, {
			path: "/guide",
			name: 'guide',
			meta: {
				title: '新手指南',
				flag: 'guide',
				keepAlive: true,
			},
			component: guide
		}, {
			path: "/friend",
			name: 'friend',
			meta: {
				title: '邀请好友',
				flag: 'friend',
				keepAlive: true,
			},
			component: friend
		}, {
			path: "/salary",
			name: 'salary',
			meta: {
				title: '工资表',
				flag: 'salary',
				keepAlive: true,
			},
			component: salary
		}, {
			path: "/cash",
			name: 'cash',
			meta: {
				title: '现金任务',
				flag: 'cash',
				keepAlive: true,
			},
			component: cash
		}

	]
})