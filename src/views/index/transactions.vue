<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>


					<div data-v-f8cf1ec2="" class="banner">
						<div data-v-f8cf1ec2="" class="banner__content">
							<div data-v-f8cf1ec2="" class="container">
								<div data-v-f8cf1ec2="" class="row g-3 justify-content-center">
									<div data-v-f8cf1ec2="" class="col-lg-10 text-center">
										<h2 data-v-f8cf1ec2="" class="m-0 banner-title">
											{{$t("transactions.Transactions")}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-f8cf1ec2="" class="section">
						<div data-v-f8cf1ec2="" class="container">
							<div data-v-f8cf1ec2="" class="table-responsive--md">
								<table data-v-f8cf1ec2="" class="table custom--table">
									<thead data-v-f8cf1ec2="">
										<tr data-v-f8cf1ec2="">
											<th data-v-f8cf1ec2="">{{$t("transactions.TXID")}}</th>
											<th data-v-f8cf1ec2="">{{$t("transactions.Transacted")}}</th>
											<th data-v-f8cf1ec2="">{{$t("transactions.Amount")}}</th>
											<th data-v-f8cf1ec2="">{{$t("transactions.PostBalance")}}</th>
											<th data-v-f8cf1ec2="">{{$t("transactions.TransactionType")}}</th>
										</tr>
									</thead>
									<tbody data-v-f8cf1ec2="">
										<tr data-v-f8cf1ec2="" v-for="(item,index) in list" :key="index">
											<td data-v-f8cf1ec2="" :data-label="$t('transactions.TXID')">
												{{item.order_number}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('transactions.Transacted')">
												{{item.trade_time}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('transactions.Amount')">
												{{item.trade_amount}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('transactions.PostBalance')">
												{{item.account_balance}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('transactions.TransactionType')">
												{{item.remarks}}
											</td>
										</tr>
										<tr data-v-6cf144cc="" v-show="total==0">
											<td data-v-6cf144cc="" colspan="100%" class="text-center">
												{{$t("common.Nodata")}}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="pagination-box">
								<el-pagination background hide-on-single-page layout="prev, pager, next" :total="total"
									@current-change="handleCurrentChange" :current-page="currentPage">
								</el-pagination>
							</div>

						</div>
					</section>


					<FooterView></FooterView>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		FundDetails
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'transactionsView',
		components: {
			DaHeaderView,
			FooterView
		},
		data() {
			return {
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