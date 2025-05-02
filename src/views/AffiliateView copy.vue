<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-3f49f569="" class="section-head text-center">
						<h2 data-v-3f49f569="" class="mb-3 mt-5">{{$t("affiliate.AFFILIATESPROGRAM")}}</h2>
					</div>
					<div data-v-3f49f569="" class="steps">
						<div data-v-3f49f569="" class="container">
							<div data-v-3f49f569="" class="row gy-4">
								<div data-v-3f49f569="" class="item col-12 col-lg-4">
									<div data-v-3f49f569="" class="step">
										<div data-v-3f49f569="" class="img"><img data-v-3f49f569=""
												src="@/static/images/aff1.png?t=1" alt=""></div>
										<div data-v-3f49f569="" class="info">
											<div data-v-3f49f569="" class="content">{{$t("affiliate.t1")}}</div>
										</div>
									</div>
								</div>
								<div data-v-3f49f569="" class="item col-12 col-lg-4">
									<div data-v-3f49f569="" class="step">
										<div data-v-3f49f569="" class="img"><img data-v-3f49f569=""
												src="@/static/images/aff2.png?t=1" alt=""></div>
										<div data-v-3f49f569="" class="info">
											<div data-v-3f49f569="" class="content">{{$t("affiliate.t2")}}
											</div>
										</div>
									</div>
								</div>
								<div data-v-3f49f569="" class="item col-12 col-lg-4">
									<div data-v-3f49f569="" class="step">
										<div data-v-3f49f569="" class="img"><img data-v-3f49f569=""
												src="@/static/images/aff3.png?t=1" alt=""></div>
										<div data-v-3f49f569="" class="info">
											<div data-v-3f49f569="" class="content">{{$t("affiliate.t3")}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-v-3f49f569="" class="join-info">
						<div data-v-3f49f569="" class="container">
							<div data-v-3f49f569="" class="row gy-4 align-items-end flex flex-lg-row-reverse">
								<div data-v-3f49f569="" class="col-lg-6">
									<div data-v-3f49f569="" class="about-content-wrap" v-html="info.content">

									</div>
									<a data-v-3f49f569="" href="javascript:;" class="btn btn-dark"
										@click="$router.push('register')"
										style="margin-top: 2.25rem; width: 50%; background: rgb(229, 23, 23);border: none;">{{$t("affiliate.JOINUS")}}
										&gt;</a>
								</div>
								<div data-v-3f49f569="" class="col-lg-6 mb-5 mb-lg-0"><img data-v-3f49f569=""
										src="@/static/images/aff4.png?t=1" alt="" class="w-100"
										style="border-radius: 10px;" /></div>
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
		name: 'AffiliateView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					gropid: 16,
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

</style>