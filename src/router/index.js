import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    {
      path: '/lucky',
      name: 'lucky',
      component: () => import('@/views/LuckyWheel.vue'),
      meta: {
        title: 'lucky',
        active: 'lucky'
      }
    },
    {
      path: '/luckyRecord',
      name: 'luckyRecord',
      component: () => import('@/views/luckyRecord.vue'),
      meta: {
        title: 'luckyRecord',
        active: 'luckyRecord'
      }
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('@/views/avatar.vue'),
      meta: {
        title: 'avatar',
        requiresAuth: true,
        active: 'avatar'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: 'login',
        active: 'login'
      }
    },
    {
      path: '/register/:recommendId?',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        title: 'register',
        active: 'register'
      },
      props: true
    },
    {
      path: '/',
      name: 'home',
      component:  () => import('@/views/Home.vue'),
      meta: {
        title: 'home',
        active: 'home'
      }
    },
    {
      path: '/index.html',
      name: 'home',
      component:  () => import('@/views/Home.vue'),
      meta: {
        title: 'home',
        active: 'home'
      }
    },
    {
      path: '/product',
      name: 'product',
      component:  () => import('@/views/product.vue'),
      meta: {
        title: 'product',
        active: 'product'
      }
    },
    // {
    //   path: '/blogDetail',
    //   name: 'blogDetail',
    //   component:  () => import('@/views/blogDetail.vue'),
    //   meta: {
    //     title: 'blogDetail',
    //     active: 'blogDetail'
    //   }
    // },
    {
      path: '/blogDetail/:articleId',
      name: 'blogDetail',
      component:  () => import('@/views/blogDetail.vue'),
      meta: {
        title: 'blogDetail',
        active: 'blogDetail'
      },
      props: true
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component:  () => import('@/views/ProductDetail.vue'),
      meta: {
        title: 'productDetail',
        active: 'productDetail'
      }
    },
    {
      path: '/welfare',
      name: 'welfare',
      component:  () => import('@/views/welfare.vue'),
      meta: {
        title: 'welfare',
        active: 'welfare'
      }
    },
    {
      path: '/affiliate',
      name: 'affiliate',
      component:  () => import('@/views/affiliate.vue'),
      meta: {
        title: 'affiliate',
        active: 'affiliate'
      }
    },
    {
      path: '/about',
      name: 'about',
      component:  () => import('@/views/about.vue'),
      meta: {
        title: 'about',
        active: 'about'
      }
    },
    {
      path: '/Bounty',
      name: 'Bounty',
      component:  () => import('@/views/Bounty.vue'),
      meta: {
        title: 'Bounty',
        active: 'Bounty'
      }
    },
    {
      path: '/pt/:articleType/:articleId',
      name: 'privacy',
      component:  () => import('@/views/Privacy.vue'),
      meta: {
        title: 'privacy',
        active: 'privacy'
      },
      props: true
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:  () => import('@/views/new/dashboard.vue'),
      // component:  () => import('@/views/dashboard.vue'),
      meta: {
        title: 'dashboard',
        active: 'dashboard'
      }
    },
    {
      path: '/loginPassword',
      name: 'loginPassword',
      component:  () => import('@/views/loginPassword.vue'),
      meta: {
        title: 'loginPassword',
        active: 'loginPassword'
      }
    },
    {
      path: '/payPassword',
      name: 'payPassword',
      component:  () => import('@/views/payPassword.vue'),
      meta: {
        title: 'payPassword',
        active: 'payPassword'
      }
    },
    {
      path: '/PackageList',
      name: 'PackageList',
      component:  () => import('@/views/PackageList.vue'),
      meta: {
        title: 'PackageList',
        active: 'PackageList'
      }
    },
    {
      path: '/MyPackages',
      name: 'MyPackages',
      component:  () => import('@/views/MyPackages.vue'),
      meta: {
        title: 'MyPackages',
        active: 'MyPackages'
      }
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component:  () => import('@/views/FAQ.vue'),
      meta: {
        title: 'FAQ',
        active: 'FAQ'
      }
    },
    {
      path: '/deposit',
      name: 'deposit',
      component:  () => import('@/views/deposit.vue'),
      meta: {
        title: 'deposit',
        active: 'deposit'
      }
    },
    {
      path: '/walletAddress',
      name: 'walletAddress',
      component:  () => import('@/views/walletAddress.vue'),
      meta: {
        title: 'walletAddress',
        active: 'walletAddress'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component:  () => import('@/views/blog.vue'),
      meta: {
        title: 'blog',
        active: 'blog'
      }
    },
    {
      path: '/teach',
      name: 'teach',
      component:  () => import('@/views/teach.vue'),
      meta: {
        title: 'teach',
        active: 'teach'
      }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component:  () => import('@/views/transactions.vue'),
      meta: {
        title: 'transactions',
        active: 'transactions'
      }
    },
    {
      path: '/affiliates',
      name: 'affiliates',
      component:  () => import('@/views/affiliates.vue'),
      meta: {
        title: 'affiliates',
        requiresAuth: true,
        active: 'affiliates'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component:  () => import('@/views/contact.vue'),
      meta: {
        title: 'contact',
        active: 'contact'
      }
    },
    {
      path: '/article/:articleType/:articleId',
      name: 'article',
      component: () => import('@/views/Article.vue'),
      meta: {
        title: 'article',
        active: 'article'
      },
      props: true
    },
    {
      path: '/app',
      name: 'appDown',
      component: () => import('@/views/AppDown.vue'),
      meta: {
        title: 'DownloadAPP',
        active: 'appDown'
      }
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message.vue'),
      meta: {
        title: 'message',
        active: 'message'
      }
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () => import('@/views/coupon.vue'),
      meta: {
        title: 'coupon',
        active: 'coupon'
      }
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: () => import('@/views/earnings.vue'),
      meta: {
        title: 'earnings',
        active: 'earnings'
      }
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/views/withdraw.vue'),
      meta: {
        title: 'withdraw',
        requiresAuth: true,
        active: 'withdraw'
      }
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('@/views/security.vue'),
      meta: {
        title: 'security',
        requiresAuth: true,
        active: 'security'
      }
    },
    {
      path: '/404',
      name:'404'
    },
    {
        path: '*',
        redirect: '/404'
    },
    // {
    //   path: '/miliao',
    //   name: '',
    //   component: () => import('@/views/miliao/App'),
    //   meta: {
    //     title: 'miliao',
    //     active: 'miliao'
    //   },
    //   children: [
    //     {
    //       path: '',
    //       name: 'miliao',
    //       component: () => import('@/views/miliao/Home'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'scan',
    //       name: 'scan',
    //       component: () => import('@/views/miliao/Scan'),
    //       meta: {
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'friendNotice',
    //       name: 'friendNotice',
    //       component: () => import('@/views/miliao/Friend/FriendNotice'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'addFG',
    //       name: 'addFG',
    //       component: () => import('@/views/miliao/AddFG'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'groupNotice',
    //       name: 'groupNotice',
    //       component: () => import('@/views/miliao/Group/GroupNotice'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'friendInfo',
    //       name: 'friendInfo',
    //       component: () => import('@/views/miliao/Friend/FriendInfo'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'groupInfo',
    //       name: 'groupInfo',
    //       component: () => import('@/views/miliao/Group/GroupInfo'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'userInfo',
    //       name: 'userInfo',
    //       component: () => import('@/views/miliao/User/UserInfo'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'userSetting',
    //       name: 'userSetting',
    //       component: () => import('@/views/miliao/User/UserSetting'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'sendMsg',
    //       name: 'sendMsg',
    //       component: () => import('@/views/miliao/SendMsg'),
    //       meta: {
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'friendChatSet',
    //       name: 'friendChatSet',
    //       component: () => import('@/views/miliao/Chat/FriendChatSet'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'groupChatSet',
    //       name: 'groupChatSet',
    //       component: () => import('@/views/miliao/Chat/GroupChatSet'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       }
    //     },
    //     {
    //       path: 'setInfo/:setType',
    //       name: 'setInfo',
    //       component: () => import('@/views/miliao/User/SetInfo'),
    //       meta: {
    //         requiresAuth: true,
    //         active: 'miliao'
    //       },
    //       props: true
    //     },
    //   ]
    // }
  ]
})

export default router
