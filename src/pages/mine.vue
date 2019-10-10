<template>
	<div class="mine pd24">
		<div class="mine-main">
			<!-- top -->
			<div class="mine-top">
				<div class="mine-headimg" @click="goPath('personal')">
					<!-- <img :src="headImg" alt=""> -->
					<van-image
					  round
					  fit="cover"
					  width="1.6rem"
					  height="1.6rem"
					  :src="headImg"
					/>
				</div>
				<div class="mine-personal">
					<h4>XXXX<span>普通用户</span> </h4>
					<p>i代号：673288 <span>未实名</span></p>
				</div>
				<div class="mine-feature">
					<p><b>尊享VIP</b> <span>开通享更多权益</span><i class="iconfont icon-arrow"></i></p>
				</div>
			</div>
			<!-- mid -->
			<div class="mine-mid bgf pd24">
				<!-- money -->
				<div class="mine-money flex">
					<div class="money-item">
						<b>0</b>
						<p>总收入（元）</p>
					</div>
					<div class="money-item">
						<b>0</b>
						<p>可提现（元）</p>
						<i><van-icon name="play" color="#999" /></i>
					</div>
					<div class="money-item" @click="goPath('order')">
						<b>0</b>
						<p>今日订单</p>
						<i><van-icon name="play" color="#999" /></i>
					</div>					
				</div>
				<!-- menu -->
				<div class="mine-menu flex">
					<div class="mine-item" @click="goPath('receipts')">
						<i class="iconfont icon-shouzhi"></i>
						<p>收支明细</p>
					</div>
					<div class="mine-item">
						<i class="iconfont icon-kehu"></i>
						<p>客户管理</p>
					</div>
					<div class="mine-item">
						<i class="iconfont icon-kefu"></i>
						<p>联系客服</p>
					</div>
					<div class="mine-item" @click="goPath('message')">
						<i class="iconfont icon-msg"></i>
						<p>消息</p>
					</div>
				</div>
			</div>
			<!-- extend -->
			<div class="mine-extend">
				<img :src="headImg" alt="">
			</div>
				
		</div>
		<!-- navbar -->
		<nav-bar :page="3"></nav-bar>	
	</div>
</template>

<script>
import navBar from "components/navBar";
export default {

  name: 'mine',

  data() {
    return {
			headImg:require('../assets/images/active.png'),
    };
  },
  components:{
  	navBar,
  },
  methods: {
  	goPath(val){
			this.$router.push({name:val})
		},
  	cardSearch(){

  	},
  	loanSearch(){

  	},
  }
};
</script>

<style lang="css" scoped>
	.mine-top{
		display: flex;
		align-items: center;
		background: #fff;
		padding:.24rem .24rem .6rem .24rem;
		margin-bottom: .64rem;
		position: relative;
		border-radius: .08rem;
	}
	.mine-headimg{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		overflow: hidden;
		margin-right: .3rem;
	}
	.mine-feature{
		width: 80%;
		height: .7rem;
		line-height: .7rem;
		position:absolute;
		background: #333;
		text-align: center;
		color: #fff;
		left: 10%;
		bottom: -.35rem;
		border-radius: .48rem;
	}
	.mine-feature p b{
		font-size: .36rem;
		margin-right: .2rem;
		color: #ffd01e;
		font-style: oblique;
	}
	.mine-feature p i{
		font-size: .24rem;
		margin-left: .2rem;
	}
	.mine-personal h4{
		line-height: .6rem;
		font-size: .4rem;
	}
	.mine-personal h4 span{
		font-size: .28rem;
		margin-left: .1rem;
	}
	.mine-personal p{
		line-height: .6rem;
	}
	.mine-personal p span{
		display: inline-block;
		margin-left: .1rem;
		background: #999;
		color: #fff;
		padding: .02rem .1rem;
		line-height: .4rem;
		border-radius: .04rem;
	}
	.mine-mid{
		border-radius: .08rem;
	}
	.mine-menu{
		padding: .3rem 0 0 0;
		text-align: center;
		justify-content: space-around;
	}
	.mine-menu i{
		font-size: .58rem;
		color: #1a91eb;
	}
	.mine-menu p{
		font-size: .28rem;
		line-height: .6rem;
	}
	.mine-money{
		justify-content: space-around;
		padding-bottom: .3rem;
		border-bottom: 1px solid #f4f4f4;
	}
	.money-item{
		position: relative;
		width: 33.3%;
		border-right: 1px solid #f4f4f4;
		/*height: 1rem;*/
		text-align: center;
	}
	.mine-money .money-item:last-child{
		border:none;
	}
	.money-item b{
		line-height: .8rem;
		font-size: .4rem;
	}
	.money-item p{
		line-height: .4rem;
		color: #999;
	}
	.money-item i{
		position: absolute;
		right: .04rem;
		top:.2rem;
	}
	.mine-extend img{
		width: 100%;
		margin-top: .24rem;
		border-radius: .08rem;
	}
</style>
