<template>
	<div id="search" class="pd24">
		<van-sticky>
		  <van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search>
		</van-sticky>			
		<div class="serach-main">
			<div class="search-nothing" v-if="creditcards.length == 0">
				<p>暂无搜索产品</p>
			</div>
			<div class="search-credit" v-else>
				<!-- <h3>信用卡产品</h3> -->
				<div class="loan-item clearfix" v-for="(val,index) in creditcards" :key="index" @click="goPath('credit')" >
					<div class="loan-item-hot" v-if="val.ishot == 1"><van-icon name="fire" />HOT</div>
	    		<div class="loan-item-top">
	    			<img :src="'http://www.365qutui.cn/'+val.bank_logo">
					    			<h4>{{val.card_name}}</h4>
					    			<p class="loan-date">{{val.commission_check_date}}</p>
	    			<!-- <p class="loan-rate">月息0.03%</p> -->
	    		</div>
	    		<div class="loan-item-mid">
	    			<div class="card-item-tips">
	    				<span v-for="(tipItem,k) in val.recommend_tips" :key="k">{{tipItem}}</span>
	    			</div>
	    			<div class="loan-item-vip flex">
	    				<i class="iconfont icon-vip"></i><span>￥<b>{{val.vip_commission}}</b></span>
	    			</div>
	    		</div>
	    		<div class="card-item-bottom">
	    			<p>{{val.recommed_mark}}</p>
	    			<p>普通用户&nbsp;￥<span>{{val.member_commission}}</span></p>
	    		</div>
	    	</div>
			</div>
			<!-- <div class="search-loan">
				<h3>贷款产品</h3>
				<div class="loan-item clearfix">
	    		<div class="loan-item-top">
	    			<img src="../assets/images/cp01.png">
	    			<h4>xxx卡</h4>
	    			<p class="loan-date">每周五结</p>
	    			<p class="loan-rate">月息0.03%</p>
	    		</div>
	    		<div class="loan-item-mid">
	    			<div class="loan-item-limit">
	    				<b>3000-8000</b><span>额度（元）</span>
	    			</div>
	    			<div class="loan-item-vip flex">
	    				<i class="iconfont icon-vip"></i><span>返<b>2.3%</b></span>
	    			</div>
	    		</div>
	    		<div class="loan-item-bottom">
	    			<p>普通用户&nbsp;返<span>1.84%</span></p>
	    		</div>
	    	</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {

  name: 'search',
  data() {
    return {
			value:'',
			creditcards:[],
    };
  },
  methods:{
  	goPath(val){
			this.$router.push({name:val})
		},
  	onSearch(){
			this.$http({
        method: "get",
        url: "/wechat/search/index?k="+this.value,
        // data: this.$qs.stringify(params)
      }).then((res) => {
        let result = res.data.data;
        this.creditcards = result.creditcards;
      }).catch((err) => {});
  	},
  }
};
</script>

<style lang="css" scoped>
	.search-nothing{
		margin-top: .24rem;
		text-align: center;
	}
	.search-nothing p{
		line-height: 1rem;
	}
	.search-loan h3,.search-credit h3{
		line-height: 1rem;
		font-size: .36rem;
		font-weight: 400;
	}
	.loan-item{
		margin-top: .24rem;
		width: 100%;
		background: #fff;
		border-radius: .1rem;
		overflow: hidden;
		padding: .3rem .2rem .2rem .2rem;
		position: relative;
	}
	.loan-item-hot{
		position:absolute;
		right: .24rem;
		top:0;
		padding: .06rem .16rem;
		border-radius:  0 0 .08rem .08rem;
		background: #f45c5c;
		color:#fff;
	}
	.loan-item-hot i{
		margin-right: .06rem;
	}
	.loan-item-top{
		display:flex;
		align-items: center;
	}
	.loan-item-top img{
		width: .4rem;
	}
	.loan-item-top h4{
		font-size: .32rem;
		margin-left: .1rem;

	}
	.loan-item-top p.loan-date{
		background: #f45c5c;
		color: #fff;
		font-size: .28rem;
		padding: .04rem .08rem;
		border-radius: .06rem;
		margin: 0 .1rem;
	}
	.loan-item-top p.loan-rate{
		color: #f45c5c;
		font-size: .28rem;
		border:1px solid #f45c5c;
		padding: .08rem .12rem;
		border-radius: .06rem;
	}
	.loan-item-mid{
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-between;
		padding: .3rem 0;
	}
	.loan-item-limit b{
		font-size: .4rem;
		margin-right: .1rem;
	}
	.loan-item-limit span{
		font-size: .28rem;
		color: #999;
	}
	.loan-item-vip i{
		font-size: .6rem;
		color:#f45c5c;
		margin:.2rem .1rem 0 0;
	}
	.loan-item-vip span{
		color:#f45c5c;
	}
	.loan-item-vip span b{
		font-size: .4rem;
		margin-left: .04rem;
	}
	.card-item-tips span{
		display: inline-block;
		padding: .04rem .08rem;
		border:1px solid #f45c5c;
		color:#f45c5c;
		font-size: .24rem;
		border-radius: .08rem;
		margin-right: .1rem;
	}
	.card-item-bottom{
		display: flex;
		justify-content: space-between;
	}
	.card-item-bottom p{
		color: #999;
		font-size: .3rem;
	}
	.card-item-bottom p span{
		color: #333;
	}
	.loan-item-bottom p{
		float: right;
		color: #999;
		font-size: .3rem;
	}
	.loan-item-bottom p span{
		color: #333;
	}
</style>
