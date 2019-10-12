<template>
	<div class="pd24 loan">
		<!-- top -->
		<div class="loan-top">
			<ul>
				<li>
					<p>最高额度</p>
					<b>80000元</b>
				</li>
				<li>
					<p>结算周期</p>
					<b>每周五结</b>
				</li>
			</ul>
			<div class="loan-income">
				<p><van-icon name="good-job-o" />推荐新户首次下款成功</p>
				<div class="flex">
					<div><van-icon name="discount" />日利率0.02%</div>
					<div><b>16129人</b>推广过</div>
				</div>
			</div>
		</div>
		<!-- main -->
		<div class="loan-main pd24 bgf">
			<div class="loan-salary">
				<div class="hot-item flex">
					<h4>工资结算说明</h4>
				</div>
				<div class="salary-info flex">
					<div class="salary-vip"><p>会员用户</p><b>2%</b></div>
					<div><p>普通用户</p><b>1.6%</b></div>
				</div>
				<div class="salary-tip">推荐新用户首次下款成功即在次日结算工资（周末及节假日延期）</div>
			</div>
			<div class="loan-progress">
				<div class="hot-item flex">
					<h4>推广流程</h4>
				</div>
				<div class="progress-img">
					<img :src="progressImg" alt="">
				</div>
			</div>
			<div class="loan-apply">
				<div class="hot-item flex">
					<h4>客户申请条件</h4>
				</div>
				<div class="apply-require">
					<p>1.年龄20～50周岁</p>
					<p>2.实名制手机使用满6个月</p>
					<p>3.无不良征信记录</p>
				</div>
			</div>
		</div>
		<div class="common-fixed flex">
			<div class="apply-btn">申请办理</div>
			<div class="loan-btn">推广贷款赚工资</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'loan',

  data() {
    return {
			progressImg:require('../assets/images/progress.png'),
    };
  },
};
</script>

<style lang="css" scoped>
	.common-fixed{
		width: 100%;
		height: 1.1rem;
		padding: 1%;
		background: #fff;
		position: fixed;
		left:0;
		bottom:0;
		justify-content: space-around;
	}
	.common-fixed div{
		color: #fff;
		height: .8rem;
		line-height: .8rem;
		border-radius: 1rem;
		text-align: center;
	}
	.apply-btn{
		width: 35%;	
		background: linear-gradient(to bottom right, #1a91eb 0%,#68abee 100%);
	}
	.loan-btn{
		width: 55%;
		background: linear-gradient(to bottom right, #e85252 0%,#f17e0f 100%);
	}
	.loan{
		padding-bottom: 1.3rem;
	}
	.loan-top{
		width: 100%;
		padding: 0 .24rem;
		height: 3.8rem;
		background: linear-gradient(to bottom right, #e85252 0%,#f17e0f 100%);
		border-radius: .08rem;
		color: #fff;
	}
	.loan-top ul{
		overflow: hidden;
		padding: .3rem 0;
		border-bottom: 1px solid #fff;
	}
	.loan-top ul li{
		float:left;
		width: 50%;
		text-align: center;
		border-right: 1px solid #fff;
	}
	.loan-top ul li p{
		line-height: .48rem;
		padding-bottom: .2rem;
	}
	.loan-top ul li b{
		line-height: .48rem;
		font-size: .36rem;
	}
	.loan-top ul li:last-child{
		border:none;
	}
	.loan-income{
		padding: .2rem .24rem;
	}
	.loan-income p{
		display: flex;
		padding: .2rem 0 ;
		line-height: .48rem;
	}
	.loan-income p i{
		margin-top: .06rem;
		margin-right: .08rem;
		font-size: .36rem;
	}
	.loan-income .flex{
		justify-content: space-between;
	}
	.loan-income .flex div{
		display: flex;
		line-height: .48rem;
	}
	.loan-income .flex div b{
		font-size: .32rem;
		margin-right: .1rem;
	}
	.loan-income .flex div i{
		font-size: .36rem;
		margin-top: .06rem;
		margin-right: .08rem;
	}
	.loan-main{
		margin-top: .24rem;
		border-radius: .08rem;
	}
	.loan-salary .hot-item h4:before{
		background: #ff8917;
	}
	.salary-tip{
		margin-top: .24rem;
		line-height: .36rem;
	}
	.salary-info{
		justify-content: space-between;
	}
	.salary-info div{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .32rem;
		width: 48%;
		height: 1.6rem;
		border-radius: .12rem;
		background: #e4e4e4;
	}
	.salary-info div.salary-vip{
		background: #fcd233;
	}
	.salary-info div.salary-vip p,.salary-info div.salary-vip b{
		color:#805511;
	}
	.salary-info div b{
		font-size: .48rem;
		margin-left: .1rem;
	}
	.loan-progress{
		margin: .24rem 0;
	}
	.loan-apply .hot-item h4:before{
		background: #ff0000;
	}

	.progress-img img{
		width: 100%;
	}
	.apply-require{
		padding: 0 0 0 .2rem;
	}
	.apply-require p{
		line-height: .48rem;
	}
</style>
