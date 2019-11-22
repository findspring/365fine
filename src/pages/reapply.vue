<template>
	<div class="pd24 apply">
		<div class="apply-main bgf">
			<van-cell-group>
			  <van-field
			    v-model="realname"
			    required
			    clearable
			    maxlength="10"
			    left-icon="contact"
			    placeholder="请输入用户名"
			  />
			  <van-field
			    v-model="idCard"
			    required
			    clearable
			    type="number"
			    maxlength="18"
			    size="large"
			    left-icon="idcard"
			    placeholder="请输入身份证号码"
			  />
			  <van-field
			    v-model="mobile"
			    required
			    type="tel"
			    maxlength="11"
			    clearable
			    left-icon="phone-o"
			    placeholder="请输入手机号"
			  />
			  <van-field
			    v-model="sms"
			    required
			    center
			    left-icon="comment-o"
			    type="number"
			    maxlength="6"
			    clearable
			    placeholder="请输入短信验证码"
			  >
			    <van-button color="#1a91eb" slot="button" size="small" type="primary" @click="sendCode" v-if="codeStatus">发送验证码</van-button>
			    <van-button color="#1a91eb" disabled slot="button" size="small" type="primary" @click="sendCode" v-else>{{time}}s</van-button>
			  </van-field>
			</van-cell-group>
			<div class="apply-rule flex">
				<van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
				<p>我已阅读并同意<span @click="goPath('service')">《服务协议书》</span></p>
			</div>
		</div>
		<div class="tip"> 
			搜索公众号并添加：365趣推 ，领取红包查看进度
		</div>
		<div class="common-btn apply-btn" @click="apply">提交申请</div>
	</div>
</template>

<script>
export default {

  name: 'reapply',

  data() {
    return {
			realname:'',
			idCard:'',
			mobile:'',
			checked:true,
			allChecked:false,
			sms:'',
			codeStatus:true,
      time:60,
    };
  },
  mounted(){
  },
  methods:{
  	goPath(val){
			this.$router.push({path:val})
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
				this.$toast({position:'top',type:'error',message:'请输入正确手机号',duration: 500,});
			}				
		},
		apply(){
			if(!this.checked){
				this.$toast({position:'top',message:'请选择已阅读服务协议',duration: 1000,});
				return false;
			}
			let mobileRule = /^[1][3456789][0-9]{9}$/;
			if(this.realname && this.idCard && this.mobile && this.sms){
				if(!mobileRule.test(this.mobile)){
					this.$toast({position:'top',type:'error',message:'请输入正确手机号',duration: 500,});
				}else{
					if(this.sms.length == 6){
						this.checkRealName(this.realname,this.idCard);
					}else{
						this.$toast({position:'top',type:'error',message:'请输入6位验证码',duration: 500,});
					}						
				}	
			}else{
				this.$toast({position:'top',type:'error',message:'请输入完整信息',duration: 500,});
			}
			// if(this.allChecked){
			// 	let params = {};
			// 	params.id = this.$route.query.id;
			// 	params.realname = this.realname;
			// 	params.idcard = this.idCard;
			// 	params.mobile = this.mobile;
			// 	params.Invite_user_id = this.$route.query.invite_id
			// 	this.$http({
	  //       method: "post",
	  //       url: "/wechat/creditcard/cardapply",
	  //       data: this.$qs.stringify(params)
	  //     }).then((res) => {
	  //       let result = res.data.data;
	  //       this.$toast({type:'success',message:res.data.msg,duration: 1000,});
	  //       setTimeout(() => {
	  //         this.goPath('mine');
	  //       }, 1000)
	        
	  //     }).catch((err) => {});
			// }
				
		},
		checkRealName(realName,idCard){
			// this.$http({
   //      method: "get",
   //      url: "/wechat/spread/realnametest?realname="+realName+'&idcard='+idCard,
   //    }).then((res) => {
      	// if(res.data.code == 200){
  		let params = {};
			params.id = this.$route.query.id;
			params.realname = this.realname;
			params.idcard = this.idCard;
			params.mobile = this.mobile;
			params.verification_code = this.sms;
			params.invite_id = this.$route.query.invite_id
			this.$http({
        method: "post",
        url: "/wechat/spread/sharecardapply",
        data: this.$qs.stringify(params)
      }).then((res) => {
        let result = res.data.data;
        this.$toast({type:'success',message:'申请成功！',duration: 1000,});
        setTimeout(() => {
          this.$router.push({path:'recommond',query:{id:this.$route.query.id,invite_id:this.$route.query.invite_id}})
        }, 1000)
      }).catch((err) => {});
	        // let result = res.data.data; 
     //  	}else{
					// this.$toast({position:'top',type:'error',message:'请输入正确的身份信息',duration: 500,});
     //  	}	      	       
      // }).catch((err) => {});

		}
  },
};
</script>

<style lang="css" scoped>
	.apply-main{
		padding: .4rem .3rem;
		border-radius: .08rem;
	}
	.apply-rule{
		margin-top: .6rem;
		padding-bottom: .4rem;
	}
	.apply-rule p{
		margin-left: .1rem;
	}
	.apply-rule p span{
		color: #1a91eb;
	}
	.tip{
		text-align: center;
		font-weight: 700;
		padding-top: .48rem;
		line-height: 1rem;
	}
	.apply-btn{
		margin:.6rem auto;
		width: 4.8rem;
		background: linear-gradient(to bottom right, #1a91eb 0%,#68abee 100%);
		font-size: .36rem;
	}
</style>
