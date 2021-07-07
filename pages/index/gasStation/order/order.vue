<template>
	<view class="container">
		<view class="content">
			<view class="tobar">
				<view class="item" v-for="item in tobarList" :class="{item_checked:item.checked}">
					{{item.name}}
				</view>
			</view>
			<view class="currentOrder">
				<view class="title">
					<view class="address">
						佛山禅城九鼎店
					</view>
					<view class="status">
						待支付
					</view>
				</view>
			</view>
		</view>
		<footbar></footbar>
	</view>
</template>

<script>
	import footbar from '@/component/nav/footbar.vue'
	import {mapMutations} from 'vuex'
	export default {
		components:{footbar},
		data() {
			return {
				tobarList:[
					{
						name:'当前订单',
						checked:true
					},
					{
						name:'历史订单',
						checked:false
					},
				]
			};
		},
		methods:{
			...mapMutations([
				'footbarChange'
			])
		},
		mounted(){
			this.footbarChange(1)
		},
	}
</script>

<style lang="stylus">
.container
	width:100vw
	height:100vh
	background-color :	#F5F5F5
	.content
		width:100%
		display :flex
		flex-direction :column
		align-items :center
		.tobar
			width:100%
			height:80rpx
			background-color :#FFFFFF
			display :flex
			align-items :center
			.item
				font-size :28rpx
				margin-left :24rpx
			.item_checked
				font-weight:600
				color:#32CD32
		.currentOrder
			width:90%
			box-sizing :border-box
			padding:24rpx
			margin-top:24rpx
			background-color :#ffffff
			.title
				width:100%
				display :flex
				justify-content :space-between
				align-items :flex-end
				.address
					font-size :28rpx
					font-weight :600
				.status
					font-size :16rpx
					font-weight:400
					color:#32CD32
</style>
