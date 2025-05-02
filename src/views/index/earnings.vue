<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>


					<div data-v-7a5af1dd="" class="banner">
						<div data-v-7a5af1dd="" class="banner__content">
							<div data-v-7a5af1dd="" class="container">
								<div data-v-7a5af1dd="" class="row g-3 justify-content-center">
									<div data-v-7a5af1dd="" class="col-lg-10 text-center">
										<h2 data-v-7a5af1dd="" class="m-0 banner-title">
											{{$t("earnings.MiningEarnings")}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-7a5af1dd="" class="section">
						<div data-v-7a5af1dd="" class="container">
							<div data-v-7a5af1dd="" class="table-responsive--md">
								<table data-v-7a5af1dd="" class="table custom--table">
									<thead data-v-7a5af1dd="">
										<tr data-v-7a5af1dd="">
											<th data-v-7a5af1dd="">{{$t("earnings.Date")}}Date</th>
											<th data-v-7a5af1dd="">{{$t("earnings.FromInvestment")}}</th>
											<th data-v-7a5af1dd="">{{$t("earnings.Detail")}}</th>
										</tr>
									</thead>
									<tbody data-v-7a5af1dd="">
										<tr data-v-7a5af1dd="" v-for="(item,index) in list" :key="index">
											<td data-v-7a5af1dd="" :data-label="$t('earnings.Date')"><strong
													data-v-7a5af1dd="">{{item.trade_time}}</strong></td>
											<td data-v-7a5af1dd="" :data-label="$t('earnings.FromInvestment')">
												{{item.order_number}}
											</td>
											<td data-v-7a5af1dd="" :data-label="$t('earnings.Detail')" class="budget">
												<span data-v-7a5af1dd="" class="font-weight-bold text--success">
													USDT +{{item.trade_amount}}
												</span>
											</td>

										</tr>
										<tr data-v-7a5af1dd="" v-show="total==0">
											<td data-v-7a5af1dd="" colspan="100%" class="text-center">
												{{$t("common.Nodata")}}
											</td>
										</tr>

									</tbody>

								</table>

							</div>
							<div data-v-f8cf1ec2="" class="pagination-box">
								<div data-v-f8cf1ec2="" class="pagination ">
									<el-pagination background hide-on-single-page layout="prev, pager, next"
										:total="total" @current-change="handleCurrentChange"
										:current-page="currentPage">
									</el-pagination>

								</div>
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
		name: 'earningsView',
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
					trade_type: 18
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