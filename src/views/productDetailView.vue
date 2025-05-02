<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-65098c10="" class="banner">
						<div data-v-65098c10="" class="banner__content">
							<div data-v-65098c10="" class="container">
								<div data-v-65098c10="" class="row g-3 justify-content-center">
									<div data-v-65098c10="" class="col-lg-10 text-center">
										<h2 data-v-65098c10="" class="m-0 banner-title">{{$t("product.PurchasePlan")}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-65098c10="" class="section">
						<div data-v-65098c10="" class="container">
							<div data-v-65098c10="" class="row justify-content-center">
								<div data-v-65098c10="" class="col-md-8">
									<div data-v-65098c10="" class="card custom--card">
										<form data-v-65098c10="">
											<div data-v-65098c10="" class="card-body">
												<div data-v-65098c10="" class="form-group"><label data-v-65098c10=""
														class="invest_title" style="color: #000;">
														{{$t("product.SingleInvestAmount")}}
													</label>
													<div data-v-65098c10="" class="input-group">
														<input :value="info.amount" data-v-65098c10="" type="text"
															name="amount" disabled="disabled"
															class="form-control form--control" style="background-color: white;border: none;">
														<span data-v-65098c10="" class="input-group-text">USD</span>
													</div>
												</div>

												<div data-v-65098c10="" class="form-group"><label data-v-65098c10=""
														class="invest_title2" style="color:  #000;">
														{{$t("product.Amount")}}
													</label>
													<div data-v-65098c10="" class="input-group">

														<div data-v-65098c10="" class="van-stepper"
															style="width: 100%; display: flex;">
															<el-input-number style="width: 100%; display: flex;"
																v-model="FormData.num" @change="handleChange"
																:min="1" label="描述文字"></el-input-number>
														</div>
													</div>
												</div>
												<div data-v-65098c10="" class="form-group"><label data-v-65098c10=""
														class="invest_title2" style="color:  #000;">
														{{$t("product.PaymentPassword")}}
													</label>
													<div data-v-65098c10="" class="input-group"><input
															v-model="FormData.fund_password" data-v-65098c10=""
															type="password" name="times" style="color: #000;border: none;"
															class="form-control form--control plan-buy"></div>
												</div>
												<div data-v-65098c10="" class="mt-3">
													<ul data-v-65098c10="" class="list-group text-center">
														<li data-v-65098c10=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-65098c10="">{{$t("product.InvestPeriod")}}
															</span>
															<span data-v-65098c10="">
																<span data-v-65098c10="" class="font-weight-bold">
																	{{info.cycle}}
																	{{$t("product.Days")}}</span></span>
														</li>
														<li data-v-65098c10=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-65098c10="">{{$t("product.DailyRateofProfit")}}</span>
															<span data-v-65098c10=""><span data-v-65098c10=""
																	class="font-weight-bold">
																	{{info.daily_rate}}%
																</span></span>
														</li>
														<li data-v-65098c10=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-65098c10="">{{$t("product.DailyProfit")}}</span>
															<span data-v-65098c10=""><span data-v-65098c10=""
																	class="daily_profit font-weight-bold">${{info.daily_profit*FormData.num}}</span></span>
														</li>
														<li data-v-65098c10=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-65098c10="">{{$t("product.TotalProfit")}}</span>
															<span data-v-65098c10=""><span data-v-65098c10=""
																	class="total_profit font-weight-bold">${{info.amount*FormData.num}}
																	+ ${{info.daily_profit*info.cycle*FormData.num}}</span></span>
														</li>
													</ul>
												</div>
											</div>
											<div data-v-65098c10="" class="card-footer"><button data-v-65098c10=""
													@click="submit()" type="button"
													class="btn btn--base btn-block">{{$t("common.Submit")}}</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div data-v-65098c10="" class="container">
							<div data-v-65098c10="" class="row justify-content-center">
								<div data-v-65098c10="" class="col-md-8">
									<div data-v-65098c10="" class="card custom--card"
										style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 10px;">
										<label v-show="info.title_desc" data-v-65098c10=""
											style="margin-top: 20px; font-size: 20px; font-weight: bold; text-align: center; color: rgb(0, 0, 0);">
											{{info.title_desc}}
										</label>
										<label data-v-65098c10=""
											style="margin-top: 20px; font-size: 20px; font-weight: bold; text-align: center; color: rgb(0, 0, 0);">
											<!-- {{$t("product.PurchaseInstructions")}}-->
											{{noticeInfo.title}}
										</label>
										<div v-show="noticeInfo.content" v-html="noticeInfo.content"></div>
										<div v-show="info.additional_terms" v-html="info.additional_terms"></div>
										<div v-show="info.content" v-html="info.content"></div>
										<p>{{$t('common.product_desc')}}</p>
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
		productDetail,
		productBuy,
		noticeList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'ProductView',
		props: ['id'],
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				info: {
					amount: 0,
					cycle: 0,
					daily_rate: 0,
					content:'',
					additional_terms:''
				},
				FormDataNotice: {
					gropid: 13,
					page_no: 1,
				},
				noticeInfo: {
					title: '',
					content: '',
				},

				FormData: {
					pid: 0,
					amount: 0,
					num: 1,
					fund_password: '',
					
				},
			};
		},
		mounted() {
			this.$store.dispatch('init')
			this.detail();
			this.initNoticeList();
		},
		methods: {
			detail() {
				console.log(this.id)
				productDetail({
					id: this.id
				}).then((res) => {
					const info = res.data
					// list.forEach(function(item, index) {
					// 	list[index].cover_img = baseImageUrl + item.cover_img;
					// });
					// info.cover_img = baseImageUrl + info.cover_img;
					this.info = info;
					this.FormData.amount = info.amount
				}).catch((res) => {
					console.log('err', res)
				});
			},
			initNoticeList() {
				noticeList(this.FormDataNotice).then((res) => {
					if (res.data_total_nums == 1) {
						this.noticeInfo = res.info[0]
					}
					console.log(res)
				}).catch((res) => {
					console.log('err', res)

				});
			},
			submit() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				var FormData = this.FormData;
				FormData.pid = this.id;
				productBuy(FormData).then((res) => {
					loading.close();
					this.$message({
						showClose: true,
						offset: 20,
						message: res.code_dec,
						type: 'success'
					});
					setTimeout(() => {
						this.$router.push('/myPackages')
					}, 1000);
				}).catch((res) => {
					loading.close();
					console.log(res)

				});
			},
			handleChange(value) {
				this.FormData.amount = this.info.amount * value
				console.log(value);
			}
		}
	}
</script>
<style>
	.custom--card{
		border: none;
	}
	.input-group-text[data-v-65098c10]{
		border: none;
		background: #0d6efd;
	}
	.list-group-item{
		background-color: white;
		color:#000;
		border: 1px solid #ccc;
	}
	.custom--card .card-footer{
		background: none;
		border:none
	}
</style>