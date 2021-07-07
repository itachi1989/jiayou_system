<template>
	<view class="container">
		<input class="search" placeholder="搜索石油站点" placeholder-class="input_pla"/>
		<swiper class="display_area" indicator-dots=true indicator-color=rgba(255,255,255,0.5) autoplay=true indicator-active-color=rgba(255,255,255)>
			<swiper-item v-for="item in 3">
				
			</swiper-item>
		</swiper>
		<swiper class="content_swiper" indicator-dots=true indicator-color=rgba(189,183,107)  indicator-active-color=rgba(255,222,173)>
			<swiper-item class="content-item" v-for="table in deal(business.list,6)">
				<view class="row" v-for="row in deal(table,3)">
					<view class="business" v-for="item1 in row">
						<navigator :url="item1.skip">
							<view class="img" :style="{'background-color':item1.color}">
								<image :src="item1.icon"></image>
							</view>
						</navigator>
						<view>{{item1.name}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="border"></view>
		<view class="place" v-for="item in goodList">
				<view class="order-title flex ai-center">中国石油佛山禅城分站</view>
				<view class="order-container">
					<image :src="item.image" class="sample" mode="aspectFill"></image>
					<view class="order-right">
						<view class="order-name">{{item.name}}</view>
						<view style="display: flex;justify-content: space-between;width:70%;margin-top: 10rpx;">
							<view class="order-label">支持自取</view>
							<view class="order-label">支持预定</view>
						</view>
						<view class="order-delivery">
							起送￥0 免配送费
							<view class="order-price">
								<view class="symbol">¥</view>
								<view class="price">{{item.price}}</view>
							</view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	import { mapState ,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				businessList:[],
				goodList:[
					{
						name:'花生油',
						image:'/static/img/cat1.jpg',
						price:20,
					},
					{
						name:'零食',
						image:'/static/img/cat2.jpg',
						price:30,
					},
					{
						name:'调味料',
						image:'/static/img/cat3.jpg',
						price:40,
					},
					{
						name:'生鲜',
						image:'/static/img/cat4.jpg',
						price:50,
					},
				]
			}
		},
		methods: {
			...mapMutations([
				'footbarChange'
			]),
			
			//功能列表数据处理
			deal:function(list,max){
				let arr1=new Array()
				for(let i=0;i<list.length;){
					let arr2=new Array()
					for(let j=0;j<max;j++){
						if(i==list.length)break
						arr2.push(list[i])
						i++;
					}
					arr1.push(arr2)
				}
				return arr1
			}
		},
		computed:{
			...mapState([
				'business'
			])
		},
		mounted(){
			this.footbarChange(0)
			console.log('7777')
		},
		onHide(){
			
		},
	}
</script>

<style>
.container{
	width:100%;
	height:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.search{
	margin-top:20rpx;
	width:90%;
	height:70rpx;
	background-color:#F5F5F5;
	border-radius: 30rpx;
	padding-left:30rpx;
}
.input_pla{
	text-align: center;
}
.display_area{
	margin-top: 20rpx;
	width:90%;
	height:300rpx;
	background-color: red;
	border-radius: 10rpx;;
}
.content_swiper{
	width:95%;
	height:400rpx;
	margin-top:20rpx;
}
.content-item{
	width:100%;
	height:100%;
	display:table;
}
.business{
	width:20%;
	height:140rpx;
	display: table-cell;
	background-color: #ffffff;
}
.row{
	display: table-row;
}
.img{
	width:100rpx;
	height:100rpx;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin:0 auto;
}
.img image{
	width:50rpx;
	height:50rpx
}
.business view{
	font-size: 30rpx;
	text-align: center;
	font-weight: 400;
	color:#6C6C6C;
	margin-top: 10rpx;
}
.active {
  width: 26rpx;
  height: 26rpx;
  background-color: coral;
}
.border{
	width:100%;
	height:1rpx;
	background-color:#E0E0E0;
}
.order-title{
  height:72rpx;
  width:100%;
  font-size: 28rpx;
  font-weight:600;
  color:#2A2A2A;
  border-bottom: 2rpx solid #EFEFEF;
  display: flex;
  align-items: center;
}
.order-container{
  width:100%;
  padding:16rpx 0 24rpx 0;
  display: flex;
}
.sample{
  width:210rpx;
  height:144rpx;
  border-radius: 20rpx;
}
.order-right{
  width:476rpx;
  box-sizing: border-box;
  padding-left:16rpx;
}
.order-name{
  width:100%;
  font-weight:600;
  font-size: 28rpx;
  text-overflow:ellipsis ;
}

.order-label{
  width:150rpx;
  height:40rpx;
  color:#ffffff;
  font-size:24rpx;
  border-radius: 10rpx;
  background-color: #00FA9A;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-price{
  color:#606060;
  font-size:20rpx;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.symbol{
  font-size: 20rpx;
  font-weight:600;
  color: #EF2453;
  margin-left:6rpx;
  margin-right:6rpx;
}

.price{
  font-size:32rpx;
  font-weight:600;
  color: #EF2453;
}
.order-delivery{
	font-size: 18rpx;
	color:	#A9A9A9;
	margin-top: 5rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
