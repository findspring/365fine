<template>
	<div class="credit pd24">
		<img :src="creditImg" alt="">
		<div class="common-fixed flex">
			<div class="apply-btn" @click="goPath('apply')">申请办理</div>
			<div class="loan-btn" @click="goPath('share')">推广信用卡赚工资</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'credit',

  data() {
    return {
			creditImg:require('../assets/images/credit.jpg'),
    };
  },
  methods:{
		goPath(val){
			this.$router.push({name:val})
		},
  },
};
</script>

<style lang="css" scoped>
	.credit img{
		width: 100%;
		padding-bottom: 1rem;
	}
</style>
