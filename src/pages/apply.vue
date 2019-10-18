<template>
	<div class="pd24 apply">
		<div class="apply-main bgf">
			<van-cell-group>
			  <van-field
			    v-model="username"
			    required
			    clearable
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
			    v-model="phone"
			    type="tel"
			    maxlength="11"
			    required
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
		<div class="common-btn apply-btn">提交申请</div>
	</div>
</template>

<script>
export default {

  name: 'apply',

  data() {
    return {
			username:'',
			idCard:'',
			phone:'',
			checked:false,
    };
  },
  methods:{
		goPath(val){
			this.$router.push({name:val})
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
