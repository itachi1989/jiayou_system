<template>
	<view @click="wave">
		<slot></slot>
		<view class="wave" v-show="reaction" :style="{top:top+safeTop+'px',left:left+'px'}"></view>
	</view>
</template>

<script>
	import safeTop from '@/common/safeTop.js'
	export default{
		name:'clickview',
		props:{
			
		},
		data(){
			return {
				top:0,
				left:0,
				reaction:false,
				safeTop:safeTop
			}
		},
		methods:{
			wave(e){
				console.log(safeTop)
				let that=this
				this.reaction=true
				this.left=e.detail.x
				this.top=e.detail.y
				setTimeout(()=>{
					that.reaction=false
				},1000)
			}
		}
	}
</script>
	
<style lang="stylus">
.wave
	background-color:rgba(0,0,0,0.3);
	position:fixed;
	z-index: 1000;
	transform: translate(-50%,-50%);
	border-radius: 50%;
	animation:onshow 0.7s
@keyframes onshow
	0%
		width:25rpx;
		height:25rpx;
	90%
		width:100rpx;
		height:100rpx;
	100%
		width:100rpx;
		height:100rpx;
		opacity: 0;
</style>
