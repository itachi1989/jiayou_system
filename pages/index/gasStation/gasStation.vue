<template>
	<view class="container">
		<view class="topBar" :style="{top:marginTop + 'rpx'}">
			<view class="topType" :class="[item.checked?'topType_chosen':'']" v-for="(item,index) in topbarList" @click="choose_topbar(index)">
				{{item.name}}
				<view class="chosen_line" v-show="item.checked"></view>
			</view>
			<view class="search">
				<view class="iconfont">&#xe60a;</view>
				<view style="color:	#D3D3D3;margin-left: 10rpx;">搜索</view>
			</view>
		</view>
		<view v-show="topbarList[0].checked==true" class="type">
			<map class="map" id="map1" ref="map1" enable-zoom=true enable-scroll=true :style="{marginTop:170 +'rpx'}" :markers="markers" :latitude="yourLatitude" :longitude="yourLongitude"></map>
			<view class="gas_list" v-for="item in markers">
				<view class="left">
					<view class="name">
						<view class="iconfont iconstar"></view>中国石化广东佛山南海桂城分局
					</view>
					<view class="address">
						<view class="iconfont icondingwei"></view>
						广东省佛山市南海区狮山镇广云路33号大坏蛋还u的话好低啊u
					</view>
					<view class="address">
						<view class="iconfont iconlinedesign-04"></view>
						10:00-23:00
					</view>
					<view class="status">门店营业</view>
				</view>
				<view class="vertical-border"></view>
				<view class="right">
					<view class="go" @tap="goDetail">去看看</view>
					<view class="distance">距离2.3km</view>
					<view class="img_container">
						<view class="img ">
							<view class="iconfont icondianhua"></view>
						</view>
						<view class="img" style="margin-left:15rpx" @tap="guide(item.longitude,item.latitude)">
							<view class="iconfont icondaohang"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="type" :style="{marginTop:marginTop2 + 100 + 'rpx'}">
			<view class="gas_list" v-for="item in 3" v-show="topbarList[1].checked" >
				<view class="left">
					<view class="name">
						<view class="iconfont iconstar"></view>中国石化广东佛山南海桂城分局
					</view>
					<view class="address">
						<view class="iconfont icondingwei"></view>
						广东省佛山市南海区狮山镇广云路33号大坏蛋还u的话好低啊u
					</view>
					<view class="address">
						<view class="iconfont iconlinedesign-04"></view>
						10:00-23:00
					</view>
					<view class="status">门店营业</view>
				</view>
				<view class="vertical-border"></view>
				<view class="right">
					<view class="go" @tap="goDetail">去看看</view>
					<view class="distance">距离2.3km</view>
					<view class="img_container">
						<view class="img ">
							<view class="iconfont icondianhua"></view>
						</view>
						<view class="img" style="margin-left:15rpx">
							<view class="iconfont icondaohang"></view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topbarList:[
					{
						name:'附近门店',
						checked:true
					},
					{
						name:'收藏门店',
						checked:false
					},
				],
				current_tobar:0,
				yourLatitude:'0',
				yourLongitude:"0",
				latitude: 40.013305,  //纬度
				longitude: 118.68571,  //经度
				marginTop:0,
				marginTop2:0,//收藏门店margin
				markers:[
					{
						id:1,
						fontSize:30,
						latitude:0,
						longitude:0,
						content:"anciol",
						iconPath:'/static/img/gas.png',
					},
					{
						id:2,
						fontSize:30,
						latitude:0,
						longitude:0,
						content:"anciol",
						iconPath:'/static/img/gas.png',
					},
					{
						id:3,
						fontSize:30,
						latitude:0,
						longitude:0,
						content:"anciol",
						iconPath:'/static/img/gas.png',
					},
				]
			};
		},
		methods:{
			choose_topbar(index){
				this.topbarList[this.current_tobar].checked=false
				this.topbarList[index].checked=true
				this.current_tobar=index
			},
			guide(longitude,latitude){
				// uni.navigateTo({
				// 	url:'./guide/guide?longitude=' + longitude + '&latitude=' + latitude
				// })
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					success: function () {
					    console.log('success');
					}
				})
			},
			goDetail(){
				uni.navigateTo({
					url:"/pages/loading/loading-car/loading-car?url=/pages/index/gasStation/detail/detail"
				})
			}
		},
		onShow(){
			let that=this
			//判断设备是安卓还是ios
			if(uni.getSystemInfoSync().platform=='android')
			{
				that.marginTop=0
				that.marginTop2=50
			}else{
				that.marginTop=100
				that.marginTop2=50
			}
			
		
			
			//获取地理位置
			uni.getLocation({
						    type: 'gcj02',
							geocode:true,//设置该参数为true可直接获取经纬度及城市信息
						    success: function (res) {
								console.log('res',res)
								that.yourLatitude=res.latitude
								that.yourLongitude=res.longitude
								
								that.markers[0].latitude=res.latitude
								that.markers[0].longitude=res.longitude
								
								that.markers[1].latitude=res.latitude+0.001
								that.markers[1].longitude=res.longitude+0.001
								
								that.markers[2].latitude=res.latitude-0.001
								that.markers[2].longitude=res.longitude-0.001
						    },
							fail: function () {
								uni.showToast({
								    title: '获取地址失败，将导致部分功能不可用',
									icon:'none'
								});
							}
						})
		},
		onReady(){
			let map=uni.createMapContext("map1",this)
			 setTimeout(() => {  
			      console.log('map',map.$getAppMap())  
			       },10000)  
			console.log('webview',this) 
		}
	}
</script>

<style lang="stylus">
@import url('/static/iconfont/iconfont.css')
page
	background-color:	#F5F5F5
.container
	width:100%
	display :flex
	align-items center
	flex-direction column
	justify-content :center
	.topBar
		width:100%
		height:150rpx
		background-color :#FFFFFF
		display :flex
		font-weight 550
		font-size :28rpx
		position :fixed
		top:0rpx
		.topType
			margin-top:40px
			margin-left:80rpx
		.topType_chosen
			color:	#ADD8E6;
			display :flex
			flex-direction column
			align-items :center
		.chosen_line
			width:75rpx
			height:5rpx
			border-radius :10rpx
			background-color :	#00BFFF
			position :absolute
			bottom :5rpx
		.search
			width:150rpx
			height:70rpx
			border-radius :30rpx
			background-color :	#F5F5F5
			position :absolute
			right:10rpx
			margin-top :60rpx
			display :flex
			align-items :center
			justify-content :center
			.iconfont
				color:#D3D3D3;
	.type
		width:100%
		display :flex
		flex-direction :column
		align-items :center
		.map
			width:90%
			height:400rpx
			border-radius :20rpx
		.gas_list
				display :flex
				align-items :center
				background-color :#FFFFFF
				width:90%
				padding:20rpx
				box-sizing :border-box
				margin-top :20rpx
			.left
				max-width :70%
				.name
					font-size :30rpx
					font-weight 600
					color:#A9A9A9
					display :flex
					.iconfont
						margin-right:20rpx
						font-size :40rpx
				.address
					display :flex
					font-size :25rpx
					color:#C0C0C0
					margin-top :10rpx
					.iconfont
							margin-right:20rpx
							font-size :25rpx
							margin-top :5rpx
				.status
					width:120rpx
					height:40rpx
					display :flex
					justify-content :center
					align-items :center
					border:2rpx solid #87CEFA
					border-radius :10rpx
					color:#87CEFA
					font-size :25rpx
					margin-top :10rpx
			.vertical-border
				width:2rpx
				height:200rpx
				background-color:#DCDCDC
				margin-left :10rpx
				margin-right:10rpx
			.right
				display :flex
				flex:1
				flex-direction column
				width:100%
				align-items :center
				justify-content center
				.go
					font-size :30rpx
					color:	#87CEFA
				.distance
					font-size :25rpx
					color:#A9A9A9
					margin-top :15rpx
				.img_container
					display :flex
					justify-content :center
					align-items :center
					margin-top :20rpx
					.img
						width:70rpx
						height:70rpx
						background-color:#F5F5F5
						border-radius :50%
						display :flex
						justify-content :center
						align-items :center
						.iconfont
								color:#87CEFA
		
</style>
