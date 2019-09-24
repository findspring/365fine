<template>
	<div class="pd24">
		<div class="hot-item flex">
			<h4>热门活动</h4>
		</div>
		<div class="">
			<van-collapse v-model="activeName" accordion>
			  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
			  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
			  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
			</van-collapse>
		</div>
	</div>
</template>

<script>
export default {

  name: 'guide',

  data() {
    return {
			activeName: '1'
    };
  },
};
</script>

<style lang="css" scoped>
	.hot-item{
		line-height: .88rem;
		justify-content: space-between;
	}
	.hot-item h4{
		position:relative;
		font-size: .32rem;
		margin-left: .2rem;
	}
	.hot-item h4:before{
		content: '';
		width:4px;
		height: .34rem;
		position: absolute;
		left: -0.2rem;
		top:.26rem;
		background: #4978c4;
		border-radius: .2rem;
	}
</style>
