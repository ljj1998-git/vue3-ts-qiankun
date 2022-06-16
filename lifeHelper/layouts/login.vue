<template>
	<view id="content">
		<view class="title"></view>
		<view class="box">
			<u-row customStyle="margin-top: 60rpx" justify='center' :gutter="20">
				<u-col span="4">
					<view class="box_title">登录</view>
				</u-col>
				<u-col span="4">
					<view class="box_title">注册</view>
				</u-col>
			</u-row>
			<u-row customStyle="padding:0 60rpx;margin-top:60rpx">
				<u-col span="12">
					<view class="box_text box_tel">
						<u-icon name="account-fill" color="#3eb9f0" size="28"></u-icon>
						<view class="text">账号</view>
						<u--input class='input' border="none" v-model="form.tel"></u--input>
					</view>
					<view class="box_text box_password">
						<u-icon name="lock-fill" color="#3eb9f0" size="28"></u-icon>
						<view class="text">密码</view>
						<input class='input' :type="passwordType" v-model="form.password"></input>
						<u-icon :name="eyeName" color="#3eb9f0" size="28" @click="changePassWordType"></u-icon>
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="12">
					<view class="box_login">登录</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				passwordStatus:true,
				form:{
					tel:'',
					password:''
				}
			}
		},
		computed:{
			passwordType(){
				return this.passwordStatus  ? 'password' : 'text'
			},
			eyeName(){
				return this.passwordStatus  ? 'eye-off' : 'eye-fill'
			}
		},
		methods:{
			changePassWordType(){
				this.passwordStatus = !this.passwordStatus
			}
		}
	}
</script>

<style lang="scss" scoped>
	#content {
		position: relative;

		.title {
			height: 25vh;
			background-color: $uni-color-primary;
			border-radius: 0 0 10vw 10vw;
		}

		.box {
			width: 90vw;
			height: 70vh;
			position: absolute;
			left: 5vw;
			top: 10vh;
			background-color: #fff;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 20rpx #c8c6c6;

			.box_title {
				text-align: center;
				line-height: 60rpx;
				font-size: 36rpx;
				color: #7b92d3;
				padding-bottom: 20rpx;
				border-bottom: 7rpx solid #86c1fa;
			}

			.box_text {
				height: 120rpx;
				border-radius: 60rpx;
				background: #e9f7fe;
				margin-bottom: 40rpx;
				border: 2px solid #c4eaf5;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 30rpx;
				position: relative;
				.text {
					box-sizing: border-box;
					color: #adb2b3;
					margin-right: 20rpx;
				}
				.input{
					width: 40vw;
				}
			}
			.box_login{
				height: 100rpx;
				text-align: center;
				color:#fff;
				margin: 20rpx 60rpx;
				border-radius: 60rpx;
				line-height: 100rpx;
				background: linear-gradient(to right,#5cb9ec,#5a3db6);
			}
		}
	}
</style>
