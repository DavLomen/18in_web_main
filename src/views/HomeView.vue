<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<!-- 	<el-carousel height="35rem">
						<el-carousel-item v-for="(item,index) in imageArr" :key="index">
							<div data-v-3575c1cf="" class="hero"
								:style="'background: url('+item.url+') ;background-size: 100% auto'">
								<div data-v-3575c1cf="" class="hero__content">
									<div data-v-3575c1cf="" class="container">
										<div data-v-3575c1cf=""
											class="row g-3 justify-content-center align-items-center flexc">
											<div data-v-3575c1cf="" class="col-lg-5 col-xl-6 d-lg-block"></div>
											<div data-v-3575c1cf="" class="col-md-8 col-lg-7 col-xl-6">
												<div data-v-3575c1cf="" class="text-center text-lg-start">
													<h4 data-v-3575c1cf="" class="hero__content-title text--white mb-4">
														{{$t('home.homeText1')}}
													</h4>
													<p data-v-3575c1cf=""
														class="text--white t-short-para mx-auto ms-lg-0"
														style="color: rgb(241, 197, 61); text-align: left; margin-top: 1rem; font-weight: bolder; font-size: 1.5rem;">
														{{$t('home.homeText2')}}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel> -->
<!-- 					<div class="video-background" style=" position: relative;
  width: 100%;
  overflow: hidden;"> -->
	<!-- 					<video autoplay muted loop playsinline class="video" style=" position: absolute;
  top: 50%;
  left: 50%;
  min-width: 110%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1;
">
							<source src="@/static/home.mp4" type="video/mp4">
							Your browser does not support HTML5 video.
						</video> -->


<!-- 						<div class="content" style=" position: relative;top: 0;
  z-index: 1;
  color: white;
"> -->
							<div data-v-3575c1cf="" class="hero" style="padding: 40px 0;">

								<div data-v-3575c1cf="" class="hero__content" style="z-index: 111;">
									<div data-v-3575c1cf="" class="container">
										<div data-v-3575c1cf=""
											class="row g-3 justify-content-center align-items-center flexc">
											<div data-v-3575c1cf="" class="col-lg-5 col-xl-6 d-lg-block" style="
									">
												<div>
													<h5 data-v-3575c1cf="" class="hero__content-title  mb-4"
														style="color: white;">
														{{$t('home.homeText1')}}<br/>
														{{$t('home.homeText1_0')}}
													</h5>
													<h6 data-v-3575c1cf="" class="hero__content-title  mb-4" style="color: white;">
														{{$t('home.homeText1_1')}}
													</h6>
													<p data-v-3575c1cf="" class=" t-short-para mx-auto ms-lg-0"
														style="color: red; text-align: left; margin-top: 1rem; font-weight: bolder; font-size: 1.5rem;">
														{{$t('home.homeText2')}}
														<br/>
														{{$t('home.homeText2_0')}}
													</p>
												</div>
												<div style="display: flex;height: 100px;‌">
													<el-row :gutter="10" style="">
														<el-col :sm="12" :xs="12">
															<div class="grid-content bg-purple"
																style="display: flex;justify-content: center;">
																<el-button type="info"
																	@click="$router.push('/register')"
																	style="width:200px;color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">
																	{{$t('home.RegisterNow')}}
																</el-button>
															</div>
														</el-col>
														<el-col :sm="12" :xs="12">
															<div class="grid-content bg-purple"
																style="display: flex;justify-content: center;">
																<el-button type="info" @click="$router.push('/login')"
																	style="width:200px;color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">
																	{{$t('common.Login')}}
																</el-button>
															</div>
														</el-col>
														<el-col :sm="12" :xs="12">
															<div class="grid-content bg-purple"
																style="display: flex;justify-content: center;margin-top: 20px;">
																<el-button type="info"
																	@click="dowm(BackData ? BackData.setting.app_down_android : '')"
																	style="width:200px;color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">
																	{{$t('home.AndroidDownload')}}
																</el-button>

															</div>
														</el-col>
														<el-col :sm="12" :xs="12">
															<div class="grid-content bg-purple"
																style="display: flex;justify-content: center;margin-top: 20px;">
																<el-button type="info"
																	@click="dowm(BackData ? BackData.setting.app_down_ios : '')"
																	style="width:200px;color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">
																	{{$t('home.iOSDownload')}}
																</el-button>
															</div>
														</el-col>



													</el-row>
												</div>
											</div>
											<div data-v-3575c1cf="" class="col-md-8 col-lg-7 col-xl-6">
												<div data-v-3575c1cf="" class="text-center text-lg-start">
													<el-carousel :height="carouselHeight" indicator-position="none">
														<el-carousel-item v-for="(item,index) in imageArr" :key="index">
															<img :src="item.url" style="height: auto;width: 100%;">
														</el-carousel-item>
													</el-carousel>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						<!-- </div> -->
					<!-- </div> -->
					<div class="iframe-container">
						<iframe data-v-3575c1cf="" scrolling="no" allowtransparency="true" frameborder="0"
							src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%HR Miner.com%2F%22%7D"
							title="ticker tape TradingView widget" lang="en" class="iframe"
							style="height: 50px;user-select: none; box-sizing: border-box; display: block; width: 100%;"
							ref="myIframe" sandbox="allow-same-origin allow-scripts allow-forms"
							@load="onIframeLoad"></iframe>

					</div>
					<div data-v-1838d61e="" role="alert" class="van-notice-bar" style="color: red;"><i
							class="el-icon-warning-outline" style="margin-right: 10px;"></i>
						<div role="marquee123" class="van-notice-bar__wrap">
							<div class="van-notice-bar__content">
								<div class="marquee-container">
									<div class="marquee-content">
										{{BackData ? BackData.notifications.notification : ''}}
									</div>
								</div>


							</div>
						</div>
					</div>
					<div data-v-3575c1cf="" class="section featured-section"
						style="margin-top: 50px;padding-bottom:0px">
						<div data-v-3575c1cf="" class="section__head">
							<div data-v-3575c1cf="" class="container">
								<div data-v-3575c1cf="" class="row justify-content-center"
									style="align-items: flex-start;">
									<!-- <div data-v-3575c1cf="" class="col-md-10 col-xl-6"> -->
									<h5 data-v-3575c1cf="" class="mt-0 text-center">

										{{$t('home.title3')}}
									</h5>
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div data-v-3575c1cf="" class="container">
							<div data-v-3575c1cf="" class="row g-3 align-items-lg-center"
								style="align-items: flex-start !important;">
								<div data-v-3575c1cf="" class="col-md-6 col-lg-3" @click="$router.push('/register')">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">

													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/1.png"
															style="width: 100px">
														<!-- <i class="el-icon-user-solid"></i> -->
													</div>
												</div>
												<!-- </div> -->
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t('home.a1')}}
												</h5>

												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t('home.b1')}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-3" @click="$router.push('/product')">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">

													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/2.png"
															style="width: 100px">
														<!-- <i class="el-icon-user-solid"></i> -->
													</div>
												</div>
												<!-- </div> -->
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t('home.a2')}}
												</h5>

												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t('home.b2')}}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div data-v-3575c1cf="" class="col-md-6 col-lg-3" @click="$router.push('/product')">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/3.png"
															style="width: 100px">
														<!-- <i class="el-icon-s-goods"></i> -->
													</div>
												</div>
												<!-- </div> -->
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t('home.a3')}}
												</h5>

												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t('home.b3')}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-3" @click="$router.push('/dashboard')">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/4.png"
															style="width: 100px">
														<!-- <i class="el-icon-s-finance"></i> -->
													</div>
												</div>
												<!-- </div> -->
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t('home.a4')}}
												</h5>

												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t('home.b4')}}
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>


						</div>
					</div>

					<el-carousel :height="imgHeight" style="">
						<el-carousel-item>
							<div data-v-3575c1cf="" class="hero1" style="min-height: 500px;">
								<div data-v-3575c1cf="" class="hero__content">
									<div data-v-3575c1cf="" class="container">
										<div data-v-3575c1cf=""
											class="row g-3 justify-content-center align-items-center flexc">
											<div data-v-3575c1cf="" class="col-lg-5 col-xl-6 d-lg-block">
												<div style="display: flex;justify-content: center;">
													<img src="@/static/images/image1.png"
														style="height: 25rem; width: 25rem	;">
												</div>
											</div>
											<div data-v-3575c1cf="" class="col-md-8 col-lg-7 col-xl-6">
												<div data-v-3575c1cf="" class="text-center text-lg-start">
													<p data-v-3575c1cf=""
														class="text--white t-short-para mx-auto ms-lg-0" style="color: #000; text-align: left; margin-top: 1rem; 
																			font-weight: bolder; font-size: 1rem;text-align: center;">
														{{$t('home.ExploreourprojectDesc1')}}
													</p>
													<div style="display: flex;justify-content: center;">
														<el-button type="info" @click="$router.push('/product')" style="color:white;background-color:#0d6efd;
															border: 1px solid #0d6efd;">{{$t('home.Exploreourproject')}}</el-button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</el-carousel-item>
						<el-carousel-item>
							<div data-v-3575c1cf="" class="hero1" style="min-height: 500px;">
								<div data-v-3575c1cf="" class="hero__content">
									<div data-v-3575c1cf="" class="container">
										<div data-v-3575c1cf=""
											class="row g-3 justify-content-center align-items-center flexc">
											<div data-v-3575c1cf="" class="col-lg-5 col-xl-6 d-lg-block">
												<div style="display: flex;justify-content: center;">
													<img src="@/static/images/image2.png"
														style="height: 25rem; width: 25rem	;">
												</div>
											</div>
											<div data-v-3575c1cf="" class="col-md-8 col-lg-7 col-xl-6">
												<div data-v-3575c1cf="" class="text-center text-lg-start">
													<p data-v-3575c1cf=""
														class="text--white t-short-para mx-auto ms-lg-0" style="color: #000; text-align: left; margin-top: 1rem; 
																			font-weight: bolder; font-size: 1rem;text-align: center;">
														{{$t('home.ExploreourprojectDesc2')}}
													</p>
													<div style="display: flex;justify-content: center;">
														<el-button type="info" @click="$router.push('/product')" style="color:white;background-color:#0d6efd;
															border: 1px solid #0d6efd;">{{$t('home.Exploreourproject')}}</el-button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>






					<section data-v-6f4a4394="" class="invest-plan-area bg-sky mb-5" style="padding: 50px 0px;">
						<div data-v-6f4a4394="" class="container" style="max-width: 1320px;">
							<div data-v-6f4a4394="" class="row justify-content-center">
								<div data-v-6f4a4394="" class="col-12">
									<div data-v-6f4a4394="" class="section-title text-center">
										<h2 data-v-6f4a4394="" class="title">{{$t('home.title10')}}</h2>
										<p data-v-6f4a4394="">{{$t('home.title11')}}</p>
									</div>
								</div>
							</div>

							<!-- new -->
							<div data-v-6b48c1cb="" class="container222">
								<div data-v-6b48c1cb="" class="product-list222">
									<div data-v-6b48c1cb="" class="product-item" v-for="(item,index) in dataList"
										:key="index" style="padding: 20px;background-color: white;border: 1px solid rgba(0, 0, 0, .125);
							border-radius: 20px;">
										<div data-v-6b48c1cb="" class="img-box1"><img data-v-6b48c1cb=""
												:src="item.icon" class="img" style="width: 100%;height:100%">
										</div>
										<div data-v-6b48c1cb="" class="right">
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
															${{item.amount}} + ${{item.daily_profit*item.cycle}}
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
																	class="img-area overflow-hidden"><img
																		data-v-6f4a4394="" :src="item.icon" alt="plan"
																		class="w-100"></div>
															</div>
															<div data-v-6f4a4394="" class="plan-content px-xxl-4 p-3">
																<div data-v-6f4a4394="" class="plan-info mb-3 mt-3"><a
																		data-v-6f4a4394="" href="javascript:;"
																		class="d-block">
																		<h4 data-v-6f4a4394=""
																			class="plan-title tcn-1 mb-1 cursor-scale growDown title-anim">
																			{{item.title}}
																		</h4>
																	</a> <span data-v-6f4a4394=""
																		class="tcn-1 fs-sm">{{$t("home.SettleInterests")}}:
																		<span v-if="item.type==1">
																			{{$t('home.Every')}} 24 {{$t('home.Hours')}}
																		</span>
																		<span v-if="item.type==2">
																			{{$t("product.yieldOfMaturity")}}
																		</span>
																	</span></div>
																<div data-v-6f4a4394="" class="hr-line line3"></div>
																<div data-v-6f4a4394="" class="d-flex adb my-2">
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.amount}}</span>
																		<span
																			data-v-6f4a4394="">{{$t("home.UnitPrice")}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">{{item.cycle}}
																			{{$t("home.Days")}}</span> <span
																			data-v-6f4a4394="">{{$t("home.PlanDuration")}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.daily_profit}}</span>
																		<span
																			data-v-6f4a4394="">{{$t("home.DailyProfit")}}</span>
																	</div>
																	<div data-v-6f4a4394="" class="its"><span
																			data-v-6f4a4394="">${{item.amount}} +
																			${{item.daily_profit*item.cycle}}</span>
																		<span
																			data-v-6f4a4394="">{{$t("home.TotalProfit")}}</span>
																	</div>
																</div>
																<div data-v-6f4a4394="" style="margin-top: 1rem;">
																	<el-progress :text-inside="true" :stroke-width="22"
																		:percentage="item.progress" status="warning"
																		color="linear-gradient(to right, rgb(255, 0, 14), rgb(227, 174, 54));"
																		text-color="white"></el-progress>
															
																</div>
																<div data-v-6f4a4394="" class="bonus">
																	<div data-v-6f4a4394="" class="label"
																		style="text-align: center;">
																		{{$t("home.ReferralRewards")}}
																	</div>
																	<div data-v-6f4a4394=""
																		style="display: flex; padding: 0px; font-size: 1.5rem; height: 4rem; justify-content: center;">
																		<div data-v-6f4a4394="" class="single-referral">
																			<span
																				data-v-6f4a4394="">{{item.affiliate_bonus[0]}}%</span>
																			<div data-v-6f4a4394="">{{$t("home.Level")}}
																				1</div>
																		</div>
																		<div data-v-6f4a4394="" class="single-referral">
																			<span
																				data-v-6f4a4394="">{{item.affiliate_bonus[1]}}%</span>
																			<div data-v-6f4a4394="">{{$t("home.Level")}}
																				2</div>
																		</div>
																	</div>
																</div>
																<div data-v-6f4a4394="" class="hr-line line3"></div>
																<div data-v-6f4a4394=""
																	class="card-more-info d-between mt-3"><a
																		data-v-6f4a4394=""
																		@click="$router.push('productDetail/'+item.id)"
																		class="btn btn-base w-100">
																		{{$t("home.InvestNow")}} <i data-v-6f4a4394=""
																			class="el-icon-arrow-right"></i></a></div>
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


					<div data-v-3575c1cf="" class="section featured-section">
						<div data-v-3575c1cf="" class="section__head">
							<div data-v-3575c1cf="" class="container">
								<div data-v-3575c1cf="" class="row justify-content-center"
									style="align-items: flex-start;">
									<div data-v-3575c1cf="" class="col-md-8 col-xl-6">
										<h2 data-v-3575c1cf="" class="mt-0 text-center">{{$t("home.Ouradvantages")}}
										</h2>
										<p data-v-3575c1cf="" class="mb-0 mx-auto text-center t-short-para">
											{{$t("home.WhychooseHRMiner")}}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div data-v-3575c1cf="" class="container">
							<div data-v-3575c1cf="" class="row g-3 align-items-lg-center"
								style="align-items: flex-start !important;">


								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/11.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t1")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c1")}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/22.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t2")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c2")}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/33.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t3")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c3")}}
												</p>
											</div>
										</div>
									</div>
								</div>




								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/44.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t4")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c4")}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/55.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t5")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c5")}}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div data-v-3575c1cf="" class="col-md-6 col-lg-4">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12">
											<div data-v-3575c1cf="" class="feature-card"
												style="border: 1px solid #ccc;display: flex;flex-direction:column;justify-content: center;padding: 10px;">
												<div style="display: flex;justify-content: center;width: 100%;">
													<div class="">
														<img data-v-3575c1cf="" src="@/static/images/top/66.png"
															style="width: 100px">
													</div>
												</div>
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{$t("home.t6")}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;text-align: center;">
													{{$t("home.c6")}}
												</p>
											</div>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>



					<div data-v-3575c1cf="" class="section featured-section">
						<div data-v-3575c1cf="" class="section__head">
							<div data-v-3575c1cf="" class="container">
								<div data-v-3575c1cf="" class="row justify-content-center"
									style="align-items: flex-start;">
									<div data-v-3575c1cf="" class="col-md-8 col-xl-6">
										<h2 data-v-3575c1cf="" class="mt-0 text-center">
											{{$t('home.title12')}}
										</h2>
										<p data-v-3575c1cf="" class="mb-0 mx-auto text-center t-short-para">
											{{$t('home.title13')}}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div data-v-3575c1cf="" class="container auto-scroll-container">
							<div data-v-3575c1cf="" class="row g-3 scroll-content"
								style="align-items: flex-start !important;padding: 0 50px;flex-wrap:nowrap">

								<div data-v-3575c1cf="" class="col-md-6 col-lg-4" v-for="(item,index) in helpArr"
									:key="index">
									<div data-v-3575c1cf="" class="row gy-4 gx-3">
										<div data-v-3575c1cf="" class="col-12"
											style="display: flex;flex-direction:column;justify-content: center;">
											<div data-v-3575c1cf="" class="feature-card1" style="padding: 15px 30px;border: 1px solid #ccc;
    border-radius: 20px;">
												<h5 data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;width: 100%;">
													{{item.title}}
												</h5>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;height:180px;text-align: center;overflow: hidden;text-overflow: ellipsis;">
													{{item.desc}}
												</p>
												<p data-v-3575c1cf="" class="mb-0"
													style="display: flex;justify-content: center;align-items: center;width: 100%;height:120px;text-align: center;overflow: hidden;text-overflow: ellipsis;">
													<img data-v-55c562f1="" data-v-e4caeaf8="" alt="image"
														class="fit-image" :src="item.img" lazy="loaded"
														style="width: 60px;height: 60px;border-radius: 60px;">
												</p>
											</div>
										</div>
									</div>
								</div>



							</div>
						</div>
					</div>




					<!-- 	<section data-v-3575c1cf="" class="about-section ptb-80">
						<div data-v-3575c1cf="" class="container"><video data-v-3575c1cf=""
								src="@/static/savvvy.mp4?t=1" controls="controls" loop="loop"
								style="width: 100%;"></video></div>
					</section> -->

					<section data-v-3575c1cf="" class="section-space">
						<div data-v-3575c1cf="" class="container max960">
							<div data-v-3575c1cf="" class="section-head text-center">
								<h2 data-v-3575c1cf="" class="mb-3" style="font-size: 3rem;">
									{{$t("home.StrategicPartners")}}
								</h2>
							</div>
						</div>
						<div data-v-3575c1cf="" class="brand__logo--section section--padding">
							<div data-v-3575c1cf="" class="container">
								<div data-v-3575c1cf=""
									class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
									style="padding-bottom: 4rem;">
									<!-- transform: translate3d(-100%, 0px, 0px);  -->
									<div class="swiper-wrapper" style="transition-duration: 10000ms;
										" :style="{ transform: `translate3d(${translateX}px, 0, 0)` }">
										<div data-v-3575c1cf="" class="swiper-slide swiper-slide-duplicate"
											data-swiper-slide-index="3" style="width: 696px; margin-right: 20px; ">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_19.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_20.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_21.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_22.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_23.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_24.png" class="logo__light"
														style="width: 100%;"></div>
											</div>
										</div>
										<div data-v-3575c1cf="" class="swiper-slide swiper-slide-prev"
											data-swiper-slide-index="0" style="width: 696px; margin-right: 20px;">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_1.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_2.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_3.png" class="logo__light"
														style="width: 100%;"></div>
												<!-- <div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_4.png" class="logo__light"
														style="width: 100%;"></div> -->
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_5.png" class="logo__light"
														style="width: 100%;"></div>
												<!-- 	<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_6.png" class="logo__light"
														style="width: 100%;"></div> -->
											</div>
										</div>
										<div data-v-3575c1cf="" class="swiper-slide swiper-slide-active"
											data-swiper-slide-index="1" style="width: 696px; margin-right: 20px;">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_7.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_8.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_9.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_10.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_11.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_12.png" class="logo__light"
														style="width: 100%;"></div>
											</div>
										</div>
										<div data-v-3575c1cf="" class="swiper-slide swiper-slide-next"
											data-swiper-slide-index="2" style="width: 696px; margin-right: 20px;">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_13.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_14.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_15.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_16.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_17.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_18.png" class="logo__light"
														style="width: 100%;"></div>
											</div>
										</div>
										<div data-v-3575c1cf="" class="swiper-slide" data-swiper-slide-index="3"
											style="width: 696px; margin-right: 20px;">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_19.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_20.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_21.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_22.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_23.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_24.png" class="logo__light"
														style="width: 100%;"></div>
											</div>
										</div>
										<div data-v-3575c1cf=""
											class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
											data-swiper-slide-index="0" style="width: 696px; margin-right: 20px;">
											<div data-v-3575c1cf="" class="row" style="justify-content: center;">
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_1.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_2.png" class="logo__light"
														style="width: 100%;"></div>
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_3.png" class="logo__light"
														style="width: 100%;"></div>
												<!-- <div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_4.png" class="logo__light"
														style="width: 100%;"></div> -->
												<div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_5.png" class="logo__light"
														style="width: 100%;"></div>
												<!-- <div data-v-3575c1cf="" class="col single__brand--logo"
													style="cursor: pointer;"><img data-v-3575c1cf=""
														src="@/static/images/coo_6.png" class="logo__light"
														style="width: 100%;"></div> -->
											</div>
										</div>
									</div>
									<div data-v-3575c1cf="" class="swiper-pagination swiper-pagination-horizontal">
									</div> <span class="swiper-notification" aria-live="assertive"
										aria-atomic="true"></span>
								</div>
							</div>
						</div>
					</section>





					<section data-v-3575c1cf="" data-v-c3c3f456="" data-v-17089f97="" style="padding: 50px 0px;"
						class="section language pb-5">
						<!-- <div data-v-3575c1cf="" data-v-c3c3f456="" class="container">
							<div data-v-3575c1cf="" data-v-c3c3f456="" class="row justify-content-center">
								<div data-v-3575c1cf="" data-v-c3c3f456="" class="col-12 col-xl-8">
									<div data-v-3575c1cf="" data-v-c3c3f456="" class="section__header">
										<h2 data-v-3575c1cf="" class="h2" style="text-align: center;">

											{{$t("home.LatestTransaction")}}
										</h2>
									</div>
								</div>
							</div>
						</div> -->
						<!-- 	<div data-v-3575c1cf="">
							<div data-v-3575c1cf=""
								class="swiper-container language__slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
								<div class="swiper-wrapper swiper-wrapper1" style="transition-duration: 30000ms;"
									:style="{ transform: `translate3d(${translateX1}px, 0, 0)` }">
									<div data-v-3575c1cf="" v-for="(item,index) in 10" :key="index"
										class="language__slider-single swiper-slide swiper-slide-duplicate"
										data-swiper-slide-index="96" style="width: 230px;">
										<div data-v-3575c1cf="" data-v-c3c3f456="" class="thumb"><img data-v-3575c1cf=""
												src="@/static/images/BTC.png" style="height: 40px;"></div>
										<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"> +0.133 BTC</p>
										<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"> sak****MAd@yandex.ru</p>
									</div>


								</div> <span class="swiper-notification" aria-live="assertive"
									aria-atomic="true"></span>
							</div>
						</div>



						<div data-v-3575c1cf="" data-v-c3c3f456="" dir="rtl">
							<div data-v-3575c1cf=""
								class="swiper-container language__slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl">

								<div class="swiper-wrapper swiper-wrapper2" style="transition-duration: 30000ms;"
									:style="{ transform: `translate3d(${translateX2}px, 0, 0)` }">
									<div data-v-3575c1cf="" v-for="(item,index) in 10" :key="index"
										class="language__slider-single swiper-slide swiper-slide-duplicate"
										data-swiper-slide-index="4" style="margin-right: 30px; width: 184px;">
										<div data-v-3575c1cf="" data-v-c3c3f456="" class="thumb"><img data-v-3575c1cf=""
												src="@/static/images/USDC.png" style="height: 40px;"></div>
										<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"> -2073 USDC</p>
										<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"> qTt****poh@hotmail.com
										</p>
									</div>
								</div> <span class="swiper-notification" aria-live="assertive"
									aria-atomic="true"></span>
							</div>
						</div> -->



						<el-row :gutter="10">
							<el-col :sm="8" style="margin-bottom: 120px ;">
								<div class="grid-content bg-purple-light">
									<div data-v-3575c1cf="" style="display: flex;justify-content: center;"
										class="swiper-container language__slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
										<div class="" style="margin: 0 20px;">
											<h2 data-v-3575c1cf="" class="h2" style="text-align: center;">
												<!-- {{$t("home.LatestTransaction")}}-->
												{{$t("home.Latestpayment")}}
											</h2>
											<!--  -->
											<div class="scroll-container">
												<div class="scrolling-images">
													<div data-v-3575c1cf="" v-for="(item,index) in rechargeList"
														:key="index"
														class="language__slider-single swiper-slide swiper-slide-duplicate"
														data-swiper-slide-index="96"
														style="height: 50px;padding: 30px 10px;">
														<div data-v-3575c1cf="" data-v-c3c3f456="" class="thumb">
															<img data-v-3575c1cf="" :src="item.qrcode"
																style="height: 40px;">
														</div>
														<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"
															style="display: flex;"> +{{item.money}} {{item.icon}}</p>
														<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5">
															{{item.username}}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</el-col>

							<el-col :sm="8" style="margin-bottom: 120px ;">
								<div class="grid-content bg-purple-light">
									<div data-v-3575c1cf="" style="display: flex;justify-content: center;"
										class="swiper-container language__slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
										<div class="" style="margin: 0 20px;">
											<h2 data-v-3575c1cf="" class="h2" style="text-align: center;">
												<!-- {{$t("home.LatestTransaction")}}-->
												{{$t("home.LatestRegistration")}}
											</h2>
											<!--  -->
											<div class="scroll-container">
												<div class="scrolling-images3">
													<div data-v-3575c1cf="" v-for="(item,index) in userList"
														:key="index"
														class="language__slider-single swiper-slide swiper-slide-duplicate"
														data-swiper-slide-index="96"
														style="height: 50px;padding: 30px 10px;display: flex;justify-content: center;">
														<!-- <div data-v-3575c1cf="" data-v-c3c3f456="" class="thumb">
															<img data-v-3575c1cf=""
																:src="'./static/images/'+item.icon+'.png'"
																style="height: 40px;">
														</div> -->
														<!-- <p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"
															style="display: flex;"> +{{item.money}} {{item.icon}}</p> -->
														<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5">
															{{item.username}}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :sm="8">
								<div class="grid-content bg-purple-light">
									<div data-v-3575c1cf=""
										style="display: flex;justify-content: center; height: 400px;"
										class="swiper-container language__slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
										<div class="" style="margin: 0 20px;">
											<h2 data-v-3575c1cf="" class="h2" style="text-align: center;">

												{{$t("home.Lastwithdrawal")}}
											</h2>
											<div class="scroll-container">
												<div class="scrolling-images2">
													<div data-v-3575c1cf="" v-for="(item,index) in withdrawList"
														:key="index"
														class="language__slider-single swiper-slide swiper-slide-duplicate"
														data-swiper-slide-index="96"
														style="height: 50px;padding: 30px 10px;">
														<div data-v-3575c1cf="" data-v-c3c3f456="" class="thumb">
															<img data-v-3575c1cf="" :src="item.qrcode"
																style="height: 40px;">
														</div>
														<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5"
															style="display: flex;"> +{{item.money}} {{item.icon}}</p>
														<p data-v-3575c1cf="" data-v-c3c3f456="" class="fw-5">
															{{item.username}}
														</p>
													</div>
												</div>
											</div>

										</div>
									</div>

								</div>
							</el-col>

						</el-row>
					</section>




					<section data-v-3575c1cf="" class="section-space">
						<div data-v-3575c1cf="" class="container max960">
							<div data-v-3575c1cf="" class="section-head text-center">
								<h3 data-v-3575c1cf="" class="mb-3">
									{{$t('home.Supportpaymentmethods')}}
								</h3>
							</div>
						</div>
						<div data-v-3575c1cf="" class=" section--padding">
							<div data-v-3575c1cf="" class="container">
								<div data-v-3575c1cf="" class=""
									style="padding: 4rem 0;display: flex;justify-content: center;flex-wrap: wrap; ">
									<div data-v-3575c1cf="" class="" style="display: flex;justify-content: center;align-items: center;margin: 0.2rem;
										border-radius: 50%; background: #fff; -webkit-box-shadow: 0 0 24px 8px rgba(0, 0, 0, .1); box-shadow: 0 0 24px 8px rgba(0, 0, 0, .1); margin: 16px; cursor: pointer; font-size: 29px; -webkit-transition: all .3s ease; transition: all .3s ease; padding: 15px;
										" v-for="(item) in 10" :key="item">
										<img data-v-3575c1cf="" :src="'./static/images/b/'+item+'.png'"
											style="width: 3rem;height: 3rem;border-radius: 500px;">
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
		baseImageUrl
	} from '@/api/config.js'
	import {
		productList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	import withdraw from '@/mixins/withdraw';

	export default {
		name: 'HomeView',
		components: {
			HeaderView,
			FooterView,
		},
		mixins: [withdraw],
		computed: {
			...mapState(['BackData']),
			marqueeStyle() {
				return {
					animation: `marquee ${this.duration}s linear infinite`
				}
			}
		},
		watch: {
			BackData() {
				this.initBackData()
			}
		},
		data() {
			return {
				imageArr: [],

				carouselHeight: '', //轮播图高
				imgHeight: '',
				// rechargeList: [],
				// userList: [],
				// withdrawList: [],
				dataList: [],
				translateX: 0, // 初始偏移量
				bankList: [],
				helpArr: [{
						img: './static/images/head/1.jpg',
						title: 'Amelia Margaret',
						desc: "The experience of using HR Miner far exceeds expectations! The interface design is simple, and novices can get started quickly. The customer service responds very quickly, and solves problems professionally and patiently.",
					}, {
						img: './static/images/head/2.jpg',
						title: 'Owen Jones',
						desc: "After comparing multiple platforms, I chose HR Miner, which turned out to be a wise choice! The platform's risk control strategy can also guarantee basic returns. There is no handling fee for withdrawals, and the funds arrive quickly. It is worth long-term cooperation!"
					},
					{
						img: './static/images/head/3.jpg',
						title: 'Jonathan Freedland',
						desc: "This is my first time using HR Miner cloud mining. The customer service team patiently answered all my questions and even provided guidance on optimizing mining strategies. The APP is smooth to operate and has powerful real-time data monitoring functions."
					},
					{
						img: './static/images/head/4.jpg',
						title: 'George Monbiot',
						desc: "The HR Miner platform has complete qualifications and has a public third-party audit report. It uses cold wallets to store user assets and has never had any security issues. After using it for more than a year, it is my most reliable choice!"
					}, {
						img: './static/images/head/5.jpg',
						title: 'Simon Jenkins',
						desc: "The HR Miner contract package is highly flexible, and you can mine with as little as $15. Compared with building a self-built mining machine, you don't have to worry too much, the electricity and maintenance costs are cut in half, and the profits are higher!"
					}, {
						img: './static/images/head/6.jpg',
						title: 'Zoe Williams',
						desc: "My good friend of many years shared HR Miner with me. I completed the registration through his affiliate program. The website has a detailed introduction and easy-to-understand pages. I easily joined the mining industry and earned my first income. Thank you my good friend for letting me get in touch with HR Miner. I will continue to share this joy with others!"
					}
				]
				// translateX1: 0, // 初始偏移量
				// translateX2: 0, // 初始偏移量
				// duration: 15 // 动画持续时间（秒）
			};
		},
		mounted() {
			this.initImgHeight()
			this.initBackData();
			this.init();

			this.startAnimation();
			window.addEventListener('resize', this.initImgHeight);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.initImgHeight);
		},
		methods: {
			initImgHeight() {
				if (window.innerWidth < 768) {
					this.carouselHeight = '12rem';
					this.imgHeight = '40rem';

				} else {
					this.carouselHeight = '20rem';
					this.imgHeight = '25rem';
				}
			},
			onIframeLoad() {
				console.log("iframe loaded, navigation blocked by sandbox");
			},
			initBackData() {
				if (this.BackData) {
					var img = [];
					var imageArr = this.BackData.bannerList;
					imageArr.forEach(function(item) {
						img.push({
							url: baseImageUrl + item
						});
					});
					this.imageArr = img
					// this.rechargeList = this.BackData.rechargeList
					// this.userList = this.BackData.userList
					// this.withdrawList = this.BackData.withdrawList

					const bankList = this.BackData.BanksList;
					// bankList.forEach(function(item, index) {
					// 	bankList[index].qrcode = baseImageUrl + item.qrcode;
					// });
					this.bankList = bankList;
				}
			},
			init() {
				productList().then((res) => {
					const dataList = res.data
					dataList.forEach(function(item, index) {
						dataList[index].icon = baseImageUrl + item.icon;
						dataList[index].progress = Number(item.progress);
					});
					this.dataList = dataList
					console.log(res)
				}).catch((res) => {
					console.log(res)
				});
			},
			dowm(url) {
				window.open(url, '_blank');
			},
			startAnimation() {
				var scrollWidth = this.$el.querySelector('.swiper-wrapper').scrollWidth;
				// this.translateX = -this.getRandomNumber(200, scrollWidth - 200);
				if (this.translateX <= -scrollWidth) {
					this.translateX = 0;
				} else {
					this.translateX = -this.getRandomNumber(200, scrollWidth - 200);
				}
				// 5 秒后停止定时
				setTimeout(() => {
					this.startAnimation();
				}, 5000);
			},

			getRandomNumber(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		},
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
	/*  */
	.hero {
		/* min-height: 0px; */
		background: url(@/static/images/tabarr.jpg) no-repeat;
	}

	.hero2 {
		min-height: 0px;
		/* background: url(@/static/images/tabarr.jpg) no-repeat; */
	}



	@keyframes marquee {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	.icon99 {
		font-size: 40px;
		color: #fff;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background-color: #7c3aed;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		-webkit-transition: .2s linear;
		transition: .2s linear;
	}


	/* .el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	} */

	.scroll-container {
		height: 400px;
		/* 设置容器高度 */
		overflow: hidden;
		/* 隐藏溢出内容 */
		position: relative;
	}

	.scrolling-images {
		animation: scroll 20s linear infinite;
		display: flex;
		flex-direction: column;
	}

	.scrolling-images2 {
		animation: scroll 15s linear infinite;
		display: flex;
		flex-direction: column;
	}

	.scrolling-images3 {
		animation: scroll 18s linear infinite;
		display: flex;
		flex-direction: column;
	}

	@keyframes scroll {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-50%);
			/* 移动到复制内容的位置 */
		}
	}

	.scrolling-images img {
		width: 100%;
		height: auto;
		/* margin-bottom: 10px; */
		/* 图片间距 */
	}






	.marquee-container {
		width: 100%;
		/* overflow: hidden; */
		white-space: nowrap;
	}

	.marquee-content {
		display: inline-block;
		/* padding-left: 100%; */
		animation: marqueescroll 25s linear infinite;
	}

	@keyframes marqueescroll {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-100%);
		}
	}

	@import url('@/static/product.css');

	.scroll-content {
		/* display: inline-block; */
		padding-left: 100%;
		animation: marqueescroll2 15s linear infinite;
	}

	@keyframes marqueescroll2 {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-100%);
		}
	}
</style>