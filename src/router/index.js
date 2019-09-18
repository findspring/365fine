import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('pages/index')), 'index');
// const visitors = r => require.ensure([], () => r(require('pages/visitors')), 'visitors');


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
		}
		// , {
		// 	path: "/visitors",
		// 	name: 'visitors',
		// 	meta: {
		// 		title: '访客',
		// 		flag: 'visitors',
		// 		keepAlive: true,
		// 	},
		// 	component: visitors
		// }

	]
})