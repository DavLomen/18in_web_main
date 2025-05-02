<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>



					<div data-v-52583dda="" class="app-wrapper" style="max-width: 100%;">
						<div data-v-52583dda="">
							<div data-v-52583dda=""
								style="display: block; margin: 0px auto; color: rgb(0, 0, 0); padding: 0px 1rem;">
								<div data-v-52583dda="" class="row gy-4 justify-content-center mt-5">
									<div data-v-52583dda="" class="col-md-4">
										<div data-v-52583dda="" class="contact-item" style="background-color: white;">
											<div data-v-52583dda="" class="icon"><img data-v-52583dda=""
													src="@/static/images/c1.png?t=2" style="width: 100%;"></div>
											<div data-v-52583dda="" class="content">
												<h5 data-v-52583dda="" class="title" style="color: #000;">{{$t("contact.Chattosupport")}}
												</h5>
												<p data-v-52583dda="" class="caption">{{$t("contact.Speakteam")}}</p>
											</div>
										</div>
									</div>
									<div data-v-52583dda="" class="col-md-4">
										<div data-v-52583dda="" class="contact-item" style="background-color: white;">
											<div data-v-52583dda="" class="icon"><img data-v-52583dda=""
													src="@/static/images/c2.png?t=2" style="width: 100%;"></div>
											<div data-v-52583dda="" class="content">
												<h5 data-v-52583dda="" class="title" style="color: #000;">{{$t("contact.Chatonline")}}</h5>
												<p data-v-52583dda="" class="caption">24/7 {{$t("contact.LiveSupport")}}</p>
												<p data-v-52583dda="" class="mt-2"><a data-v-52583dda=""
														href="mailto:info@hrminer.com">info@hrminer.com</a></p>
											</div>
										</div>
									</div>
									<div data-v-52583dda="" class="col-md-4">
										<div data-v-52583dda="" class="contact-item" style="background-color: white;">
											<div data-v-52583dda="" class="icon"><img data-v-52583dda=""
													src="@/static/images/c3.png?t=2" style="width: 100%;"></div>
											<div data-v-52583dda="" class="content">
												<h5 data-v-52583dda="" class="title" style="color: #000;">{{$t("contact.Contactourtime")}}</h5>
												<p data-v-52583dda="" class="caption">{{$t("contact.Visitus")}}</p>
												<p data-v-52583dda="" class="mt-2">{{$t("contact.VisitHQ")}}</p>
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
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'ContactView',
		components: {
			HeaderView,
			FooterView
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>