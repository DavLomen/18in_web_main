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
										<h2 data-v-f8cf1ec2="" class="m-0 banner-title">{{$t("withdraw.MyWithdrawals")}}
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
											<th data-v-f8cf1ec2="">{{$t("withdraw.TXID")}}</th>
											<th data-v-f8cf1ec2="">{{$t("withdraw.WalletAddress")}}</th>
											<th data-v-f8cf1ec2="">{{$t("withdraw.Amount")}}</th>
											<th data-v-f8cf1ec2="">{{$t("withdraw.Status")}}</th>
											<th data-v-f8cf1ec2="">{{$t("withdraw.Time")}}</th>
										</tr>
									</thead>
									<tbody data-v-f8cf1ec2="">
										<tr data-v-f8cf1ec2="" v-for="(item,index) in list" :key="index">
											<td data-v-f8cf1ec2="" :data-label="$t('withdraw.TXID')"><strong
													data-v-f8cf1ec2="">{{item.dan}}</strong></td>
											<td data-v-f8cf1ec2="" :data-label="$t('withdraw.WalletAddress')">
												{{item.bank_no_tail}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('withdraw.Amount')" class="budget">
												<span data-v-f8cf1ec2="" class="font-weight-bold text--success">
													{{item.money}}
												</span></td>
											<td data-v-f8cf1ec2="" :data-label="$t('withdraw.Status')">
												{{item.status_desc}}
											</td>
											<td data-v-f8cf1ec2="" :data-label="$t('withdraw.Time')">
												{{item.adddate}}
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
		getDrawRecord
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'withdrawListView',
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
					// state: 0,
					page_no: 1,
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
				getDrawRecord(this.FormData).then((res) => {
					loading.close();
					const list = res.info
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