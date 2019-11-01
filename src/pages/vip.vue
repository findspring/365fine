<template>
	<div class="pd24">
		<div class="vip-banner">
			<img :src="activeImg" alt="">
		</div>
		<div class="vip-main">
			<div class="hot-item flex">
				<h4>VIP优势</h4>
			</div>
			<div class="vip-goods">
				<p>1.办理信用卡返利比普通会员多30%佣金</p>
				<p>2.推荐他人成功办理佣金比普通会员多30%</p>
				<p>3.推荐他人办理vip 比普通会员佣金多30%</p>
			</div>
			<div class="hot-item flex">
				<h4>VIP费用</h4>
			</div>
			<div class="vip-fee flex">
				<h4>VIP终身会员卡</h4>
				<div>
					<small>¥</small><b>199</b>
				</div>
				<p>有效期：永久有效</p>
			</div>
		</div>
		<div class="common-fixed">
			<div class="vip-btn" @click="buyVip">立即购买</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'vip',

  data() {
    return {
			activeImg:require('../assets/images/active.png'),

    };
  },
  methods:{
  	buyVip(){
  		
  	}
  }
};
</script>

<style lang="css" scoped>
	.vip-banner img{
		width: 100%;
		border-radius: .08rem;
	}
	.vip-main{
		background: #fff;
		margin-top: .24rem;
		border-radius: .08rem;
		padding: .1rem .2rem .4rem .2rem;
	}
	.vip-goods p{
		line-height: .48rem;
		padding-left: .24rem;
	}
	.vip-fee{
		width:6rem;
		height: 2.6rem;
		background: #f2d97c;
		margin:.2rem auto;
		text-align: center;
		justify-content: center;
		flex-direction: column;
		border-radius: .08rem;
	}
	.vip-fee h4{
		font-size: .32rem;
		margin-bottom: .24rem;
	}
	.vip-fee small{
		font-size: .3rem;
		margin-right: .1rem;
	}
	.vip-fee b{
		font-size: .6rem;
	}
	.vip-fee p{
		margin-top: .24rem;
		font-size: .24rem;
	}
	.common-fixed{
		height: auto;
		justify-content: center;
	}
	.vip-btn{
		color: #333;
		height: .8rem;
		font-size: .32rem;
		font-weight: 700;
		width: 100%;
		background: #f2d97c;
	}
</style>
