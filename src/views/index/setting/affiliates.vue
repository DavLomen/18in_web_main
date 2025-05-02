<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>

					<div data-v-6cf144cc="" class="banner">
						<div data-v-6cf144cc="" class="banner__content">
							<div data-v-6cf144cc="" class="container">
								<div data-v-6cf144cc="" class="row g-3 justify-content-center">
									<div data-v-6cf144cc="" class="col-lg-10 text-center">
										<h2 data-v-6cf144cc="" class="m-0 banner-title">
										{{$t("settings.Affiliates")}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-6cf144cc="" class="section">
						<div data-v-6cf144cc="" class="container">
							<div data-v-6cf144cc="" class="row justify-content-center mt-80">
								<div data-v-6cf144cc="" class="col-md-12">
									<div data-v-6cf144cc="" class="card custom--card">
										<div data-v-6cf144cc="" class="card-body">
											<div data-v-6cf144cc="" class="form-group mb-4"><label
													data-v-6cf144cc="" style="color: white;">{{$t("settings.YourReferralCode")}}</label>
												<div data-v-6cf144cc="" class="input-group">
													<input :value="loginUserInfo.idcode" data-v-6cf144cc="" type="text"
														name="text" id="referralURL2" readonly="readonly" style="color: white;"
														class="form-control form--control"> <button data-v-6cf144cc=""
														@click="copyToClipboard(loginUserInfo.idcode)" id="copyBoard2"
														class="input-group-text copytext copyBoard2 copy-btn copy"><i
															data-v-6cf144cc=""
															class="el-icon-copy-document"></i></button>
												</div>
											</div>
											<div data-v-6cf144cc="" class="form-group mb-4"><label
													data-v-6cf144cc="" style="color: white;">{{$t("settings.YourAffiliateLink")}}</label>
												<div data-v-6cf144cc="" class="input-group">
													<input data-v-6cf144cc="" type="text" name="text" id="referralURL"
														readonly="readonly" style="color: white;"
														:value="BackData ? BackData.yq_url+loginUserInfo.idcode : ''"
														class="form-control form--control"> <button data-v-6cf144cc=""
														@click="copyToClipboard(BackData ? BackData.yq_url+loginUserInfo.idcode : '')"
														id="copyBoard"
														class="input-group-text copytext copyBoard copy-btn copy"><i
															data-v-6cf144cc=""
															class="el-icon-copy-document"></i></button>
												</div>
											</div> <label data-v-6cf144cc="" style="color: white;">{{$t("settings.TotalPartner")}}
												<span data-v-6cf144cc=""
													style="font-weight: bold; color: red;">{{teamNumber}}</span></label>
											<div data-v-6cf144cc="" class="table-responsive--md">
												<table data-v-6cf144cc="" class="table custom--table">
													<thead data-v-6cf144cc="">
														<tr data-v-6cf144cc="">
															<th data-v-6cf144cc="">{{$t("settings.Date")}}</th>
															<th data-v-6cf144cc="">{{$t("settings.From")}}</th>
															<th data-v-6cf144cc="">{{$t("settings.Level")}}</th>
															<th data-v-6cf144cc="">{{$t("settings.Amount")}}</th>
															<th data-v-6cf144cc="">{{$t("settings.Type")}}</th>
														</tr>
													</thead>
													<tbody data-v-6cf144cc="">
														<tr data-v-6cf144cc="" v-for="(item,index) in dataList"
															:key="index">
															<td data-v-f8cf1ec2="" :data-label="$t('settings.Date')">
																{{item.trade_time}}
															</td>
															<td data-v-f8cf1ec2="" :data-label="$t('settings.From')">
																{{item.from}}
															</td>
															<td data-v-f8cf1ec2="" :data-label="$t('settings.Level')">
																{{item.vip_level}}
															</td>
															<td data-v-f8cf1ec2="" :data-label="$t('settings.Amount')">
																{{item.trade_amount}}
															</td>
															<td data-v-f8cf1ec2="" :data-label="$t('settings.Type')">
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
												<el-pagination background hide-on-single-page layout="prev, pager, next"
													:total="total" @current-change="handleCurrentChange"
													:current-page="currentPage">
												</el-pagination>
											</div>
											<p data-v-6cf144cc="" style="margin-top: 20px;color: white;" v-html="info.content">

											</p>
											<p data-v-6cf144cc="">
												<router-link to="/affiliate"
													class="text--base1">{{$t("settings.LearnMore")}}</router-link>
											</p>
										</div>
									</div>
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
		mapState
	} from 'vuex';
	import {
		teamReport,
		noticeList,
		FundDetails
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'affiliatesView',
		components: {
			DaHeaderView,
			FooterView
		},
		computed: {
			...mapState(['loginUserInfo', 'BackData']),
		},
		data() {
			return {
				currentPage: 1,
				total: 0,
				teamNumber: 0,
				teamList: [],


				FormData: {
					gropid: 16,
					page_no: 1,
				},
				info: {
					title: '',
					content: '',
				},


				FormData2: {
					trade_type: 8,
					page_no: 1
				},
				dataList: []
			};
		},
		mounted() {
			console.log(this.$route)
			this.$store.dispatch('init')
			this.init();
			this.initFundDetails();

			this.initNoticeList();
		},
		methods: {
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
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				teamReport().then((res) => {
					loading.close();
					this.teamNumber = res.teamNumber
					this.teamList = res.teamList
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			initFundDetails() {
				FundDetails(this.FormData2).then((res) => {
					const list = res.list;
					this.dataList = list;
					this.currentPage = Number(res.data_current_page)
					this.total = res.data_total_nums
				}).catch((res) => {
					console.log('err', res)
				});

			},
			handleCurrentChange(val) {
				this.dataList = [];
				this.FormData2.page_no = val;
				this.initFundDetails();
				console.log(`当前页: ${val}`);
			},
			copyToClipboard(text) {
				// 创建一个临时的 textarea 元素用于保存文本
				const textarea = document.createElement('textarea');
				// 设置 textarea 的值为要复制的文本
				textarea.value = text;
				// 将 textarea 移动到屏幕之外，使其不可见
				textarea.style.position = 'absolute';
				textarea.style.left = '-9999px';
				// 将 textarea 添加到文档中
				document.body.appendChild(textarea);
				// 选择 textarea 中的文本
				textarea.select();
				try {
					// 执行复制命令
					const successful = document.execCommand('copy');
					// 检查复制是否成功
					if (successful) {
						this.$message({
							showClose: true,
							offset:20,
							message: this.$t('common.CopySuccess'),
							type: 'success'
						});
						console.log('文本已成功复制到剪贴板');
					} else {
						console.error('复制文本失败');
					}
				} catch (err) {
					// 处理复制过程中可能出现的错误
					console.error('无法复制文本：', err);
				}
				// 从文档中移除 textarea
				document.body.removeChild(textarea);
			},

			initNoticeList() {
				noticeList(this.FormData).then((res) => {
					if (res.data_total_nums == 1) {
						this.info = res.info[0]
					}
					console.log(res)
				}).catch((res) => {
					console.log('err', res)

				});
			}
		}
		// data() {
		// 	return {
		// 		currentPage: 1,
		// 		total: 0,
		// 	};
		// },
		// methods: {
		// 	handleCurrentChange(val) {
		// 		console.log(`当前页: ${val}`);
		// 	}
		// }
	}
</script>
<style>

</style>