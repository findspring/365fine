<template>
	<div class="pd24">
		<img src="../assets/images/friend.png"  width="100%" alt="">
		<div class="friend-infos bgf">
			<h5>Ta通过你的邀请，加入会员只需</h5>
			<div class="friend-vip">
				<p class="p1">￥<b>99.00</b></p>
				<p class="p2">原价199元</p>
			</div>
			<h5>邀请成功后，你可获得<span>20~66元</span><br/>随机现金奖励。</h5>
			<div class="friend-btn">立即邀请Ta</div>
			<a href="javascript:;" class="friend-log">本月还有5个邀约名额，邀约记录 <i class="iconfont icon-arrow"></i></a>
			<div class="friend-tip">
				注: 邀请好友不参与推荐有钱活动奖励，通过“邀请好友”购买会员的用户不参与推荐有钱“推荐3人额外奖励”好礼
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'friend',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.friend-infos{
		width:100%;
		margin:.4rem auto 0;
		padding: .24rem;
		border-radius: .1rem;
		text-align: center;
	}
	.friend-infos h5{
		font-size: .32rem;
		font-weight: 400;
		padding: .3rem 0;
		line-height: .48rem;
	}
	.friend-vip{
		margin: .3rem 0;
	}
	.friend-vip .p1{
		font-size: .36rem;
		color: #ff0000;
	}
	.friend-vip .p1 b{
		font-size: .6rem;
		margin-left: .1rem;
	}
	.friend-vip .p2{
		line-height: .4rem;
		color:#666;
		margin-left: .2rem;
	}
	.friend-btn{
		width: 4.2rem;
		height: .92rem;
		line-height: .92rem;
		text-align: center;
		color: #fff;
		font-size: .36rem;
		background: #1a91eb;
		border-radius: .6rem;
		margin: 0 auto;
		margin-bottom: .6rem;
		margin-top: .3rem;
	}
	.friend-log{
		color: #333;
	}
	.friend-tip{
		text-align: justify;
		line-height: .4rem;
		color:#666;
		padding: .6rem .2rem;
	}
</style>
