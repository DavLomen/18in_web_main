<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-a1d82d12="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-a1d82d12="" class="page-header">
					<div data-v-a1d82d12="" class="page-title">{{$t("myPackages.MyContract")}}</div>
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
				<div data-v-a1d82d12="" class="container222">
					<div data-v-a1d82d12="" class="t-table">
						<div data-v-a1d82d12="" class="tr">
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.TXID")}} | {{$t("myPackages.Time")}}
							</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.Contract")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.Return")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.TotalProfit")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.InvestPeriod")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.Amount")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.ProductDetails")}}</div>
							<div data-v-a1d82d12="" class="th">{{$t("myPackages.NextPay")}}</div>
						</div>
						<div data-v-a1d82d12="" class="tr" v-for="(item,index) in list" :key="index">
							<div data-v-a1d82d12="" class="td">{{item.order_number}}<br />{{item.addtime_txt}}</div>
							<div data-v-a1d82d12="" class="td">{{item.title}}</div>
							<div data-v-a1d82d12="" class="td">{{item.day_income}}</div>
							<div data-v-a1d82d12="" class="td">
								{{item.total_income}}
							</div>
							<div data-v-a1d82d12="" class="td">{{item.cycle}} {{$t('myPackages.Days')}}</div>
							<div data-v-a1d82d12="" class="td">
								{{item.amount}}
							</div>
							<div data-v-a1d82d12="" class="td" @click="$router.push('productDetail/'+item.pid)">
								{{$t('myPackages.view')}}
							</div>
							<div data-v-a1d82d12="" class="td">
								<div v-if="item.status==1 && item.next_time!=0">
									<el-statistic :value="item.next_time*1000" @finish="hilarity(index)"
										format="HH:mm:ss" time-indices :value-style="style">
									</el-statistic>
								</div>
								<span v-if="item.status==1 && item.next_time==0">{{$t('myPackages.SettlementProgress')}}</span>
								<span v-if="item.status==2">{{$t('myPackages.completed')}}</span>
							</div>

						</div>
						<div data-v-a1d82d12="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>

						<div data-v-a1d82d12 class="pagination-box">
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
		getUserProductList
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	export default {
		name: 'myPackagesView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		data() {
			return {
				is_dropdown: false,
				style: {
					color: '#000'
				},
				currentPage: 1,
				total: 0,

				list: [],
				FormData: {
					page_no: 1,
					status: ''
				},
			};
		},
		mounted() {
			this.FormData.status = this.$route.query.status
			this.init();
		},
		methods: {
			hilarity(index) {
				this.list[index].next_time = 0
				// window.location.reload();
			},
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getUserProductList(this.FormData).then((res) => {
					loading.close();
					const list = res.data.data
					this.list = list;
					this.currentPage = res.data.current_page
					this.total = res.data.total
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