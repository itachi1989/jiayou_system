<template>
	<view class="container">
		<view class="tobar"></view>
		<footbar></footbar>
	</view>
</template>

<script>
	import footbar from '@/component/nav/footbar.vue'
	export default {
		components:{footbar},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
.container
	width:100vw
	height:100vh
	background-color :	#F5F5F5
</style>
