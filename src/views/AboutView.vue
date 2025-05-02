<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>


				<!-- 	<section data-v-3575c1cf="" class="about-section ptb-80" style="margin: 50px 0;">
						<div data-v-3575c1cf="" class="container"><video data-v-3575c1cf=""
								src="@/static/savvvy.mp4?t=1" controls="controls" loop="loop"
								style="width: 100%;"></video></div>
					</section> -->

					<section data-v-28ee34e6="" class="about-section ptb-80">
						<div class="mx-auto  px-5 box-content md:px-8 container">
							<h2 class="font-helvetica font-bold text-center" style="margin: 50px 0;">
								{{$t('about.title1')}}
							</h2>
							<div class="mt-6 md:mt-[60px]">
								<div class="space-y-4 items-start md:flex md:space-y-0 md:space-x-6">
									<el-row :gutter="10">
										<el-col :sm="12">
											<div style="border-radius: 50px;margin-bottom: 50px;">
												<div class="about_bg1" style=" border-radius: 20px;padding: 30px 30px;">
													<div style="">
														<h5 style="text-align: center;color: white;">
															{{$t('about.title2')}}
														</h5>
														<p style="text-align: center;color: white;">
															{{$t('about.title3')}}
														</p>
													</div>
												</div>
											</div>
										</el-col>
										<el-col :sm="12">
											<div class=""
												style="display: flex;flex-direction: column;justify-content: space-between;">
												<div class="about_bg2"
													style="border-radius: 20px;padding: 30px 30px;color: white;">
													<div>
														<div style="">
															<h5 style="color: white;">
																{{$t('about.title5')}}
															</h5>
															<p
																class="font-roboto-regular mt-1 text-[14px] leading-[22px] md:mt-4 md:text-[16px] md:leading-[30px]">
																{{$t('about.title6')}}
															</p>
														</div>
													</div>
												</div>
												<div class="about_bg3"
													style="border-radius: 20px;padding: 30px 30px;color: white;	">
													<div>
														<div class="text-[#fff] md:w-[290px]">
															<h5 style="color: white;">
																{{$t('about.title7')}}
															</h5>
															<p
																class="font-roboto-regular mt-1 text-[14px] leading-[22px] md:mt-4 md:text-[16px] md:leading-[30px]">
																{{$t('about.title8')}}
															</p>
														</div>
													</div>
												</div>
											</div>
										</el-col>
									</el-row>




								</div>
							</div>
						</div>



						<div class="mx-auto max-w-[1200px] px-5 box-content md:px-8 container"
							style="margin-top: 50px;">

							<div class="mt-6 md:mt-[60px]">
								<div class="space-y-4 items-start md:flex md:space-y-0 md:space-x-6 ">
									<el-row :gutter="10" justify="center" class="zdy-el-row">
										<el-col :sm="12">
											<div style="display: flex;justify-content: center;">
												<img src="@/static/images/about.png"
													style="width: 90%;border-radius: 20px;" />
											</div>
										</el-col>
										<el-col :sm="12" style="display: flex;align-items: center;">
											<div>
												<h5>{{$t('about.title_t1')}}</h5>
												<div class="">
													{{$t('common.title9')}}
												</div>
												<h5>{{$t('about.title_t2')}}</h5>
												<div class="">
													{{$t('common.title10')}}
												</div>
												<h5>{{$t('about.title_t3')}}</h5>
												<div class="">
													{{$t('common.title11')}}
												</div>
											</div>

										</el-col>
									</el-row>




								</div>
							</div>
						</div>


					</section>




					<div data-v-28ee34e6="" class="section--sm cta-section">
						<div data-v-28ee34e6="" class="container">
							<div data-v-28ee34e6="" class="row gy-4 align-items-center">
								<div data-v-28ee34e6="" class="col-md-7 col-xl-6" style="font-size: 1.1rem;">
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.Companytypeccccc")}}
									</p>
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.Companynumber")}}: 06856934
									</p>

									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.Officeaddress")}}: {{$t("about.Officeaddress2")}}
									</p>
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.EstablishedDecember")}}: {{$t("about.EstablishedDecember2")}}
									</p>
									<div data-v-28ee34e6="">
										<a data-v-28ee34e6="" target="_blank"
											href="https://find-and-update.company-information.service.gov.uk/company/06856934"
											class="btn main-btn mt-4"
											style="color: rgb(255, 255, 255); background: #0d6efd">
											{{$t("about.CheckOnline")}} </a>
										<a data-v-28ee34e6="" target="_blank"
											href="./static/companies_house_document.pdf" class="btn main-btn mt-4"
											style="color: rgb(255, 255, 255); background: #0d6efd;margin-left: 20px;">
											{{$t("about.DownloadPDF")}}</a>
									</div>
								</div>
								<div data-v-28ee34e6="" class="col-md-5 col-xl-6">
									<div data-v-28ee34e6="" class="col-md-12 col-xl-12" style="display: flex;"><img
											data-v-28ee34e6="" src="@/static/images/frontend/about/cp1.png"
											class="img-fluid cta-section__img"
											style="width: 50%; display: inline-block;"> <img data-v-28ee34e6=""
											src="@/static/images/frontend/about/cp2.png"
											class="img-fluid cta-section__img"
											style="width: 50%; display: inline-block; margin-left: 5px;"></div>
								</div>
							</div>
						</div>
					</div>




					<!-- <div class="h-[660px] pt-[60px] about-us-global-bg overflow-hidden xl:h-[800px] xl:pt-[120px]" style="background: linear-gradient(143.96deg, #3ccdac 22.43%, #51e985 134.97%);color: white;">
						<div class="mx-auto max-w-[1200px] px-5 box-content xl:px-8">
							<div class="flex flex-col mx-auto max-w-[895px] items-center">
								<h2 style="color: white;text-align: center;">
									服务遍布全球</h2>
								<p
									class="font-roboto-regular mt-6 text-[#fff] text-center max-w-[800px] text-[14px] leading-[22px] xl:mt-12 xl:text-[16px] xl:leading-[30px]">
									比特小鹿在新加坡、美国、挪威、不丹等地区设有办公室及数据中心。我们的团队前往世界各地调研探索，在美国德州、田纳西、华盛顿、挪威莫尔德、蒂达尔、不丹喜马拉雅山脚下建设了超级数据中心。
								</p>
							</div>
						</div>
					</div> -->



					<FooterView></FooterView>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		noticeList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'AboutView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					gropid: 6,
					page_no: 1,
				},
				info: {
					title: '',
					content: '',
				}

			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				noticeList(this.FormData).then((res) => {
					if (res.data_total_nums == 1) {
						this.info = res.info[0]
					}
					console.log(res)
				}).catch((res) => {
					console.log('err', res)

				});
			},
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
	.about_bg1 {
		height: 500px;
		background: url(@/static/images/about-us-core-bg1.png) center center / cover no-repeat;
		background-size: auto 100%;
	}

	.about_bg2 {
		height: 220px;
		background: url(@/static/images/about-us-core-bg2.png) center center / cover no-repeat;
		background-size: 100%;
	}

	.about_bg3 {
		height: 220px;
		background: url(@/static/images/about-us-core-bg3.png) center center / cover no-repeat;
		background-size: 100%;
		margin: 50px 0;
	}

	/* 手机端样式 - 当屏幕宽度小于768px时应用 */
	@media (max-width: 767px) {
		.about_bg1 {
			height: auto;
			background: url(@/static/images/about-us-core-bg1.png);
			background-size: auto 100%;
		}

		.about_bg2 {
			height: auto;
			background: url(@/static/images/about-us-core-bg2.png);
			background-size: 100% 100%;
		}

		.about_bg3 {
			height: auto;
			background: url(@/static/images/about-us-core-bg3.png);
			background-size: 100% 100%;
		}
	}

	@media (min-width: 768px) {
		.zdy-el-row {
			display: flex;justify-content: center;align-items: center;
		}
	}
</style>