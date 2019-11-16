<template>
  <div class="order pd24">
    <van-tabs v-model="active" type="card" sticky color="#1a91eb" background="#f5f5f5">
		  <van-tab title="信用卡" name="1">
			  <!-- <van-search
				  v-model="value"
				  placeholder="请输入搜索关键词"
				  show-action
				  @search="cardSearch"
				>
				  <div slot="action" @click="cardSearch">搜索</div>
				</van-search> -->
		  	<van-tabs v-model="activeCard" type="card" color="#1a91eb" title-active-color="#fff" @click="changeTab">
				  <van-tab title="全部" name="1">
				  	<div class="card-tab">
				  		<div class="order-list">
				  			<div class="order-item" >
				  				<div class="order-top">
				  					<span></span>
				  					<p>申请时间 <time>20191011</time></p>
				  				</div>
				  				<div class="order-main">
				  					<ul>
				  						<li><p><label for="">姓名</label><span>XXX</span></p></li>
				  						<li><p><label for="">订单编号</label> <span>XXX</span></p></li>
				  						<li><p><label for="">手机号码</label> <span>XXX</span></p></li>
				  						<li><p><label for="">银行</label> <span>XXX</span></p></li>
				  						<li><p><label for="">状态</label> <span>XXX</span></p></li>
				  					</ul>
				  				</div>
				  			</div>
				  		</div>
							<div class="loan-item clearfix" @click="goPath('credit')" v-for="(val,index) in creditcards" :key="index">
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
				  </van-tab>
				  <van-tab title="进行中" name="2">
				  	<div class="card-tab">
							<div class="loan-item clearfix" @click="goPath('credit')" v-for="(val,index) in creditcards" :key="index">
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
				  </van-tab>
				  <van-tab title="已结算" name="3">
				  	<div class="card-tab">
							<div class="loan-item clearfix" @click="goPath('credit')" v-for="(val,index) in creditcards" :key="index">
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
				  </van-tab>
				  <van-tab title="已失效" name="4">
				  	<div class="card-tab">
							<div class="loan-item clearfix" @click="goPath('credit')" v-for="(val,index) in creditcards" :key="index">
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
				  </van-tab>
				  <van-tab title="待申诉" name="5">
				  	<div class="card-tab">
							<div class="loan-item clearfix" @click="goPath('credit')" v-for="(val,index) in creditcards" :key="index">
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
				  </van-tab>
				</van-tabs>
		  </van-tab>
		  <!-- <van-tab title="贷款" name="2">
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
		  </van-tab> -->
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
    	// activeLoan:1,
    	card_order:[],
    	creditcards:[],
    }
  },
  components:{
  	navBar,
  },
  mounted(){
		this.getCardDatas('');
  },
  methods: {
  	goPath(val){
			this.$router.push({name:val})
		},
  	cardSearch(){
			
  	},
  	changeTab(name){
			if(name == 1){
				this.getCardDatas('');
			}else if(name == 2){
				this.getCardDatas(1);
			}else if(name == 3){
				this.getCardDatas(2);
			}else if(name == 4){
				this.getCardDatas(3);
			}else if(name == 5){
				this.getCardDatas(4);
			}
  	},
  	getCardDatas(type){
			this.$http({
        method: "get",
        url: "/wechat/spread/index?status="+type,
      }).then((res) => {
        let result = res.data.data;
        this.creditcards = result.creditcards;
      }).catch((err) => {});
		},
  }
}
</script>
<style lang="css" scoped>
	.order-item{
		background: #fff;
		border-radius: .08rem;
		margin-bottom: .24rem;
	}
	.order-top{
		position: relative;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		border-bottom: 1px solid #e4e4e4;
	}
	.order-top p{
		margin-left: .24rem;
		font-size: .28rem;
		color: #666;
	}
	.order-top span{
		display: inline-block;
		position: absolute;
		left: 0;
		top: .23rem;
		height: .42rem;
		width: .08rem;
		background: red;
	}
	.order-top p time{
		margin-left: .2rem;
		color: #000;
	}
	.order-main{}
	.order-main ul{
		padding: .18rem .24rem;
		overflow: hidden;
	}
	.order-main ul li{
		width: 50%;
		float: left;
		line-height: .64rem;
	}
	.order-main ul li label{
		float: left;
		display: inline-block;
		width: 1.2rem;
		height: .64rem;
		line-height: .64rem;
		text-align: justify;
		color: #666;
	}
	.order-main ul li label:after{
		content: " ";
    display: inline-block;
    padding-left: 100%;
	}
	.order-main ul li span{
		margin-left: .2rem;
	}
	.card-tab{
		border-radius: .1rem;
		margin:.2rem 0rem;
		min-height: 10rem;
	}
	.loan-item{
		width: 100%;
		background: #fff;
		border-radius: .1rem;
		overflow: hidden;
		padding: .3rem .2rem .2rem .2rem;
		margin-bottom: .2rem;
		position:relative;
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
    border: 1px solid #f45c5c;
    color: #f45c5c;
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
	.loan-item-bottom{}
	.loan-item-bottom p{
		float: right;
		color: #999;
		font-size: .3rem;
	}
	.loan-item-bottom p span{
		color: #333;
	}
</style>
