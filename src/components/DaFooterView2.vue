<template>
	<div class="page">
		<footer data-v-eb37eb80="" data-v-430b017a="" class="footer">
			<div data-v-dc2c9a50="" class="mobile-bottom-tabs">
				<div data-v-dc2c9a50="" class="mobile-tab " @click="$router.push('/')">
					<!-- <i data-v-dc2c9a50="" class="el-icon-house"></i> -->
					<img src="@/static/images/dashboard/home.png" style="width: 20px;margin: 0 10px;">
					<div data-v-dc2c9a50="" class="name">{{$t('common.Home')}}</div>
				</div>
				<div data-v-dc2c9a50="" class="mobile-tab " @click="$router.push('/product')">
					<!-- <i data-v-dc2c9a50="" class="el-icon-files"></i> -->
					<img src="@/static/images/dashboard/package.png" style="width: 20px;margin: 0 10px;">
					<div data-v-dc2c9a50="" class="name">{{$t('common.Contract')}}</div>
				</div>
				<div data-v-dc2c9a50="" class="mobile-tab " @click="$router.push('/affiliate')">
					<!-- <i data-v-dc2c9a50="" class="el-icon-office-building"></i> -->
					<img src="@/static/images/dashboard/affiliate.png" style="width: 20px;margin: 0 10px;">
					<div data-v-dc2c9a50="" class="name">{{$t('common.Affiliate')}}</div>
				</div>
				<div data-v-dc2c9a50="" class="mobile-tab active" @click="$router.push('/dashboard')">
					<!-- <i data-v-dc2c9a50="" class="el-icon-user"></i> -->
					<img src="@/static/images/dashboard/dashboard.png" style="width: 20px;margin: 0 10px;">
					<div data-v-dc2c9a50="" class="name">{{$t('common.Dashboard')}}</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
	export default {
		name: 'DaFooterView2',
	}
</script>

<style>
</style>