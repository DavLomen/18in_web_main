<template>
	<div class="page">
		<footer data-v-eb37eb80="" data-v-430b017a="" class="footer">
			<div data-v-eb37eb80="" class="footer-top">
				<div data-v-eb37eb80="" class="container">
					<div data-v-eb37eb80="" class="row justify-content-between g-4">
						<div data-v-eb37eb80="" class="col-md-6 col-lg-6">
							<!-- 	<a data-v-eb37eb80="" href="javascript:;"
								class="t-link logo">
								<img data-v-eb37eb80="" src="@/static/images/logoIcon/logo.png?t=3"
									class="img-fluid logo__is"> 
							</a>-->
							<h4 data-v-eb37eb80="" class="mt-0">{{$t('common.GlobalMiningDistribution')}}</h4>
							<p data-v-eb37eb80="" class="t-short-para">
								<!-- <span style="line-height: 50px;">Global Mining Distribution</span> -->
								<!--{{$t('common.introduction')}} -->
								<!-- <img data-v-eb37eb80="" src="@/assets/logo2.jpg" class="img-fluid logo__is"> -->
								<video autoplay muted loop playsinline class="img-fluid logo__is">
									<source src="@/static/footer.mp4" type="video/mp4">
									Your browser does not support HTML5 video.
								</video>
							</p>
						</div>
						<div data-v-eb37eb80="" class="col-md-6 col-lg-2">
							<h4 data-v-eb37eb80="" class="mt-0">{{$t("common.SiteLinks")}}</h4>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('product')">
								{{$t("common.Contract")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('about')">
								{{$t("common.About")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('faq')">{{$t("common.FAQ")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('affiliate')">
								{{$t("common.Affiliate")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('blog')">
								{{$t("common.Blog")}}
							</div>
						</div>
						<div data-v-eb37eb80="" class="col-md-6 col-lg-2">
							<h4 data-v-eb37eb80="" class="mt-0">{{$t("common.QuickLinks")}}</h4>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('privacy')">
								{{$t("common.PrivacyandPolicy")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('termsService')">
								{{$t("common.TermsofServices")}}
							</div>
							<div data-v-eb37eb80="" class="link-item" @click="$router.push('contact')">
								{{$t("common.Contact")}}
							</div>
							<!-- <div data-v-eb37eb80="" class="link-item">{{$t("common.Bounty")}}</div> -->
						</div>
						<div data-v-eb37eb80="" class="col-md-6 col-lg-2">
							<h4 data-v-eb37eb80="" class="mt-0">{{$t("common.Contact")}}</h4>
							<div data-v-eb37eb80="" class="link-item"><i data-v-eb37eb80=""
									class="el-icon-location-information"></i>
								Hanford Manor 85, Church Lane, Stoke-On-Trent, England, ST4 4QD
							</div>
							<div data-v-eb37eb80="" class="link-item"><i data-v-eb37eb80="" class="el-icon-message"></i>
								info@hrminer.com
							</div>
							<div data-v-eb37eb80="" class="link-item">
								<i data-v-eb37eb80="" class="van-icon van-icon-smile-comment-o"><!----></i>
								24/7 {{$t("common.LiveSupport")}}
							</div>
							<div data-v-eb37eb80="" class="link-item">
								<a data-v-eb37eb80="" :href="BackData ? BackData.setting.service_url : ''"
									target="_blank" class="icon">
									<img data-v-eb37eb80="" src="@/static/images/ft1.png" style="height: 2rem;">
								</a>
								<a data-v-eb37eb80="" :href="BackData ? BackData.setting.whatsapp :''" target="_blank"
									class="icon">
									<img data-v-eb37eb80="" src="@/static/images/ft3.png" style="height: 2rem;">
								</a>
								<!-- 	<a data-v-eb37eb80="" :href="BackData ? BackData.setting.telegram :''" target="_blank"
									class="icon">
									<img data-v-eb37eb80="" src="@/static/images/ft4.png" style="height: 2rem;">
								</a> -->
							</div>
							<div data-v-eb37eb80="" class="markss" style="margin-top: 10px;">
								<a data-v-eb37eb80="" :href="BackData ? BackData.setting.app_down_android :''"
									target="blank_" class="block">
									<img data-v-eb37eb80="" src="@/static/images/android.png?t=1">
								</a>
								<a data-v-eb37eb80="" :href="BackData ? BackData.setting.app_down_ios :''"
									target="blank_" class="mt-10 block">
									<img data-v-eb37eb80="" src="@/static/images/iphone.png?t=1">
								</a>
							</div> <!---->
						</div>
					</div>
				</div>
			</div>
			<div data-v-eb37eb80="" class="footer-flex footer-copyright">
				<img data-v-eb37eb80="" src="@/static/images/ffabout.png">
				<p data-v-eb37eb80="">Copyright 2018-2025 HRMiner. All rights reserved</p>
			</div>
		</footer>
		<footer data-v-6b500d1a="" class="css-footer css-footer-fixed">
			<!-- 		<a data-v-6b500d1a="" href="javascript:;" class="css-tabBar-item">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<i data-v-6b500d1a="" class="fas fa-home el-icon-house ">
					</i>
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text">Home</span>
			</a> -->
			<router-link to="/" data-v-6b500d1a="" class="css-tabBar-item">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<!-- <i data-v-6b500d1a="" class="el-icon-house ">
					</i> -->
					<img src="@/static/images/dashboard/home.png" style="width: 20px;margin: 0 10px;">
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text">{{$t('common.Home')}}</span>
			</router-link>

			<router-link to="/product" data-v-6b500d1a="" class="css-tabBar-item">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<img src="@/static/images/dashboard/package.png" style="width: 20px;margin: 0 10px;">
					<!-- <i data-v-6b500d1a="" class="el-icon-notebook-2"></i> -->
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text">{{$t('common.Contract')}}</span>
			</router-link>
			<router-link to="/affiliate" data-v-6b500d1a="" class="css-tabBar-item">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<img src="@/static/images/dashboard/affiliate.png" style="width: 20px;margin: 0 10px;">
					<!-- <i data-v-6b500d1a="" class="el-icon-caret-left"></i> -->
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text">{{$t('common.Affiliate')}}</span>
			</router-link>
			<router-link to="/dashboard" data-v-6b500d1a="" class="css-tabBar-item">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<img src="@/static/images/dashboard/dashboard.png" style="width: 20px;margin: 0 10px;">
					<!-- <i data-v-6b500d1a="" class="el-icon-user-solid"></i> -->
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text">{{$t('common.Dashboard')}}</span>
			</router-link>
			<!-- <a data-v-6b500d1a="" href="javascript:;" class="css-tabBar-item" @click="$router.go(-1)">
				<span data-v-6b500d1a="" class="css-tabBar-item-icon">
					<i data-v-6b500d1a="" class="el-icon-caret-left"></i>
				</span>
				<span data-v-6b500d1a="" class="css-tabBar-item-text ">{{$t('common.Back')}}</span>
			</a> -->
		</footer>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	export default {
		name: 'FooterView',
		// props: {
		//   msg: String
		// }
		computed: {
			...mapState(['BackData']),
		},
	}
</script>

<style>
</style>