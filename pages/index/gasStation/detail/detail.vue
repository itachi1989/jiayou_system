<template>
	<view class="container" :style="{width:windowWidth + 'px',height: windowHeight + 'px'}">
		<!-- 购物车 -->
		<view class="virtualise" v-show="isShopcart" @click="shopcartTap()">
			<view class="carList" @click.native.stop>
				<view class="top">
					<view style="color:	#808080;font-size: 28rpx;margin-left: 12rpx;">已选商品</view>
					<view style="color:#C0C0C0;font-size:26rpx;margin-right: 24rpx;display:flex;align-items: center;">
						<image src="/static/img/del.png" style="width:30rpx;height:30rpx"></image>
						清空购物车
					</view>
				</view>
				<view class="goods_container">
					<view class="good_list" v-for="item in 3">
						<image class="img" src="/static/img/cat1.jpg"></image>
						<view class="center">
							<view>花生油</view>
							<view style="margin-top: 30rpx;">￥14</view>
						</view>
						<view class="right">
							<image class="btn" src="/static/img/sub_car.png"></image>
							<view class="number">1</view>
							<image class="btn" src="/static/img/add_car.png"></image>
						</view>
					</view>
				</view>
				<view class="bottom_block"></view>
			</view>
		</view>
		<!-- 占位符 -->
		<view :style="{height: safe_top + 'px'}"></view>
		<uni-nav-bar left-icon="back" @clickLeft="back" fixed=true >
			<view class="search">
				<view class="iconfont iconsousuo"></view>
				<view>搜索商品</view>
			</view>
		</uni-nav-bar>
		<view :style="{height:tobarHeight +'%'}" style="position:absolute">
			<view class="topbar">
				<view class="where">佛山市禅城区张槎街道22号中石油分站</view>
				<view class="distance">
					<view class="iconfont icondingwei"></view>
					距离您2.2km
				</view>
				<view class="car_number">
					<view class="label">车牌号：</view>
					<input placeholder="请输入您的车牌号码"/>
				</view>
				<view class="car_number" style="border:none">
					<view class="label">油机号:</view>
					<picker :range="gasList" @change="gas_select" @cancel="gas_cacel">
						<view class="gas_numer">
							<view class="placeholder" v-show="gasIndex==0">{{gasList[gasIndex]}}</view>
							<view class="chosen" v-show="gasIndex>0">{{gasList[gasIndex]}}</view>
							<view class="iconfont iconxia"></view>
						</view>
					</picker>
					<view class="label" style="margin-left:50rpx">升数:</view>
					<input style="width:60rpx;background-color: #F0F0F0;border-radius: 20rpx;padding-left:20rpx;color: transparent;
      text-shadow: 0 0 0 #000;"/>L
				</view>
			</view>
		</view>
		
		<view :style="{height:tobarHeight +'%'}"></view>
		
		<view class="content" :style="{height:contentHeight + '%'}">
			<scroll-view  scroll-y="true" class="left_scroll" :style="{height:scrollHeight + '%'}">
				<view class="nav_left" >
					<view class="nav_item" :class="[item.checked?'nav_chosen':'',index+1==type_index?'nav_chosen_top':'',index-1==type_index?'nav_chosen_bottom':'']" v-for="(item,index) in good_type" @tap="type_choose(index)" >
						<image :src="item.img"></image>
						<view>{{item.name}}</view>
					</view>
				</view>
			</scroll-view>
			<scroll-view  scroll-y="true" class="right_scroll" :style="{height:scrollHeight + '%'}">
				<view class="right">
					<view class="good_list" v-for="(item,index) in goods.data.goodList">
						<image class="img" :src="item.image"></image>
						<view class="good_right">
							<view class="name">{{item.name}}</view>
							<view class="title">{{item.title}}</view>
							<view class="price">￥{{item.price}}</view>
							<image class="sub" src="/static/img/sub.png" @click="subtract(index)"></image>
							<view class="number">{{item.number}}</view>
							<image class="add" @click="increment(index)" src="/static/img/add_number.png"></image>
						</view>
					</view>
				</view>
			</scroll-view>
			<footbar :tobarHeight="footbarHeight" ></footbar>
		</view>
		<!-- 购物车 -->
		<view class="shopcart" v-show="isSelected">
			<view class="cart" @click="shopcartTap">
				<image src="/static/img/shopcart.png"></image>
				<view class="good_number">1</view>
				<view class="price">
					<text>￥</text>14
				</view>
			</view>
			<view class="pay" @click="pay">
				结算
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState ,mapMutations} from 'vuex'
	import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import footbar from '@/component/nav/footbar.vue'
	export default {
		components: {uniNavBar,footbar},
		data() {
			return {
				tobarHeight:10,
				contentHeight:0,
				footbarHeight:0,
				windowHeight:0,
				windowWidth:0,
				scrollHeight:93,
				safe_top:0,
				gasList:[
					'请选择',
					'#90',
					'#92',
					'#93',
					'#95',
					'#97',
				],
				gasIndex:0,
				good_type:[
					{
						name:'打折商品',
						checked:true,
						img:'/static/img/discount.png'
					},
					{
						name:'日用品',
						checked:false,
						img:'/static/img/riyongpin.png'
					},
					{
						name:'厨房用品',
						checked:false,
						img:'/static/img/kitchen.png'
					},
					{
						name:'零食',
						checked:false,
						img:'/static/img/snack.png'
					},
					{
						name:'洗护用品',
						checked:false,
						img:'/static/img/washthing.png'
					},
					{
						name:'生鲜',
						checked:false,
						img:'/static/img/shengxian.png'
					},
				],
				type_index:0,
				isShopcart:false,//购物车展开/收缩
			}
		},
		methods: {
			...mapMutations([
				'increment',
				'subtract',
				'footbarChange',
			]),
			back(){
				uni.navigateBack({
					
				})
			},
			gas_select(e){
				console.log(e)
				this.gasIndex=e.target.value
			},
			gas_cacel(){
				this.gasIndex=0	
			},
			type_choose(index){
				let that=this
				that.good_type[that.type_index].checked=false
				that.type_index=index
				that.good_type[index].checked=true
				console.log(that.good_type)
			},
			shopcartTap(){
				this.isShopcart=!this.isShopcart
			},
			pay(){
				uni.navigateTo({
					url:"./pay/pay"
				})
			}
		},
		computed:{
			...mapState([
			      'goods'
			    ]),
			isSelected(){
				let list=this.$store.state.goods.data.goodList
				return list.some((item)=>{
					return item.number>0
				})
			}
		},
		onLoad(){
			let that=this
			//获取窗口宽度
			let systemInfo=uni.getSystemInfoSync()
			console.log('systemInfo',systemInfo)
			that.windowHeight=systemInfo.windowHeight
			that.windowWidth=systemInfo.windowWidth
			that.safe_top=systemInfo.safeArea.top
			
			
			//判断机型
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					that.tobarHeight=16
					that.footbarHeight=7
					break
				case 'ios':
					that.tobarHeight=25
					that.footbarHeight=20
					break
			}
			that.contentHeight=92-that.tobarHeight
			that.footbarHeight=100-that.scrollHeight
			console.log('contentHeight',that.contentHeight)
		},
		mounted(){
			this.footbarChange(0)
		}
	}
</script>

<style lang="stylus">
@import url('/static/iconfont/iconfont.css')
.container
	-webkit-text-size-adjust: none;
.search
	width:400rpx
	height:70rpx
	background-color :#F0F0F0
	border-radius :40rpx
	display :flex
	justify-content :center
	align-items :center
	color:#ADADAD
	.iconfont
		margin-right :20rpx
.topbar
	z-index :10
	position:fixed
	width:100%
	padding:0 20rpx 10rpx 20rpx
	border:1rpx solid #ffffff
	box-shadow:  0 1px 6px #ccc
	background-color :#ffffff
	.where
		font-weight :600
		font-size:1rem
		margin-top:0.5rem
	.distance
		font-size :28rpx
		display :flex
		color:	#BEBEBE
		margin-top :0.01rem
		.iconfont
			margin-right:0.1rem
	.car_number
		width:95%
		height:3rem
		display :flex
		align-items :center
		border-bottom :2rpx solid 	#BEBEBE
		.label
			font-size :1rem
			margin-right :10rpx
		.gas_numer
			width:200rpx
			display :flex
			align-items :center
			justify-content :space-around
			color:	#BEBEBE
			.chosen
				color:#000000
.content
	z-index:-1
	width:100%
	height:60%
	display :flex
	flex-direction :row
	display :flex
	.uni-scroll-view::-webkit-scrollbar
		display: none
	.nav_left
		width:200rpx
		display :inline-block
		.nav_item
			width:100%
			height:200rpx
			background-color : #F0F0F0
			display :flex
			flex-direction :column
			align-items :center
			justify-content :center
			font-weight :300
			color:	#7B7B7B
			font-size :25rpx
			image
				width:50rpx
				height:50rpx
				margin-bottom :20rpx
		.nav_chosen
			background-color :#ffffff
		.nav_chosen_top
			border-bottom-right-radius :20rpx
		.nav_chosen_bottom
			border-top-right-radius :20rpx
	.left_scroll
		width:200rpx
		height:100%
	.right_scroll
		flex:2
		height:100%
		.right
			width:100%
			height:100%
			padding:10rpx
			display :inline-block
			padding:20rpx 10rpx
			.good_list
				width :100%
				height:150rpx
				overflow :hidden
				position:relative
				display :flex
				margin-top :30rpx
				.img
					width:150rpx
					height:100%
					border-radius :20rpx
				.good_right
					flex:2
					font-size :30rpx
					font-weight:600
					margin-left :10rpx
					.title
						width:95%
						min-height:60rpx
						max-height :80rpx
						color:	#BEBEBE
						font-size :25rpx
						text-overflow :ellipsis
						overflow: hidden
						display: -webkit-box
						-webkit-line-clamp: 2
						-webkit-box-orient: vertical
					.price
						font-weight :700
						position :absolute
						bottom:5rpx
					.sub
						width:55rpx
						height:55rpx
						position:absolute
						bottom:0rpx
						right:125rpx
					.number
						font-size 28rpx
						position :absolute
						bottom:10rpx
						right:90rpx
					.add
						width:50rpx
						height:50rpx
						border-radius :50%
						position :absolute
						bottom:5rpx
						right:20rpx
						font-size :40rpx
.shopcart
	width:90vw
	height:7vh
	border-radius :50rpx
	background-color :#2F4F4f
	position :fixed
	bottom:150rpx
	left:50%
	transform :translateX(-50%)
	display :flex
	z-index:102
	box-shadow :10rpx 10rpx 10rpx 	#C0C0C0
	.cart
		height:100%
		flex:2
		display :flex
		align-items :center
		image
			width:50rpx
			height:50rpx
			margin-left :50rpx
		.good_number
			width:40rpx
			height:40rpx
			border-radius :50%
			background-color :#32CD32
			color:#ffffff
			display :flex
			justify-content :center
			align-items :center
			font-size :26rpx
			font-weight :600
			transform :translate(-7rpx,-20rpx)
		.price
			color:#FFFFFF
			font-size :35rpx
			font-weight :600
			margin-left :20rpx
	.pay
		height:100%
		flex:1
		background-color :#32CD32
		display :flex
		justify-content :center
		align-items :center
		border-top-right-radius :50rpx
		border-bottom-right-radius :50rpx

@keyframes shop
{
	0%{
		transform :translateY(100%)
	}
	100%{
		transform :translateY(0%)
	}
}

.virtualise
	width:100vw
	height:100vh
	position :absolute
	z-index:100
	background-color:rgba(0,0,0,.5)
	.carList
		width:100vw
		background-color :#FFFFFF
		z-index:101
		position :fixed
		bottom :0
		border-top-left-radius :20rpx
		border-top-right-radius :20rpx
		animation:shop .7s;
		.top
			width:100%
			height:80rpx
			background-color :	#F5F5F5
			border-top-left-radius :20rpx
			border-top-right-radius :20rpx
			display :flex
			justify-content :space-between
			align-items :center
		.bottom_block
			width:100%
			height:250rpx
		.goods_container
			width:100%
			display :flex
			flex-direction :column
			justify-content :center
			align-items :center
			.good_list
				width:95%
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
				.right
					width:150rpx
					height:100%
					display :flex
					align-items :flex-end
					justify-content :center
					.btn
						width:50rpx
						height:50rpx
					.number
						flex:1
						height:50rpx
						display :flex
						justify-content :center
						align-items :center
						
</style>
