import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/product',
		name: 'product',
		component: () => import('../views/ProductView.vue')
	},
	{
		path: '/productDetail/:id',
		name: 'productDetail',
		component: () => import('../views/productDetailView.vue'),
		props: true
	},
	{
		path: '/affiliate',
		name: 'affiliate',
		component: () => import('../views/AffiliateView.vue')
	},
	{
		path: '/faq',
		name: 'faq',
		component: () => import('../views/FaqView.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../views/BlogView.vue')
	}, {
		path: '/blogDetail/:id',
		name: 'blogDetail',
		component: () => import('../views/BlogDetailView.vue'),
		props: true
	},
	{
		path: '/welfare',
		name: 'welfare',
		component: () => import('../views/WelfareView.vue')
	},
	{
		path: '/privacy',
		name: 'privacy',
		component: () => import('../views/privacyView.vue')
	},
	{
		path: '/termsService',
		name: 'termsService',
		component: () => import('../views/termsServiceView.vue')
	},
	{
		path: '/tutorial',
		name: 'tutorial',
		component: () => import('../views/TutorialView.vue')
	}, {
		path: '/article/:id',
		name: 'article',
		component: () => import('../views/ArticleView.vue'),
		props: true
	},
	{
		path: '/app',
		name: 'app',
		component: () => import('../views/AppView.vue')
	},


	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	},


	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/RegisterView.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/ContactView.vue')
	},


	//已经登陆的页面
	{
		path: '/dashboard2',
		name: 'dashboard',
		component: () => import('../views/index/dashboard.vue')
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('../views/index/new/dashboard.vue')
	},
	{
		path: '/message',
		name: 'message',
		component: () => import('../views/index/new/message.vue')
	},
	// {
	// 	path: '/deposit',
	// 	name: 'deposit',
	// 	component: () => import('../views/index/deposit.vue')
	// },
	{
		path: '/deposit',
		name: 'deposit',
		component: () => import('../views/index/new/deposit.vue')
	},
	// {
	// 	path: '/withdraw',
	// 	name: 'withdraw',
	// 	component: () => import('../views/index/withdraw.vue')
	// },
	{
		path: '/withdraw',
		name: 'withdraw',
		component: () => import('../views/index/new/withdraw.vue')
	},
	// {
	// 	path: '/myPackages',
	// 	name: 'myPackages',
	// 	component: () => import('../views/index/myPackages.vue')
	// },
	{
		path: '/myPackages',
		name: 'myPackages',
		component: () => import('../views/index/new/myPackages.vue')
	},{
		path: '/packageList',
		name: 'packageList',
		component: () => import('../views/index/new/packageList.vue')
	},
	{
		path: '/transactions',
		name: 'transactions',
		component: () => import('../views/index/new/transactions.vue')
	},
	{
		path: '/walletAddress',
		name: 'walletAddress',
		component: () => import('../views/index/new/setting/walletAddress.vue')
	},
	{
		path: '/loginPassword',
		name: 'loginPassword',
		component: () => import('../views/index/new/setting/loginPassword.vue')
	},
	{
		path: '/payPassword',
		name: 'payPassword',
		component: () => import('../views/index/new/setting/payPassword.vue')
	}, {
		path: '/affiliates',
		name: 'affiliates',
		component: () => import('../views/index/new/setting/affiliates.vue')
	},
	{
		path: '/earnings',
		name: 'earnings',
		component: () => import('../views/index/new/earnings.vue')
	},
	{
		path: '/depositList',
		name: 'depositList',
		component: () => import('../views/index/depositList.vue')
	},
	{
		path: '/withdrawList',
		name: 'withdrawList',
		component: () => import('../views/index/withdrawList.vue')
	},


]

const router = new VueRouter({
	routes
})

export default router