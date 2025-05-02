<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>


					<div data-v-4ff6762a="" class="banner">
						<div data-v-4ff6762a="" class="banner__content">
							<div data-v-4ff6762a="" class="container">
								<div data-v-4ff6762a="" class="row g-3 justify-content-center">
									<div data-v-4ff6762a="" class="col-lg-10 text-center">
										<h2 data-v-4ff6762a="" class="m-0 banner-title">{{$t("myPackages.MyContract")}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-4ff6762a="" class="section">
						<div data-v-4ff6762a="" class="container">
							<div data-v-4ff6762a="" class="table-responsive--md">
								<table data-v-4ff6762a="" class="table custom--table">
									<thead data-v-4ff6762a="">
										<tr data-v-4ff6762a="">
											<th data-v-4ff6762a="">{{$t("myPackages.TXID")}} | {{$t("myPackages.Time")}}
											</th>
											<th data-v-4ff6762a="">{{$t("myPackages.Contract")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.Return")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.TotalProfit")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.InvestPeriod")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.Amount")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.ProductDetails")}}</th>
											<th data-v-4ff6762a="">{{$t("myPackages.NextPay")}}</th>
										</tr>
									</thead>
									<tbody data-v-4ff6762a="">
										<tr data-v-7a5af1dd="" v-for="(item,index) in list" :key="index">
											<td data-v-7a5af1dd=""
												:data-label="$t('myPackages.TXID')+' | '+$t('myPackages.Time')">
												{{item.order_number}}<br />{{item.addtime_txt}}
											</td>
											<td data-v-7a5af1dd="" :data-label="$t('myPackages.Contract')">
												{{item.title}}
											</td>

											<td data-v-7a5af1dd="" :data-label="$t('myPackages.Return')">
												{{item.day_income}}
											</td>

											<td data-v-7a5af1dd="" :data-label="$t('myPackages.TotalProfit')">
												{{item.total_income}}
											</td>

											<td data-v-7a5af1dd="" :data-label="$t('myPackages.InvestPeriod')">
												{{item.cycle}} {{$t('myPackages.Days')}}
											</td>

											<td data-v-7a5af1dd="" :data-label="$t('myPackages.Amount')">
												{{item.amount}}
											</td>

											<td data-v-7a5af1dd="" :data-label="$t('myPackages.ProductDetails')"
												@click="$router.push('productDetail/'+item.pid)">
												{{$t('myPackages.view')}}
											</td>
											<td data-v-7a5af1dd="" :data-label="$t('myPackages.NextPay')">
												<!-- {{item.title}} -->
												<span v-if="item.status==2">{{$t('myPackages.completed')}}</span>
												<el-statistic v-else :value="item.next_time*1000"
													@finish="hilarity(index)" format="HH:mm:ss" time-indices
													:value-style="style">
												</el-statistic>
											</td>

										</tr>
										<tr data-v-4ff6762a="" v-show="total==0">
											<td data-v-4ff6762a="" colspan="100%" class="text-center">
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
		getUserProductList
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'myPackagesView',
		components: {
			DaHeaderView,
			FooterView
		},
		data() {
			return {
				style: {
					color: 'white'
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
				window.location.reload();
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