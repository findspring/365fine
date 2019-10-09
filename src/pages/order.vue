<template>
  <div class="order pd24">
    <van-tabs v-model="active" sticky color="#1a91eb" background="#f5f5f5">
		  <van-tab title="信用卡" name="1">
			  <van-search
				  v-model="value"
				  placeholder="请输入搜索关键词"
				  show-action
				  @search="loanSearch"
				>
				  <div slot="action" @click="cardSearch">搜索</div>
				</van-search>
		  	<van-tabs v-model="activeCard" type="card" color="#1a91eb" title-active-color="#fff">
				  <van-tab title="全部" name="1">
				  	<div class="card-tab">
							111
						</div>
				  </van-tab>
				  <van-tab title="进行中" name="2">
				  	<div class="card-tab">
							222
						</div>
				  </van-tab>
				  <van-tab title="已结算" name="3">
				  	<div class="card-tab">
							333
						</div>
				  </van-tab>
				  <van-tab title="已失效" name="4">
				  	<div class="card-tab">
							444
						</div>
				  </van-tab>
				  <van-tab title="待申诉" name="5">
				  	<div class="card-tab">
							555
						</div>
				  </van-tab>
				</van-tabs>
		  </van-tab>
		  <van-tab title="贷款" name="2">
		  	<van-search
				  v-model="value"
				  placeholder="请输入搜索关键词"
				  show-action
				  @search="loanSearch"
				>
				  <div slot="action" @click="loanSearch">搜索</div>
				</van-search>
		  	<van-tabs v-model="activeLoan" type="card" color="#1a91eb" title-active-color="#fff">
				  <van-tab title="更新中" name="1">
				  	<div class="card-tab">
							111
						</div>
				  </van-tab>
				  <van-tab title="已通过" name="2">
				  	<div class="card-tab">
							222
						</div>
				  </van-tab>
				  <van-tab title="未通过" name="3">
				  	<div class="card-tab">
							333
						</div>
				  </van-tab>
				</van-tabs>
		  </van-tab>
		</van-tabs>
		<!-- navbar -->
		<nav-bar :page="2"></nav-bar>	
  </div>
</template>

<script>
import navBar from "components/navBar";
export default {
	name: 'order',
  data () {
    return {
    	active:1,
    	activeCard:1,
    	value:'',
    	activeLoan:1,
    }
  },
  components:{
  	navBar,
  },
  methods: {
  	cardSearch(){

  	},
  	loanSearch(){

  	},
  }
}
</script>
<style lang="css" scoped>
	.card-tab{
		border-radius: .1rem;
		background: #fff;
		margin:.2rem 0rem;
		min-height: 10rem;
	}
</style>
