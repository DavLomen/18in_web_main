<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>
					<div data-v-c08dea12="" class="container" style=" margin-top: 80px;">
						<div data-v-c08dea12="" class="box">
							<!-- <div data-v-166d071e="" class="title" style="color: #000;">
								{{info.title}}
							</div> -->
							<div data-v-c08dea12="" class="content" style="font-size: 1.4rem;" v-html="info.content">
							</div>

						</div>
						<!-- <div data-v-166d071e="" class="mt-30" v-show="info.id!==0"
							style="margin: 0px auto; display: block; width: fit-content;"><a data-v-166d071e=""
								@click="$router.push('register')" class="theme-btn lg-btn">
								Accept and Continue</a></div> -->
						<div data-v-166d071e="" class="mt-30" v-show="info.id!==0"
							style="display: flex;justify-content: center; ">
							<!-- <a data-v-166d071e="" @click="$router.push('register')" class="theme-btn lg-btn">
										Accept and Continue</a> -->
							<el-button type="info" @click="$router.push('/register')"
								style="width:50%;color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">
								{{$t('common.AcceptAndContinue')}}
							</el-button>
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
		name: 'privacyView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					gropid: 11,
					page_no: 1,
				},
				info: {
					id: 0,
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
</style>