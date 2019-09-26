<template>
	<div class="pd24 salary">
		<van-tabs v-model="activeName" sticky color="#1a91eb" type="card">
			<van-tab title="贷款" name="a">
				<div class="salary-tab">
					<div class="loan-title flex">
						<p class="li1">产品名称</p>
						<p class="li2">普通用户</p>
						<p class="li3">会员</p>
						<p class="li4">条件</p>
					</div>
					<div class="loan-infos">
						<ul class="flex">
							<li class="li1">
								<img src="../assets/images/loan01.png" height="20" alt="">
								<span>房司令</span>
								<p>实时结算</p>
							</li>
							<li class="li2">
								<p><span>3.2%</span>/单</p>
							</li>
							<li class="li3">
								<p><span>3.2%</span>/单</p>
							</li>
							<li class="li4">
								<p>推荐新户首次下款成功</p>
							</li>
						</ul>
					</div>
				</div>
			</van-tab>
		  <van-tab title="信用卡" name="b">
		  	<div class="salary-tab">
					22222
				</div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {

  name: 'salary',

  data() {
    return {
			activeName: 'a'
    };
  },
};
</script>

<style lang="css" scoped>
	.salary-tab{
		padding: .24rem;
		background: #fff;
		text-align: center;
		min-height: 18rem;
	}
	.loan-title{
		font-size: .32rem;
		height: .88rem;
		line-height: 1;
		background: #ffe8e8;
	}
	.li1{
		width:35%;
	}
	.li2{
		width:25%;
	}
	.li3{
		width:25%;
	}
	.li4{
		width:15%;
	}
	.loan-infos ul{
		padding:.3rem 0;
		border-bottom: 1px solid #e4e4e4;
	}
	.loan-infos .li1 p{
		margin-top: .08rem;
		display: inline-block;
		color: #fff;
		padding: .08rem .12rem;
		border-radius: .08rem;
		background: #f67572;
	}
	.loan-infos .li2 p span, .loan-infos .li3 p span{
		color:#f67572;
	}
	.loan-infos .li4{
		color:#f67572;
		line-height: .32rem;
	}

</style>
