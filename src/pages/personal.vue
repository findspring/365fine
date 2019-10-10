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
					  :src="headImg"
					/>
					<van-icon name="arrow" />
				</div>					
			</div>
			<div class="personal-item">
				<span>昵称</span>
				<div class="personal-right flex">
					<p>XXX</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>i代号</span>
				<div class="personal-right flex">
					<p class="no-arrow">11111</p>
					<!-- <van-icon name="arrow" /> -->
				</div>
			</div>
			<div class="personal-item">
				<span>微信号</span>
				<div class="personal-right flex">
					<p class="gray">填写微信号，获取现金奖励</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>手机号</span>
				<div class="personal-right flex">
					<p>XXX</p>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="personal-item">
				<span>推荐人信息</span>
				<div class="personal-right flex">
					<p class="no-arrow">平台</p>
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
				<div class="personal-right flex">
					<p>未认证</p>
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'personal',

  data() {
    return {
			headImg:require('../assets/images/active.png'),
    };
  },
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
</style>
