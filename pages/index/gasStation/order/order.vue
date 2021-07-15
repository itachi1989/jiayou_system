<template>
	<clickview class="container">
		<view class="content">
			<view class="tobar">
				<view class="item" v-for="(item,index) in tobarList" :class="{item_checked:item.checked}" @click='tobarChoose(index)'>
					{{item.name}}
				</view>
			</view>
			<!-- 当前订单 -->
			<view class="currentOrder" v-show="currentTobar==0">
				<view class="title">
					<view class="address">
						佛山禅城九鼎店
					</view>
					<view class="status">
						待支付
					</view>
				</view>
				<view style="width:100%;overflow: hidden;">					
					<view class="overdue"><text class="time">09:40</text>后取消订单</view>
				</view>
				<view class="boundary"></view>
				<view class="goodList">
					<view class="item">
						<image class="img" src="/static/img/cat1.jpg" mode="aspectFill"></image>
						<view class="right">
							<view class="left">
								<view class="good_name">花生油</view>
								<view>描述</view>
								<view>x1</view>
							</view>
							<view class="price">¥12</view>
						</view>
					</view>
				</view>
				<view style="width: 100%;overflow: hidden;">
					<view class="sum">
						<view>共1件</view>
						<view class="price">¥12.00</view>
					</view>
				</view>
				<view class="boundary"></view>
				<view class="info" v-for="item in info">
					<view class="label">{{item.name}}</view>
					<view class="data" :style="{color:item.name=='订单编号'?'#1E90FF':''}" @click="copy(item)">{{item.data}}</view>
				</view>
				<view class="btn">
					<view class="cancel">取消订单</view>
					<view class="pay">立即支付</view>
				</view>
			</view>
			<!-- 历史订单 -->
			<view class="currentOrder" v-show="currentTobar==1">
				<view class="title">
					<view class="address">
						佛山禅城九鼎店
					</view>
					<view class="status">
						已完成
					</view>
				</view>
				<view class="mini_list" @click="completeOrder">
					<view class="img-list">
						<view class="img">
							<image src="/static/img/cat1.jpg"></image>
							<view class="good_name">花生油</view>
						</view>
					</view>
					<view class="right">
						<view class="price">￥40.00</view>
						<view>共1件</view>
					</view>
				</view>
			</view>
		</view>
		<footbar></footbar>
	</clickview>
</template>

<script>
	import footbar from '@/component/nav/footbar.vue'
	import clickview from '@/component/clickview/clickview.vue'
	import {mapMutations} from 'vuex'
	export default {
		components:{footbar,clickview},
		data() {
			return {
				tobarList:[
					{
						name:'当前订单',
						checked:false
					},
					{
						name:'历史订单',
						checked:true
					},
				],
				currentTobar:1,
				info:[
					{
						name:'下单时间',
						data:'2021-07-07 17:09:02'
					},
					{
						name:'订单编号',
						data:'daid82ee7dbakd882db'
					},
					{
						name:'备注信息',
						data:'无'
					}
				],
			};
		},
		methods:{
			...mapMutations([
				'footbarChange'
			]),
			copy(item){
				let that=this
				if(item.name=='订单编号'){
						uni.setClipboardData({
							data:item.data,
							success:()=>{
								uni.showToast({
									title:'复制成功'
								})
							},
						})
				}
			},
			tobarChoose(index){
				this.tobarList[this.currentTobar].checked=false
				this.tobarList[index].checked=true
				this.currentTobar=index
			},
			completeOrder(){
				uni.navigateTo({
					url:'/pages/loading/loading-car/loading-car?url=/pages/index/gasStation/order/completeOrder/completeOrder'
				})
			}
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
					font-size :30rpx
					font-weight :800
				.status
					font-size :26rpx
					font-weight:400
					color:#32CD32
			.overdue
				float:right
				font-size :24rpx
				margin-top 10rpx
				.time
					color:#32CD32
			.boundary
				margin-top :20rpx
				margin-bottom :20rpx
				width:100%
				height:2rpx
				background-color:	#D3D3D3
				border-radius :2rpx
			.goodList
				.item
					display :flex
					width:100%
					.img
						width:100rpx
						height:100rpx
					.right
						flex:2
						margin-left :10rpx
						display :flex
						justify-content :space-between
						.left
							display :flex
							flex-direction :column
							justify-content :space-around
							align-items :flex-start
							color:#C0C0C0
							font-size:24rpx
							.good_name
								font-size :32rpx
								font-weight :900
								color :#000000
						.price
							font-size :28rpx
							font-weight :800
			.sum
				color:#C0C0C0
				width:100%
				margin-top:10rpx
				font-size:24rpx
				display :flex
				justify-content :flex-end
				align-items :flex-end
				.price
					font-weight :900
					font-size :30rpx
					margin-left :24rpx
					color:#000000
			.info
				width:100%
				margin-top :20rpx
				margin-bottom :20rpx
				display :flex
				justify-content :space-between
				font-size:24rpx
				.label
					color:#C0C0C0
			.btn
				margin-top :20rpx
				margin-bottom:20rpx
				display :flex
				justify-content :flex-end
				.cancel
					width:150rpx
					height:70rpx
					box-sizing :border-box
					border:2rpx solid #C0C0C0
					font-size:28rpx
					display :flex
					align-items :center
					justify-content :center
					border-radius :10rpx
				.pay
					width:150rpx
					height:70rpx
					font-size:28rpx
					color:#ffffff
					background-color :#32CD32
					display :flex
					align-items :center
					justify-content :center
					border-radius :10rpx
					margin-left:20rpx
		.mini_list
			width:100%
			height:150rpx
			display :flex
			margin-top :10rpx
			justify-content :space-between
			.img-list
				flex:2
				display :flex
				.img
					display :flex
					flex-direction :column
					justify-content :center
					align-items :center
					image
						width:150rpx
						height:150rpx
					.good_name
						font-size :24rpx
						color:#C0C0C0
			.right
				width:150rpx
				height:100%
				font-size :24rpx
				color:#C0C0C0
				display :flex
				flex-direction :column
				align-items :flex-end
				justify-content :center
				.price
					font-size:36rpx
					font-weight:700
					
</style>
