<template>
	<div class="pd24 loan">
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
				<p><van-icon name="good-job-o" /></p>
				<div class="flex">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'loan',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.loan-top{
		width: 100%;
		height: 4rem;
		background: linear-gradient(to bottom right, #e85252 0%,#f17e0f 100%);
		border-radius: .08rem;
		color: #fff;
	}
</style>
