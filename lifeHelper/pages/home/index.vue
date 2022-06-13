<template>
	<view class="content">
		<u-tabbar
			:value="value"
			@change="name => value = name"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
		>
			<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
			<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
			<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				value: 0,
			}
		},
		onLoad() {

		},
		methods: {
			click1(e) {
				console.log('click1', e);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
