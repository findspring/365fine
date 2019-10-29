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
			creditImg:'',
    };
  },
  mounted(){
  	this.getInfoDatas();
  },
  methods:{
		goPath(val){
			this.$router.push({path:val,query:{id:this.$route.query.id}})
		},
		getInfoDatas(){
			this.$http({
        method: "get",
        url: "/wechat/creditcard/cardinfo?id="+this.$route.query.id,
      }).then((res) => {
        let result = res.data.data;
        this.creditImg = result.cardinfo.carddetail_img_h5;
      }).catch((err) => {});
		}
  },
};
</script>

<style lang="css" scoped>
	.credit img{
		width: 100%;
		padding-bottom: 1rem;
	}
</style>
