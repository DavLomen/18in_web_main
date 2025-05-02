<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-4f3ab185="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-4f3ab185="" class="page-header">
					<div data-v-4f3ab185="" class="page-title">{{$t("earnings.MiningEarnings")}}</div>
					<div data-v-6b48c1cb="" class="el-dropdown">
					
						<div data-v-6b48c1cb="" aria-haspopup="list" aria-controls="dropdown-menu-8265"
							role="button" tabindex="0" x-placement="bottom-end"
							class="right-icon el-dropdown-selfdefine" @click="is_dropdown=!is_dropdown"><i
								data-v-6b48c1cb="" class="el-icon-user"></i></div>
						<ul data-v-6b48c1cb="" id="dropdown-menu-8265" class="el-dropdown-menu el-popper"
							v-show="is_dropdown">
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/walletAddress')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-wallet"></i>
								{{$t('common.WalletAddress')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/loginPassword')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-lock"></i>
								{{$t('common.LoginPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/payPassword')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-lock"></i>
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
				<div data-v-4f3ab185="" class="container222">
					<div data-v-4f3ab185="" class="t-table">
						<div data-v-4f3ab185="" class="tr">
							<div data-v-4f3ab185="" class="th">{{$t("earnings.Date")}}</div>
							<div data-v-4f3ab185="" class="th">{{$t("earnings.FromInvestment")}}</div>
							<div data-v-4f3ab185="" class="th">{{$t("earnings.Detail")}}</div>
						</div> <!---->
						<div data-v-4f3ab185="" class="tr" v-for="(item,index) in list" :key="index">
							<div data-v-4f3ab185="" class="td">{{item.trade_time}}</div>
							<div data-v-4f3ab185="" class="td">{{item.trade_number}}</div>
							<div data-v-4f3ab185="" class="td">
								USDT +{{item.trade_amount}}
							</div>
						</div>
						<div data-v-4f3ab185="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>
					</div>
					<div data-v-4f3ab185 class="pagination-box">
						<el-pagination background layout="prev, pager, next" :total="total"
							@current-change="handleCurrentChange" :current-page="currentPage">
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		FundDetails
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	export default {
		name: 'messageView',
		components: {
			DaHeaderView2,
		},
		data() {
			return {
				is_dropdown:false,
				currentPage: 1,
				total: 0,

				list: [],
				FormData: {
					page_no: 1,
					trade_type: 18,
				},
			};
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				FundDetails(this.FormData).then((res) => {
					loading.close();
					const list = res.list
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
			},

		}
	}
</script>
<style>

</style>