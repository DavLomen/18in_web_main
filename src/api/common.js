// src/api/user.js
import request from '@/utils/request'

export function login(data) {return request({url: '/api/user/login',method: 'post',data})}

export function getInfo(token) {return request({url: '/api/user/getuserinfo',method: 'get',params: {token:token}})}

export function logout() {return request({url: '/user/logout',method: 'post'})}

export const Register = (data) => request({url: '/api/user/Register',method: 'post',data})
// export const RegisterCode = (params) => request({url: '/api/Account/code',method: 'get',params})
export const noticeList = (data) => request({url: '/api/common/noticeList',method: 'post',data})
export const noticeDetail = (data) => request({url: '/api/common/noticeDetail',method: 'post',data})
//产品合约
export const productList = (params = {}) => request({url: '/api/product/productList',method: 'get',params})
export const productDetail = (data) => request({url: '/api/product/detail',method: 'post',data})
export const productBuy = (data) => request({url: '/api/product/buy',method: 'post',data})
//系统配置
export const BackData = (data) => request({url: '/api/Common/BackData',method: 'post',data})
//信息
export const getInboxList = (data) => request({url: '/api/Inbox/getInboxList',method: 'post',data})
export const inboxDetail = (data) => request({url: '/api/Inbox/inboxDetail',method: 'post',data})
//统计
export const getStatisticsInfo = (data) => request({url: '/api/user/getStatisticsInfo',method: 'post',data})
//充值
export const getRechargetype = (data) => request({url: '/api/Transaction/getRechargetype',method: 'post',data})
export const GetPayBankCode = (data) => request({url: '/api/Account/GetPayBankCode',method: 'post',data})
export const newRechargeOrder = (data) => request({url: '/api/Recharge/newRechargeOrder',method: 'post',data})

export const getRechargeRecord = (data) => request({url: '/api/Transaction/getRechargeRecord',method: 'post',data})

//提现
export const getBankCardList = (data) => request({url: '/api/Account/getBankCardList',method: 'post',data})
export const draw = (data) => request({url: '/api/Transaction/draw',method: 'post',data})//语言问题
export const getDrawRecord = (data) => request({url: '/api/Transaction/getDrawRecord',method: 'post',data})
//团队信息
export const teamReport = (data) => request({url: '/api/user/teamReport',method: 'post',data})
//订单列表
export const getUserProductList = (data) => request({url: '/api/product/getUserProductList',method: 'post',data})
//账单
export const FundDetails = (data) => request({url: '/api/Transaction/FundDetails',method: 'post',data})


//设置
export const AddBankCard = (data) => request({url: '/api/Account/AddBankCard',method: 'post',data})
export const setuserinfo = (data) => request({url: '/api/user/setuserinfo',method: 'post',data})

//通知
export const getNewInbox = (data) => request({url: '/api/Inbox/getNewInbox',method: 'post',data})

