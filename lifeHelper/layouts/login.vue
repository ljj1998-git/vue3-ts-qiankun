<template>
	<view id="content">
		<u-toast ref="uToast"></u-toast>
		<view class="logo"></view>
		<view class="box">
			<u-row customStyle="margin-top:70rpx">
				<u-col span="12" v-if="isLogin">
					<view class="box_text box_tel">
						<u--input class='input' placeholder="请输入手机号码" border="none" color='#fff' fontSize='32rpx'
							v-model="form.tel">
						</u--input>
					</view>
					<view class="box_text box_password">
						<u--input class='input' placeholder="请输入密码" border="none" color='#fff' fontSize='32rpx' type="password" v-model="form.password"></u--input>
					</view>
				</u-col>
				<u-col span="12" v-else>
					<view class="box_text">
						<u--input class='input' placeholder="请输入手机号码" border="none" color='#fff' fontSize='32rpx' v-model="form.tel"></u--input>
					</view>
					<view class="box_text">
						<u--input class='input' placeholder="请输入密码" border="none" color='#fff' fontSize='32rpx' type="password" v-model="form.password"></u--input>
					</view>
					<view class="box_text ">
						<u--input class='input' placeholder="请再输入密码" border="none" color='#fff' fontSize='32rpx' type="password" v-model="form.password2"></u--input>
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-col span="12" v-if="isLogin">
					<view class="box_login" @click="handleLogin">登录</view>
				</u-col>
				<u-col span="12" v-else>
					<view class="box_register" @click="handleRegister">注册</view>
				</u-col>
			</u-row>
			<u-row v-if="isLogin">
				<view class="forgot">Forgot Password?</view>
				<view class="forgot" @click="changeIsLogin">Dont Have a account?</view>
			</u-row>
			<u-row v-else>
				<view class="forgot" @click="changeIsLogin">Have a account? Sing In</view>
			</u-row>
			<u-row :gutter="30"
				:customStyle="(isLogin ? 'margin-top:220rpx;' : 'margin-top:100rpx;') + 'padding:0 58rpx;'">
				<view class="otherTitle">Or Sign up with</view>
				<u-line color="#fff" length="70%"></u-line>
			</u-row>
			<u-row customStyle="margin-top:40rpx;padding: 0 28rpx;">
				<view class="otherBox">
					<text class="t-icon t-icon-QQ"></text>
				</view>
				<view class="otherBox">
					<text class="t-icon t-icon-weixin"></text>
				</view>
			</u-row>
		</view>
	</view>
</template>

<script>
	import {
		toLogin,toRegister
	} from '@/apis/modules/login.js';
	import {JSEncrypt} from '@/utils/jsencrypt.js'
	import { TEL_REGULAR,PASSWORD_REGULAR } from '@/utils/regular.js'
	export default {
		data() {
			return {
				isLogin: true,
				form: {
					tel: '',
					password: '',
					password2: '',
				}
			}
		},
		computed: {

		},
		methods: {
			//改变 页面模式 true为登录，false为注册
			changeIsLogin() {
				this.resetDatas()
				this.isLogin = !this.isLogin
			},
			async handleLogin() {
				try {
					if(this.isLogin){
						const res = await toLogin({tel: this.form.tel,password: password})
						if (res.status === 200) {
							this.showToast('请求成功')
						} else {
							this.showToast(res.msg,'error')
						}
					}else{
						const res = await toRegister({...this.form,password: password})
						if (res.status === 200) {
							this.showToast(res.msg)
						} else {
							this.showToast(res.msg,'error')
						}
					}
				} catch (e) {
					console.log('出错了1');
				}

			},
			async handleRegister() {
				if(!this.cheack()) return
				
				let {tel,password} = this.form
				let publicKey = `1234567890123456`; //把之前生成的贴进来，实际开发过程中，可以是后台传过来的
				let encryptor = new JSEncrypt().setPublicKey(publicKey) // 新建JSEncrypt对象
				console.log(encryptor.encrypt(data)); 

				// const res = await toRegister({tel,password})
				// if (res.status === 200) {
				// 	const { type,msg } = res.data
				// 	this.showToast(msg,type)
				// 	if(msg='注册成功'){
				// 		this.resetDatas()
				// 		this.isLogin = true
				// 	} 
				// } else {
				// 	this.showToast(res.msg,'error')
				// }
			},
			//提交数据校验
			cheack(){
				let isPass = true
				let { tel,password, password2 } = this.form
				if(password !== password2){
					this.showToast('两次密码输入不一致','error') 
					isPass = false
				}
				if(!TEL_REGULAR.test(tel)){
					this.showToast('请输入正确的手机号码','error') 
					isPass = false 
				}
				if(!PASSWORD_REGULAR.test(password)){
					this.showToast('密码至少要包含字母，数字，特殊符号@#$%^&*~()-+=中各一位','error')
					isPass = false
				}
				return isPass
			},
			// 重置数据
			resetDatas(){
				this.form = {}
			},
			//展示提示
			showToast(message = '默认文本', type = 'success') {
				this.$refs.uToast.show({ type, message })
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	#content {
		width: 100%;
		height: 100%;
		position: relative;
		background-image: url('@/static/images/loginBg.jpeg');
		background-size: cover;

		.logo {
			width: 50vw;
			height: 20vh;
			background-image: url("@/static/images/logo.png");
			background-repeat: no-repeat;
			background-size: contain;
			margin: 0 auto;
			padding-top: 10vh;
			background-position: bottom;
		}

		.box {
			width: 90vw;
			margin: 0 auto;

			.box_text {
				height: 112rpx;
				width: 650rpx;
				border-radius: 10rpx;
				background: #001849;
				margin: 15rpx auto;
				padding: 0 58rpx;
				box-sizing: border-box;

				.input {
					height: 100%;
				}
			}

			.box_login {
				height: 112rpx;
				width: 650rpx;
				text-align: center;
				color: #fff;
				margin: 100rpx auto 0;
				border-radius: 20rpx;
				line-height: 112rpx;
				font-size: 36rpx;
				background: linear-gradient(270deg, rgba(0, 215, 255, 1) 0%, rgba(0, 143, 255, 1) 100%)
			}

			.box_register {
				height: 112rpx;
				width: 650rpx;
				text-align: center;
				color: #fff;
				margin: 40rpx auto 0;
				border-radius: 20rpx;
				line-height: 112rpx;
				font-size: 36rpx;
				background: linear-gradient(270deg, rgba(0, 215, 255, 1) 0%, rgba(0, 143, 255, 1) 100%)
			}

			.forgot {
				width: 484rpx;
				height: 40rpx;
				color: rgba(81, 153, 253, 1);
				font-size: 24rpx;
				line-height: 40rpx;
				font-weight: 500;
				text-align: center;
				margin: 30rpx auto 0;
			}

			.otherTitle {
				color: #fff;
				font-size: 24rpx;
				flex: 1;
			}

			.otherBox {
				width: 76rpx;
				height: 76rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 28rpx;
			}

			.t-icon {
				width: 50rpx;
				height: 50rpx;
			}

		}
	}
</style>
