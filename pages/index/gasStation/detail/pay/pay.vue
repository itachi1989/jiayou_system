<template>
	<view class="container">
		<view class="info">
			<view class="name">
				佛山禅城九鼎店
			</view>
			<view class="distance">
				距离您1.5km
			</view>
			<view class="address">九鼎国际城</view>
			<view class="takeway">
				<view class="label">取货方式</view>
				<view style="font-size: 28rpx;font-weight: 900;color:#32CD32">门店领取</view>
			</view>
		</view>
		<view class="info" style="margin-top: 50rpx;">
			<view class="goods_container">
				<view class="good_list" v-for="item in 3">
					<image class="img" src="/static/img/cat1.jpg"></image>
					<view class="center">
						<view>花生油</view>
						<view style="margin-top: 30rpx;">￥14</view>
					</view>
				</view>
			</view>
		</view>
		<view class="pay">
			
		</view>
	</view>
</template>

<script>
	export default {
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
	.info
		width:95%
		padding:24rpx
		box-sizing :border-box
		background-color :#FFFFFF
		margin:0 auto
		border-radius :20rpx
		.name
			font-size :40rpx
			font-weight :900
		.distance
			font-size :24rpx
			color:	#D3D3D3
			margin-top:10rpx
		.address
			font-size :28rpx
			margin-top:10rpx
		.takeway
			width:100%
			height:80rpx
			display:flex
			justify-content :space-between
			align-items :center
			border-top:1rpx solid #F5F5F5
			margin-top:24rpx
			.label
				font-size :28rpx
.goods_container
	width:100%
	display :flex
	flex-direction :column
	justify-content :center
	align-items :center
	.good_list
		width:100%
		height:150rpx
		display :flex
		align-items :center
		.img
			width:100rpx
			height:100rpx
			border-radius :10rpx
		.center
			flex:2
			height:100%
			box-sizing :border-box
			background-color :#FFFFFF
			padding:24rpx 10rpx
			font-size :30rpx
			font-weight :900	
			display :flex
			justify-content :space-between
			align-items :flex-start
.pay
	width:100vw
	height:200rpx
	background-color :#ffffff
	border-top:1rpx solid 	#C0C0C0
    box-shadow :-10rpx 0 5rpx 	#A9A9A9
	position :fixed
	bottom:0rpx
</style>
