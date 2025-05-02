<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<section data-v-28ee34e6="" class="about-section ptb-80"><img data-v-28ee34e6=""
							src="@/static/images/abouttop.png?t=2" style="width: 100%;">
						<div data-v-28ee34e6="" class="container">
							<div data-v-28ee34e6="" class="row justify-content-between mb-30-none flex-row-reverse">
								<div data-v-28ee34e6="" class="col-xl-12 col-lg-12 pe-xl-4 mb-30 order-2">
									<div data-v-28ee34e6="" class="section-header left">
										<h2 data-v-28ee34e6="" class="" style="text-align: center;">
											<!-- {{$t("about.About")}} -->
											{{info.title}}
										</h2> <span data-v-28ee34e6="" class="horizontal-gradient"></span>
									</div>
									<div data-v-28ee34e6="" class="about-content" style="padding: 2rem 0rem;">
										<!-- <p data-v-28ee34e6="">{{$t("about.title1")}}</p> -->
										<div v-html="info.content" style="color: #fff;"></div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section data-v-28ee34e6="" class="stats">
						<div data-v-28ee34e6="" class="container max960">
							<div data-v-28ee34e6="" class="about-stats">
								<div data-v-28ee34e6="" class="about-item"
									style="background: rgb(255, 215, 0); color: rgb(0, 0, 0);">
									<div data-v-28ee34e6="">
										<h1 data-v-28ee34e6="">8000000</h1>
										<p data-v-28ee34e6="">{{$t("about.ActiveMembers")}}</p>
									</div>
								</div>
								<div data-v-28ee34e6="" class="about-item"
									style="background: rgb(255, 215, 0); color: rgb(0, 0, 0);">
									<div data-v-28ee34e6="">
										<h1 data-v-28ee34e6="">170+</h1>
										<p data-v-28ee34e6="">{{$t("about.CountriesSupported")}}</p>
									</div>
								</div>
								<div data-v-28ee34e6="" class="about-item"
									style="background: rgb(255, 215, 0); color: rgb(0, 0, 0);">
									<div data-v-28ee34e6="">
										<h1 data-v-28ee34e6="">80+</h1>
										<p data-v-28ee34e6="">{{$t("about.Globalminerals")}}</p>
									</div>
								</div>
								<div data-v-28ee34e6="" class="about-item"
									style="background: rgb(255, 215, 0); color: rgb(0, 0, 0);">
									<div data-v-28ee34e6="">
										<h1 data-v-28ee34e6="">1600000+</h1>
										<p data-v-28ee34e6="">{{$t("about.MiningEquipment")}}</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-v-28ee34e6="" namespace="data_centers">
						<div data-v-28ee34e6="" class="container max960">
							<div data-v-28ee34e6="" class="about-data">
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa1.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t1")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c1")}}</p>
								</div>
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa2.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t2")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c2")}}
									</p>
								</div>
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa3.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t3")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c3")}}</p>
								</div>
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa4.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t4")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c4")}}
									</p>
								</div>
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa5.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t5")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c5")}}</p>
								</div>
								<div data-v-28ee34e6="" class="about-item-data"><img data-v-28ee34e6=""
										src="@/static/images/aaa6.png?t=5">
									<h1 data-v-28ee34e6="">{{$t("about.t6")}}</h1>
									<p data-v-28ee34e6="">{{$t("about.c6")}}}</p>
								</div>
							</div>
						</div>
					</section>
					<div data-v-28ee34e6="" class="section--sm cta-section">
						<div data-v-28ee34e6="" class="container">
							<div data-v-28ee34e6="" class="row gy-4 align-items-center">
								<div data-v-28ee34e6="" class="col-md-7 col-xl-6">
									<p data-v-28ee34e6="" class="t-short-para">
										SAVVY FINANCIAL LTD
									</p>
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.Companynumber")}}：07929192
									</p>
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.Companytype")}}}：Private limited Company
									</p>
									<p data-v-28ee34e6="" class="t-short-para">1
										{{$t("about.Officeaddress")}}：58 Dene Hall Drive, Bishop Auckland, Co Durham, DL14 6UG
									</p>
									<p data-v-28ee34e6="" class="t-short-para">
										{{$t("about.EstablishedDecember")}} 30 January 2012
									</p>
									<div data-v-28ee34e6=""><a data-v-28ee34e6="" target="_blank"
											href="https://find-and-update.company-information.service.gov.uk/company/12052965/filing-history"
											class="btn main-btn mt-4"
											style="color: rgb(255, 255, 255); background: rgb(11, 172, 57);">
											{{$t("about.CheckOnline")}} </a> <a data-v-28ee34e6="" target="_blank"
											href="./static/companies_house_document.pdf" class="btn main-btn mt-4"
											style="color: rgb(255, 255, 255); background: rgb(11, 172, 57);">
											{{$t("about.DownloadPDF")}}</a></div>
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
				FormData:{
					gropid: 6,
					page_no: 1,
				},
				info: {
					title:'',
					content:'',
				}
				
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				noticeList(this.FormData).then((res) => {
					if(res.data_total_nums==1){
						this.info = res.info[0]
					}
					console.log(res)
				}).catch((res) => {
					console.log('err',res)
		
				});
			},
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>