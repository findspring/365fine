<template>
	<div class="withdraw pd24">
		<!-- top -->
		<div class="withdraw-top">
			<ul>
				<li>					
					<b>0.3</b>
					<p>总收入(元)</p>
				</li>
				<li>
					<b>0.3</b>
					<p>可提现(元)</p>
				</li>
			</ul>
		</div>
		<!-- input -->
		<van-cell-group>
		  <van-field
		    v-model="moneyNum"
		    center
		    clearable
		    placeholder="请输入提现金额"
		  >
		    <van-button slot="button" size="small" type="primary">全部提现</van-button>
		  </van-field>
		</van-cell-group>
		<!-- btn -->
		<div class="withdraw-btn">立即提现</div>

	</div>
</template>

<script>
export default {

  name: 'withdraw',

  data() {
    return {
			moneyNum:'',
    };
  },
};
</script>

<style lang="css" scoped>
	.withdraw-top{
		margin-bottom: .24rem;
		width: 100%;
		padding: 0 .24rem;
		height: 2rem;
		background: #fff;
		border-radius: 0.12rem;
	}
	.withdraw-top ul{
		overflow: hidden;
		padding: .3rem 0;
	}
	.withdraw-top ul li{
		float:left;
		width: 50%;
		text-align: center;
		border-right: 1px solid #e4e4e4;
	}
	.withdraw-top ul li p{
		font-size: .32rem;
		line-height: .36rem;
		padding-top: .48rem;
	}
	.withdraw-top ul li b{
		line-height: .48rem;
		font-size: .4rem;
	}
	.withdraw-top ul li:last-child{
		border:none;
	}
	.withdraw-btn{
		width: 100%;
		margin-top:.64rem;
		height: .96rem;
		line-height: .96rem;
		text-align: center;
		background: #c0c0c0;
		color: #fff;
		font-size: .4rem;
		border-radius: 1rem;
	}
</style>
