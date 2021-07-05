<template>
	<view class="container" >
		<view v-for="item in purse.list">
			<navigator class="lists" hover-class="lists-active" :url="item.route">
				<image class="img" :src="item.img" mode="aspectFit"></image>
				<view class="list">
					<view>{{item.name}}</view>
					<view class="end">
						<view style="display: inline-block;margin-right: 20rpx;"  v-if="item.money">{{item.money}}</view>
						<view class="iconfont iconyoujiantou1 "></view>
					</view>
				</view>
			</navigator>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				// purse:null
			}
		},
		methods: {

		},
		computed:{
			...mapState([
			      'purse'
			    ])
		},
		onShow: function() {
			this.purse=getApp().globalData.purse
			console.log('store',this)
		},
	}
</script>

<style>
	@import url("/static/iconfont/iconfont.css");
	.container{
		width:100%;
	}
	.lists{
		width:100%;
		height:100rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding:0 30rpx 0 30rpx;
		border-bottom:2rpx solid 	#D3D3D3;
	}
	.lists-active{
		background-color: 	#D3D3D3;
	}
	.img{
		height:50rpx;
		width:50rpx;
		margin-right: 30rpx;
	}
	.list{
		width:85%;
		display: flex;
		justify-content: space-between;
	}
	.end{
		display: flex;
		align-items: center;
	}
	.iconyoujiantou1{
		color:#bfbfbf;
		display: inline-block;
		font-size: 1rpx;
	}
</style>
