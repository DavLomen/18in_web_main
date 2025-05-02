<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-430b017a="" class="container" style="max-width: 1280px; margin-top: 80px;">
						<div data-v-430b017a="" class="row">
							<div data-v-430b017a="" class="row align-items-center" style="gap: 140px;">

								<div data-v-430b017a="" class="col">
									<div data-v-430b017a="" class="oglav">
										<h1 data-v-430b017a="">
											{{$t("app.title")}}
										</h1>
									</div>
									<div data-v-430b017a="" class="feats">
										<div data-v-430b017a="" class="feat">
											<div data-v-430b017a="" class="headef">
												<p data-v-430b017a="">{{$t("app.t1")}}</p>
											</div>
											<div data-v-430b017a="" class="bodyf">
												<p data-v-430b017a="">
													{{$t("app.t2")}}
												</p>
												<p data-v-430b017a="">
													{{$t("app.t3")}}
												</p>
												<p data-v-430b017a="">
													{{$t("app.t4")}}
												</p>
												<p data-v-430b017a="">
													{{$t("app.t5")}}
												</p>

											</div>
										</div>
										<div data-v-430b017a="" class="d-flex" style="gap: 20px;">
											<a data-v-430b017a=""
												:href="BackData ? BackData.setting.app_down_android : ''"
												target="blank_" class="block">
												<img data-v-430b017a="" src="@/static/images/android.png"
													style="width: 150px;">
											</a>
											<a data-v-430b017a="" target="blank_"
												:href="BackData ? BackData.setting.app_down_ios : ''"
												class="mt-10 block">
												<img data-v-430b017a="" src="@/static/images/iphone.png"
													style="width: 150px;">
											</a>
										</div>
									</div>
								</div>

								<div data-v-430b017a="" class="col d11"><img data-v-430b017a=""
										src="@/static/images/download/screen1.png?t=2" class="screen"
										style="width: 100%; max-width: 100%; min-width: 10rem;"></div>
							</div>
						</div>
					</div>


					<div data-v-430b017a="" class="container" style="max-width: 1280px; margin-top: 80px;">
					<!-- 	<div>
							<el-row :gutter="10">
								<el-col :sm="8" :xs="24">
									<h4 data-v-430b017a="" style="text-align: center;">
										{{$t("app.t6")}}
									</h4>
								</el-col>
								<el-col :sm="8" :xs="24">
									<h4 data-v-430b017a="" style="text-align: center;">
										{{$t("app.t7")}}
									</h4>
								</el-col>
								<el-col :sm="8" :xs="24">
									<h4 data-v-430b017a="" style="text-align: center;">
										{{$t("app.t8")}}
									</h4>
								</el-col>
							</el-row>
						</div> -->
						<div data-v-430b017a="" class="row">
							<div data-v-430b017a="" class="row align-items-center" style="gap: 140px;padding-top: 50px;">
								<div data-v-430b017a="" class="col d11">
									<img data-v-430b017a=""
										src="@/static/images/download/screen2.png?t=2" class="screen"
										style="width: 100%; max-width: 100%; min-width: 10rem;">
										</div>
								<div data-v-430b017a="" class="col">
									<div data-v-430b017a="" class="oglav">
										<h3 data-v-430b017a="">
											{{$t("app.t9")}}
										</h3>
									</div>
									<div data-v-430b017a="" class="feats">
										<div data-v-430b017a="" class="feat">
											<div data-v-430b017a="" class="headef">
												<p data-v-430b017a="">{{$t("app.t10")}}</p>
											</div>
											<div data-v-430b017a="" class="bodyf">
												<p data-v-430b017a="">
													✓ {{$t("app.t11")}}
												</p>
												<p data-v-430b017a="">
													✓ {{$t("app.t12")}}
												</p>
												<p data-v-430b017a="">
													✓ {{$t("app.t13")}}
												</p>
												<p data-v-430b017a="">
													✓ {{$t("app.t14")}}
												</p>
											</div>
										</div>

										
									</div>
								</div>


							</div>
						</div>
					</div>
				
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
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'AppView',
		components: {
			HeaderView,
			FooterView
		},
		computed: {
			...mapState(['BackData']),
		},
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>