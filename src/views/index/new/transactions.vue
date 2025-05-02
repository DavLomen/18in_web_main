<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>


			<div data-v-a404b2ba="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-a404b2ba="" class="page-header">
					<div data-v-a404b2ba="" class="page-title"> {{$t("transactions.Transactions")}}</div>
					<div data-v-6b48c1cb="" class="el-dropdown">

						<div data-v-6b48c1cb="" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button"
							tabindex="0" x-placement="bottom-end" class="right-icon el-dropdown-selfdefine"
							@click="is_dropdown=!is_dropdown"><i data-v-6b48c1cb="" class="el-icon-user"></i></div>
						<ul data-v-6b48c1cb="" id="dropdown-menu-8265" class="el-dropdown-menu el-popper"
							v-show="is_dropdown">
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/walletAddress')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-wallet"></i>
								{{$t('common.WalletAddress')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/loginPassword')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-lock"></i>
								{{$t('common.LoginPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/payPassword')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-lock"></i>
								{{$t('common.PaymentPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$store.dispatch('logout')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-switch-button"></i>
								{{$t('common.Logout')}}
							</li>
							<div data-v-6b48c1cb="" x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
						</ul>
					</div>
				</div>
				<div data-v-a404b2ba="" class="container222">
					<div data-v-a404b2ba="" class="t-table">
						<div data-v-a404b2ba="" class="tr">
							<div data-v-a404b2ba="" class="th">{{$t("transactions.TXID")}}</div>
							<div data-v-a404b2ba="" class="th">{{$t("transactions.Transacted")}}</div>
							<div data-v-a404b2ba="" class="th">{{$t("transactions.Amount")}}</div>
							<div data-v-a404b2ba="" class="th">{{$t("transactions.PostBalance")}}</div>
							<div data-v-a404b2ba="" class="th">{{$t("transactions.TransactionType")}}</div>
						</div> <!---->
						<div data-v-a404b2ba="" class="tr" v-for="(item,index) in list" :key="index">
							<div data-v-a404b2ba="" class="td">{{item.order_number}}</div>
							<div data-v-a404b2ba="" class="td">{{item.trade_time}}</div>
							<div data-v-a404b2ba="" class="td"
								:style="item.jj=='+' ? 'color: rgb(40, 199, 111)' : 'color: red'">
								{{item.jj}}{{item.trade_amount}} USD</div>
							<div data-v-a404b2ba="" class="td">USD {{item.account_balance}}</div>
							<div data-v-a404b2ba="" class="td">{{item.remarks}}</div>
						</div>
						<div data-v-a404b2ba="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>

						<div data-v-a404b2ba class="pagination-box">
							<el-pagination background layout="prev, pager, next" :total="total"
								@current-change="handleCurrentChange" :current-page="currentPage">
							</el-pagination>
						</div>
					</div>

				</div>
			</div>
			<DaFooterView2></DaFooterView2>
		</div>

	</div>
</template>

<script>
	import {
		FundDetails
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	export default {
		name: 'transactionsView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		data() {
			return {
				is_dropdown: false,
				currentPage: 1,
				total: 0,

				list: [],
				FormData: {
					page_no: 1,
					trade_type: 0
				},
			};
		},
		beforeRouteUpdate(to, from, next) {
			// 在路由更新前处理逻辑
			var type = to.query.type;
			console.log("路由参数变化:", type);
			this.FormData.trade_type = type
			this.init();
			next(); // 必须调用 next() 继续导航
		},
		mounted() {
			this.FormData.trade_type = this.$route.query.type
			this.init();
		},
		methods: {
			hilarity(index) {
				this.list[index].next_time = 0
			},
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.list = [];
				FundDetails(this.FormData).then((res) => {
					loading.close();
					const list = res.list;
					this.list = list;
					this.currentPage = Number(res.data_current_page)
					this.total = res.data_total_nums
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			handleCurrentChange(val) {
				this.list = [];
				this.FormData.page_no = val;
				this.init();
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style>

</style>