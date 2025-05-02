<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>


					<div data-v-6f4a4394="" class="banner">
						<div data-v-6f4a4394="" class="banner__content">
							<div data-v-6f4a4394="" class="container">
								<div data-v-6f4a4394="" class="row g-3 justify-content-center">
									<div data-v-6f4a4394="" class="col-lg-10 text-center">
										<h1 data-v-6f4a4394="" class="m-0 banner-title">
											{{$t("product.ContractOptions")}}
										</h1>
										<h5 data-v-6f4a4394="" class="m-0">{{$t("product.ContractOptions2")}}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-6f4a4394="" class="invest-plan-area bg-sky mb-5" style="padding: 50px 0px;">
						<div data-v-6f4a4394="" class="container" style="max-width: 1320px;">
							<div data-v-6f4a4394="" class="row justify-content-center">
								<div data-v-6f4a4394="" class="col-12"></div>
							</div>

							<div data-v-6b48c1cb="" class="container222">
								<div data-v-6b48c1cb="" class="product-list222">
									<div data-v-6b48c1cb="" class="product-item" v-for="(item,index) in dataList"
										:key="index" style="padding: 20px;background-color: white;border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 20px;">
										<div data-v-6b48c1cb="" class="img-box1"><img data-v-6b48c1cb=""
												:src="item.icon" class="img" style="width: 100%;height:100%">
										</div>
										<div data-v-6b48c1cb="" class="right" style="">
											<div data-v-6b48c1cb="" class="name">
												{{item.title}}
											</div>
											<div data-v-6b48c1cb="" class="bottom">
												<div data-v-6b48c1cb="" class="info-list">
													<div data-v-6b48c1cb="" class="info-item" style="width: none">
														<div data-v-6b48c1cb="" class="label">{{$t('home.UnitPrice')}}
														</div>
														<div data-v-6b48c1cb="" class="value">${{item.amount}}</div>
													</div>
													<div data-v-6b48c1cb="" class="info-item">
														<div data-v-6b48c1cb="" class="label">
															{{$t('home.PlanDuration')}}
														</div>
														<div data-v-6b48c1cb="" class="value">{{item.cycle}}
															{{$t('home.Days')}}
														</div>
													</div>
													<div data-v-6b48c1cb="" class="info-item">
														<div data-v-6b48c1cb="" class="label">{{$t('home.DailyProfit')}}
														</div>
														<div data-v-6b48c1cb="" class="value">${{item.daily_profit}}
														</div>
													</div>
													<div data-v-6b48c1cb="" class="info-item">
														<div data-v-6b48c1cb="" class="label">{{$t('home.TotalProfit')}}
														</div>
														<div data-v-6b48c1cb="" class="value">
															${{item.daily_profit*item.cycle}}
														</div>
													</div>
													<div data-v-6b48c1cb="" class="info-item2">
														<div data-v-6b48c1cb="" class="label">
															{{$t('product.FixedIncome')}}
														</div>
														<div data-v-6b48c1cb="" class="value" 
															style="color: rgb(255, 0, 0);">
															${{item.amount}}+${{item.daily_profit*item.cycle}}
														</div>
													</div>
													<div data-v-6b48c1cb="" class="info-item2">
														<div data-v-6b48c1cb="" class="label">
															{{$t('home.SettleInterests')}}
														</div>
														<div data-v-6b48c1cb="" class="value rebate"
															v-if="item.type==1">
															{{$t('home.Every')}} 24 {{$t('home.Hours')}}
														</div>
														<div data-v-6b48c1cb="" class="value rebate"
															v-else-if="item.type==2">
															{{$t("product.yieldOfMaturity")}}
														</div>
													</div>
												</div>
												<div data-v-6b48c1cb="" class="right-actions">
													<div data-v-6b48c1cb="" class="bonus">
														<div data-v-6b48c1cb="" class="label">
															{{$t('home.ReferralRewards')}}
														</div>
														<ul data-v-6b48c1cb=""
															class="plan-referral justify-content-center mb-2">
															<div data-v-6b48c1cb="" class="single-referral"><span
																	data-v-6b48c1cb=""
																	style="color: #000;">{{item.affiliate_bonus[0]}}%</span>
																<div data-v-6b48c1cb="">{{$t('home.Level')}} 1</div>
															</div>
															<div data-v-6b48c1cb="" class="single-referral"><span
																	data-v-6b48c1cb=""
																	style="color: #000;">{{item.affiliate_bonus[1]}}%</span>
																<div data-v-6b48c1cb="">{{$t('home.Level')}} 2</div>
															</div>
															<!-- <div data-v-6b48c1cb="" class="single-referral"><span
																	data-v-6b48c1cb=""
																	style="color: #000;">{{item.affiliate_bonus[2]}}%</span>
																<div data-v-6b48c1cb="">{{$t('home.Level')}} 3</div>
															</div> -->
														</ul>
													</div>
													<div data-v-6b48c1cb="" v-if="item.progress<100" class="buy-btn"
														style="height: 3rem;
													line-height: 3rem;font-size: 1.2rem;" @click="$router.push('productDetail/'+item.id)">
														{{$t('common.BuyNow')}}
													</div>
													<div v-else>
														<div data-v-6b48c1cb="" class="buy-btn" style="height: 3rem;
														line-height: 3rem;font-size: 1.2rem;" @click="$router.push('productDetail/'+item.id)">
															{{$t('common.sellOut')}}
														</div>
														<img src="@/static/images/prout.png"
															style="position: absolute;bottom:2rem;right:2rem;z-index: 1;" />
													</div>
												</div>
											</div>
											<div style="margin-top: 10px;">
												<el-progress :text-inside="true" :stroke-width="20"
													:percentage="item.progress" status="warning" color="#0d6efd"
													text-color="white"></el-progress>
											</div>
										</div>
									</div>

								</div>
							</div>
							<!-- <div data-v-6f4a4394="" class="plan-section pb-120 pt-120 mt-lg-0 mt-sm-15 mt-10">
								<div data-v-6f4a4394="" class="plan-wrapper alt">
									<div data-v-6f4a4394="" class="singletab plans-tab">
										<div data-v-6f4a4394="" class="tabcontents">
											<div data-v-6f4a4394="" class="tabitem active">
												<div data-v-6f4a4394=""
													class="row justify-content-md-start justify-content-center g-6"
													style="row-gap: 30px;">


													<div data-v-6f4a4394="" class="col-xl-4 col-md-6 col-sm-10"
														v-for="(item,index) in dataList" :key="index">
														<div data-v-6f4a4394="" class="plan-card p-xl-4 pb-xl-8 bgn-4">
															<div data-v-6f4a4394=""
																class="plan-img mb-8 position-relative">
																<div data-v-6f4a4394=""
																	class="img-area overflow-hidden">
																	<img data-v-6f4a4394=""
																		:src="item.icon" alt="plan"
																		class="w-100">
																</div>
															</div>
															<div data-v-6f4a4394="" class="plan-content px-xxl-4 p-3">
																<div data-v-6f4a4394="" class="plan-info mb-3 mt-3"><a
																		data-v-6f4a4394="" href="javascript:;"
																		class="d-block">
																		<h4 data-v-6f4a4394=""
																			class="plan-title tcn-1 mb-1 cursor-scale growDown title-anim">
																			{{item.title}}</h4>
																	</a> 
																	
																	<span data-v-6f4a4394=""
																		class="tcn-1 fs-sm">{{$t('home.SettleInterests')}}:
																			<span v-if="item.type==1" >
																				{{$t('home.Every')}} 24 {{$t('home.Hours')}}
																			</span>
																			<span v-if="item.type==2" >
																				{{$t("product.yieldOfMaturity")}}
																			</span>
																		</span> 
																</div>
																<div data-v-6f4a4394="" class="hr-line line3"></div>
																<div data-v-6f4a4394="" class="d-flex adb my-2">
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.amount}}</span>
																		<span
																			data-v-6f4a4394="">{{$t('home.UnitPrice')}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">{{item.cycle}}
																			{{$t('home.Days')}}</span> <span
																			data-v-6f4a4394="">{{$t('home.PlanDuration')}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.daily_profit}}</span>
																		<span
																			data-v-6f4a4394="">{{$t('home.DailyProfit')}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.amount}} + ${{item.daily_profit*item.cycle}}</span>
																		<span
																			data-v-6f4a4394="">{{$t('home.TotalProfit')}}</span>
																	</div>
																</div>
																<div data-v-6f4a4394="" style="margin-top: 1rem;">
																	<el-progress :text-inside="true" :stroke-width="22"
																		:percentage="item.progress" status="warning"
																		color="rgb(227, 174, 54))"
																		text-color="white"></el-progress>
																</div>
																<div data-v-6f4a4394="" class="bonus">
																	<div data-v-6f4a4394="" class="label"
																		style="text-align: center;">
																		{{$t('home.ReferralRewards')}}
																	</div>
																	<div data-v-6f4a4394=""
																		style="display: flex; padding: 0px; font-size: 1.5rem; height: 4rem; justify-content: center;">
																		<div data-v-6f4a4394="" class="single-referral">
																			<span
																				data-v-6f4a4394="">{{item.affiliate_bonus[0]}}%</span>
																			<div data-v-6f4a4394="">{{$t('home.Level')}}
																				1</div>
																		</div>
																		<div data-v-6f4a4394="" class="single-referral">
																			<span
																				data-v-6f4a4394="">{{item.affiliate_bonus[1]}}%</span>
																			<div data-v-6f4a4394="">{{$t('home.Level')}}
																				2</div>
																		</div>
																	</div>
																</div>
																<div data-v-6f4a4394="" class="hr-line line3"></div>
																<div data-v-6f4a4394=""
																	class="card-more-info d-between mt-3"><a
																		data-v-6f4a4394="" href="javascript:;"
																		@click="$router.push('productDetail/'+item.id)"
																		class="btn btn-base w-100">
																		{{$t('home.InvestNow')}} <i data-v-6f4a4394=""
																			class="el-icon-arrow-right"></i></a>
																</div>
															</div>
														</div>
													</div>



												</div>
											</div>
										</div>
									</div>
								</div>
							</div> -->
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
		baseImageUrl
	} from '@/api/config.js'
	import {
		productList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'ProductView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				dataList: []
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				productList().then((res) => {
					const dataList = res.data
					dataList.forEach(function(item, index) {
						dataList[index].icon = baseImageUrl + item.icon;
						dataList[index].progress = Number(item.progress);
					});
					this.dataList = dataList
					console.log(dataList)
				}).catch((res) => {
					console.log(res)

				});
			},
		}
	}
</script>
<style>
	@import url('@/static/product.css');
</style>