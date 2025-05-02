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
										<h2 data-v-7a5af1dd="" class="m-0 banner-title">{{$t("message.Message")}}</h2>
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
											<th data-v-7a5af1dd="">{{$t("message.Date")}}</th>
											<th data-v-7a5af1dd="">{{$t("message.Title")}}</th>
											<th data-v-7a5af1dd="">{{$t("message.Detail")}}</th>
										</tr>
									</thead>
									<tbody data-v-7a5af1dd="">
										<tr data-v-7a5af1dd="" v-for="(item,index) in list" :key="index">
											<td data-v-7a5af1dd="" :data-label="$t('message.Date')"><strong
													data-v-7a5af1dd="">{{timestampToDate(item.createtime)}}</strong>
											</td>
											<td data-v-7a5af1dd="" :data-label="$t('message.Title')">
												{{item.title}}
											</td>
											<td data-v-7a5af1dd="" :data-label="$t('message.Detail')" class="budget">
												<span data-v-7a5af1dd="" class="font-weight-bold text--success">
													<!-- USDT +15.00 -->

													<el-button type="text"
														@click="openView(item.id)">{{$t('message.View')}}</el-button>
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
							<div class="pagination-box" style="">
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
		getInboxList,
		inboxDetail
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'messageView',
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
				getInboxList(this.FormData).then((res) => {
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
			},
			openView(id) {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				inboxDetail({
					id: id
				}).then((res) => {
					loading.close();
					this.$alert(res.data.content, this.$t("message.Message"), {
						dangerouslyUseHTMLString: true
					}).catch(action => {
						console.log(action)

					});
					console.log('err', res)
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});

			},
			timestampToDate(timestamp) {
				const date = new Date(timestamp * 1000);
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0');
				const day = String(date.getDate()).padStart(2, '0');
				const hours = String(date.getHours()).padStart(2, '0');
				const minutes = String(date.getMinutes()).padStart(2, '0');
				const seconds = String(date.getSeconds()).padStart(2, '0');
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},

		}
	}
</script>
<style>
	@media (max-width: 768px) {
		.el-message-box {
			width: 90%;
		}
	}
</style>