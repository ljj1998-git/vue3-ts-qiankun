<template>
	<view class="content">
		<u-navbar
		            title="个人中心"
		            :autoBack="true"
		        >
		        </u-navbar>
		<view class="title">
			123
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tabbar from '../../components/Tabbar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				value: 0,
			}
		},
		components:{Tabbar},
		onLoad() {

		},
		methods: {
			click1(e) {
				console.log('click1', e);
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.title{
			height: 750rpx;
			background-color: $uni-color-primary;
			border-radius: 0 0 50rpx 50rpx;
		}
	}

</style>
