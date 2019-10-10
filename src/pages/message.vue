<template>
	<div class="message pd24">
		<van-tabs v-model="activeName" sticky color="#1a91eb" title-active-color="#1a91eb">
			<van-tab title="系统通知" name="a">
				<div class="notice-tab">
					<div class="notice-item">
						<van-collapse v-model="activeName" accordion>
						  <van-collapse-item title="标题1标题1" name="1" value="2019-10-09 18:15:42">内容1</van-collapse-item>
						  <van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
						  <van-collapse-item title="标题3" name="3">内容3</van-collapse-item>
						</van-collapse>
					</div>
					<div class="none">
						<img :src="noneImg" alt="">
						<p>暂无相关通知</p>
					</div>
				</div>
			</van-tab>
		  <van-tab title="订单通知" name="b">
		  	<div class="notice-tab">
					22222
				</div>
		  </van-tab>
		  <van-tab title="收入通知" name="c">
		  	<div class="notice-tab">
					22222
				</div>
		  </van-tab>
		</van-tabs>
	</div>
	</div>
</template>

<script>
export default {

  name: 'message',

  data() {
    return {
			activeName:'a',
			noneImg:require('../assets/images/none.png'),
    };
  },
};
</script>

<style lang="css" scoped>
	.none{
		border-radius: .08rem;
		width: 100%;
		height: 6rem;
		text-align: center;
		background: #fff;
		margin-top: .24rem;
		display: flex; 
  	align-items: center;  
  	flex-direction: column;
  	justify-content: center;
	}
	.none p{
		font-size: .32rem;
		margin-top: .24rem;
	}
	.notice-item{
		margin-top: .24rem;
	}
</style>
