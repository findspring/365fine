<template>
	<div class="pd24 personal">
		<div class="hot-item flex">
			<h4>基本信息</h4>
		</div>
		<!-- info -->
		<div class="personal-info bgf">
			<div class="personal-item">
				<span>头像</span>
				<div class="personal-right flex">
					<van-image
					  round
					  fit="cover"
					  width="0.72rem"
					  height="0.72rem"
					  :src="wx_info.headimgurl"
					/>
					<van-icon name="arrow" />
				</div>					
			</div>
			<div class="personal-item">
				<span>昵称</span>
				<div class="personal-right flex" @click="openDialog('昵称')">
					<p>{{wx_info.nickname}}</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>推号</span>
				<div class="personal-right flex">
					<p class="no-arrow">{{wx_info.user_id}}</p>
					<!-- <van-icon name="arrow" /> -->
				</div>
			</div>
			<div class="personal-item">
				<span>微信号</span>
				<div class="personal-right flex">
					<p class="gray">{{wx_info.third_party}}</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>手机号</span>
				<div class="personal-right flex" @click="openDialog('手机号')">
					<p>{{user_info.mobile}}</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>推荐人信息</span>
				<div class="personal-right flex">
					<p class="no-arrow">{{user_info.invite_user_id}}</p>
				</div>
			</div>
		</div>
		<!-- identify -->
		<div class="hot-item flex">
			<h4>实名信息</h4>
		</div>
		<div class="personal-info bgf">
			<div class="personal-item">
				<span>实名认证</span>
				<div class="personal-right flex" @click="openDialog('实名认证')">
					<p>未认证</p>
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
		<!-- dialog -->
		<van-dialog
		  v-model="dialogStatus"
		  :title="dialogTitle"
		  show-cancel-button
		  :beforeClose="beforeClose"
		>
			<div class="dialog-main" v-if="dialogTitle == '手机号'">
				<van-field
			    v-model="phone"
			    type="tel"
			    maxlength="11"
			    clearable
			    placeholder="请输入手机号"
			  />
			</div>
		  <div class="dialog-main" v-else-if="dialogTitle == '昵称'">
				<van-field
			    v-model="nickName"
			    maxlength="10"
			    clearable
			    placeholder="请输入昵称"
			  />
			</div>
			<div class="dialog-main" v-else-if="dialogTitle == '实名认证'">
				<van-field
			    v-model="realName"
			    maxlength="10"
			    clearable
			    placeholder="请输入真实姓名"
			  />
			  <van-field
			    v-model="idNum"
			    maxlength="18"
			    clearable
			    placeholder="请输入身份证号码"
			  />
			</div>
		</van-dialog>
	</div>
</template>

<script>
export default {

  name: 'personal',

  data() {
    return {
			headImg:require('../assets/images/active.png'),
			dialogStatus:false,
			dialogTitle:'',
			phone:'',
			nickName:'',
			realName:"",
			idNum:'',
			user_info:[],
			wx_info:[],
    };
  },
  mounted(){
  	this.getPersonalDatas();
  },
  methods:{
  	openDialog(val){
			this.dialogStatus = true;
			this.dialogTitle = val;
  	},
  	beforeClose(action, done){
		  if (action === 'confirm') {
		    alert(1)
		    done();
		  } else {
		    done();
		  }
  	},
  	getPersonalDatas(){
			this.$http({
        method: "get",
        url: "/user/profile/wechat_userset",
      }).then((res) => {
        let result = res.data.data;
        this.user_info = result.user_info;
        this.wx_info = result.wx_info;
      }).catch((err) => {});
		}
  }
};
</script>

<style lang="css" scoped>
	.personal-info{
		border-radius: .08rem;
		padding: .2rem .3rem;
	}
	.personal-item{
		margin: 0 .1rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #e4e4e4;
		height: .96rem;
		line-height: .96rem;
		justify-content: space-between;
	}
	.personal-info .personal-item:last-child{
		border:none;
	}
	.personal-item span{
		font-size: .32rem;
		color: #999;
	}
	.personal-item i{
		font-size: .34rem;
		color: #999;
		margin-left: .1rem;
	}
	.personal-right p.no-arrow{
		margin-right: .1rem;
	}
	.personal-right p.gray{
		color: #999;
	}
	.dialog-main{
		padding: .2rem;
	}
</style>
