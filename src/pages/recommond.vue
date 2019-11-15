<template>
	<div class="recommond pd24">
		<img :src="creditImg" alt="">
		<div class="common-fixed flex">
			<div class="apply-btn" @click="goPath('reapply')">申请办理</div>
			<!-- <div class="loan-btn" @click="goPath('share')">推广信用卡赚工资</div> -->
		</div>
	</div>
</template>

<script>
import util from '../utils/index'
export default {

  name: 'recommond',

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
			this.$router.push({path:val,query:{id:this.$route.query.id,invite_id:util.getQueryString('invite_id')}})
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
	.recommond img{
		width: 100%;
		padding-bottom: 1rem;
	}
	.recommond .apply-btn{
		width: 100%;
	}
</style>
