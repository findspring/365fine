<template>
	<div class="message pd24">
		<van-tabs v-model="activeName" sticky color="#1a91eb" title-active-color="#1a91eb">
			<van-tab title="系统通知" name="a">
				<div class="notice-tab">
					<div class="notice-item" v-if="system_notice.length">
						<van-collapse v-model="activeSystem" accordion>
							<van-collapse-item :title="item.title" :name="index" v-for="(item,index) in system_notice" :key="index" :value="item.createtime">{{item.content}}</van-collapse-item>
						</van-collapse>
					</div>
					<div class="none" v-else>
						<img :src="noneImg" alt="">
						<p>暂无相关通知</p>
					</div>
				</div>
			</van-tab>
		  <van-tab title="订单通知" name="b">
		  	<div class="notice-tab">
					<div class="notice-item" v-if="order_notice.length">
						<van-collapse v-model="activeOrder" accordion>
							<van-collapse-item :title="item.title" :name="index" v-for="(item,index) in order_notice" :key="index" :value="item.createtime">{{item.content}}</van-collapse-item>
						</van-collapse>
					</div>
					<div class="none" v-else>
						<img :src="noneImg" alt="">
						<p>暂无相关通知</p>
					</div>
				</div>
		  </van-tab>
		  <van-tab title="收入通知" name="c">
		  	<div class="notice-tab">
					<div class="notice-item" v-if="income_notice.length">
						<van-collapse v-model="activeIncome" accordion>
							<van-collapse-item :title="item.title" :name="index" v-for="(item,index) in income_notice" :key="index" :value="item.createtime">{{item.content}}</van-collapse-item>
						</van-collapse>
					</div>
					<div class="none" v-else>
						<img :src="noneImg" alt="">
						<p>暂无相关通知</p>
					</div>
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
			activeSystem:1,
			activeOrder:1,
			activeIncome:1,
			noneImg:require('../assets/images/none.png'),
			income_notice:[],
			order_notice:[],
			system_notice:[],
    };
  },
  mounted(){
  	this.getMessageDatas();
  },
  methods: {
  	goPath(val){
			this.$router.push({path:val})
		},
  	getMessageDatas(){
			this.$http({
        method: "get",
        url: "/wechat/notice/index",
      }).then((res) => {
        let result = res.data.data;
        this.system_notice = result.system_notice;
        this.order_notice = result.order_notice;
        this.income_notice = result.income_notice;
      }).catch((err) => {});
		}
  }
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
