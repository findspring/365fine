<template>
	<div class="pd24 apply">
		<div class="apply-main bgf">
			<van-cell-group>
			  <van-field
			    v-model="realName"
			    disabled
			    clearable
			    left-icon="contact"
			    placeholder="请输入用户名"
			  />
			  <van-field
			    v-model="idCard"
			    disabled
			    clearable
			    type="number"
			    maxlength="18"
			    size="large"
			    left-icon="idcard"
			    placeholder="请输入身份证号码"
			  />
			  <van-field
			    v-model="mobile"
			    type="tel"
			    maxlength="11"
			    disabled
			    clearable
			    left-icon="phone-o"
			    placeholder="请输入手机号"
			  />
			</van-cell-group>
			<div class="apply-rule flex">
				<van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
				<p>我已阅读并同意<span @click="goPath('service')">《服务协议书》</span></p>
			</div>
		</div>
		<div class="common-btn apply-btn" @click="apply">提交申请</div>
	</div>
</template>

<script>
export default {

  name: 'apply',

  data() {
    return {
			realName:'',
			idCard:'',
			mobile:'',
			checked:true,
    };
  },
  mounted(){
  	this.getApplyDatas();
  },
  methods:{
		goPath(val){
			this.$router.push({path:val})
		},
		apply(){
			if(!this.checked){
				this.$toast({position:'top',message:'请选择已阅读服务协议',duration: 1000,});
				return false;
			}
			let params = {};
			params.id = this.$route.query.id;
			params.realname = this.realName;
			params.idcard = this.idCard;
			params.mobile = this.mobile;
			this.$http({
        method: "post",
        url: "/wechat/creditcard/cardapply",
        data: this.$qs.stringify(params)
      }).then((res) => {
        let result = res.data.data;
        this.$toast({type:'success',message:res.data.msg,duration: 1000,});
        setTimeout(() => {
          this.goPath('mine');
        }, 1000)
        
      }).catch((err) => {});
		},
		getApplyDatas(){
			this.$http({
        method: "get",
        url: "/wechat/creditcard/cardapply",
      }).then((res) => {
        let result = res.data.data.userinfo;
        if(result.realname == '' || result.realname == null){
					this.$toast({type:'err',message:'暂未实名认证,将自动跳转到认证页面',duration: 1000,});
	        setTimeout(() => {
	          this.goPath('mine');
	        }, 1000)
        }else{
					this.realName = result.realname;
	        this.idCard = result.idcard;
	        this.mobile = result.mobile;
        }	        
      }).catch((err) => {});
		},
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
	.apply-btn{
		margin:.8rem auto;
		width: 4.8rem;
		background: linear-gradient(to bottom right, #1a91eb 0%,#68abee 100%);
		font-size: .36rem;
	}
</style>
