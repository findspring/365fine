<template>
	<div class="login pd24">
		<div class="login-main bgf">
			<h2>欢迎登录365趣推</h2>
			<div class="login-form">
				<van-cell-group>
				  <van-field
				    v-model="mobile"
				    type="tel"
				    maxlength="11"
				    clearable
				    placeholder="请输入手机号"
				  />
				  <van-field
				    v-model="sms"
				    center
				    type="number"
				    maxlength="6"
				    clearable
				    placeholder="请输入短信验证码"
				  >
				    <van-button color="#1a91eb" slot="button" size="small" type="primary" @click="sendCode" v-if="codeStatus">发送验证码</van-button>
				    <van-button color="#1a91eb" disabled slot="button" size="small" type="primary" @click="sendCode" v-else>{{time}}s</van-button>
				  </van-field>
				</van-cell-group>
			</div>
			<div class="common-btn apply-btn" @click="loginIn">登录</div>
		</div>			
	</div>
</template>

<script>
export default {

  name: 'login',

  data() {
    return {
			mobile:'',
			sms:'',
			codeStatus:true,
      time:60,
    };
  },
  methods:{
		goPath(val){
			this.$router.push({path:val})
		},
		loginIn(){
			let mobileRule = /^[1][3456789][0-9]{9}$/;
			if(this.sms && this.mobile){
				if(!mobileRule.test(this.mobile)){
					this.$toast({position:'top',type:'error',message:'请输入正确手机号',duration: 500,});
				}else{
					if(this.sms.length == 6){
						this.$http({
			        method: "get",
			        url: "/user/public/wechat_login?mobile=" + this.mobile +'&verification_code=' + this.sms,
			      }).then((res) => {
			        let result = res.data.data;
			        if(result.token){
			        	localStorage.setItem("XX-Token",result.token)
			        }
			        this.$toast({type:'success',message:res.data.msg,duration: 1000,});
			        setTimeout(() => {
			          this.goPath('mine');
			        }, 1000)			        
			      }).catch((err) => {});
					}else{
						this.$toast({type:'error',message:'请输入6位验证码',duration: 500,});
					}
				}			
			}else{
				this.$toast({type:'error',message:'请输入完整信息',duration: 500,});
			}						
		},
		sendCode(){
			let mobileRule = /^[1][3456789][0-9]{9}$/;
			if(this.mobile && mobileRule.test(this.mobile)){
				this.codeStatus = false;
	      let timer = setInterval(() => {
	        if (this.time > 1) {
	          this.time--;
	        }else{
	          this.codeStatus = true;
	          this.time = 60;
	          clearInterval(timer);
	        }
	      }, 1000)
				this.$http({
	        method: "get",
	        url: "/user/verification_code/send?username=" + this.mobile,
	      }).then((res) => {

	      }).catch((err) => {});
			}else{
				this.$toast({type:'error',message:'请输入正确手机号',duration: 500,});
			}
				
		}
  },
};
</script>

<style lang="css" scoped>
	.login-main{
		position: absolute;
		top:.24rem;
		right:.24rem;
		bottom:.24rem;
		left:.24rem;
	}
	.login-main h2{
		font-size: .48rem;
		text-align: center;
		line-height: 1;
		padding: 2rem 0 2.4rem 0;
	}
	.apply-btn{
		margin:1.2rem auto;
		width: 4.8rem;
		background: linear-gradient(to bottom right, #1a91eb 0%,#68abee 100%);
		font-size: .36rem;
	}
</style>
