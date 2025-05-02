<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-c08dea12="" class="container" style=" margin-top: 80px;">
						<div data-v-c08dea12="" class="box">
							<div data-v-c08dea12="" class="title" style="color: #000;">
								<!--{{$t("welfare.VIPClub")}}-->
								{{info.title}}
							</div>
							<div data-v-c08dea12="" class="content" style="font-size: 1.4rem;" v-if="info.cover_img">
								<img :src="info.cover_img"/>
							</div>
							<div data-v-c08dea12="" class="content" style="font-size: 1.4rem;" v-html="info.content">
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
		baseImageUrl
	} from '@/api/config.js'
	import {
		noticeList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'WelfareView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					gropid: 14,
					page_no: 1,
				},
				info: {
					title: '',
					content: '',
					cover_img: ''
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
						if (this.info.cover_img) {
							this.info.cover_img = baseImageUrl + this.info.cover_img
						}
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
</style>