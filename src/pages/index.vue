<template>
	<div id="wrapper">
		<!-- top -->
		<div>
			<div class="index-wrapper">
				<div class="index-right flex">
					<i class="iconfont icon-sousuo" @click="goPath('search')"></i>
        	<!-- <i class="iconfont icon-xiaoxi"></i> -->
				</div>
	      <tab  class="index-tab" :line-width=2 active-color='#1a91eb' v-model="selected_index">
	        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index1) in list2" @click="demo2 = item" :key="index1">{{item}}</tab-item>
	      </tab>
	      <swiper v-model="selected_index" height="100%"  :show-dots="false">
	      	<!-- 贷款-->
	        <!-- <swiper-item :style='selected_index==0?{position: "static"}:""'>
	        	<div class="loan-page">
	        		<div class="loan-notice">
	        			<marquee>
				          <marquee-item v-for="i in 2" :key="i" @click.native="goNotice(i)">
				          	<p class="line-ellipsis02">{{(i)}}.大家好！由于节能施工改造，</p>
				          </marquee-item>
				        </marquee>
	        		</div>	
			        <div class="product-items">
			        	<div class="loan-item clearfix" @click="goPath('loan')">
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
			        </div>
	        	</div>
	        </swiper-item> -->
	        <swiper-item :style='selected_index==0?{position: "static"}:""'>
	        	<div class="credit-page">
	        		<div class="loan-notice flex">
	        			<van-icon name="bullhorn-o" />
	        			<marquee>
				          <marquee-item v-for="(item,index) in notices" :key="index" @click.native="goNotice(index)">
				          	<p class="line-ellipsis02">{{item}}</p>
				          </marquee-item>
				        </marquee>
	        		</div>
	        		<div class="credit-cards">
	        			<div class="loan-item clearfix" @click="goCredit(val.id)" v-for="(val,index) in creditcards" :key="index">
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
	        	</div>
	        </swiper-item>
	        <!-- <swiper-item :style='selected_index==1?{position: "static"}:""'>
	        	<div class="">
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        	</div>
	        </swiper-item> -->
	        <!-- <swiper-item :style='selected_index==2?{position: "static"}:""'>
	        	<div class="">
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        	</div>
	        </swiper-item>
	        <swiper-item :style='selected_index==3?{position: "static"}:""'>
	        	<div class="">
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        	</div>
	        </swiper-item> -->
	      </swiper>
	    </div>
		</div>
		<!-- navbar -->
		<nav-bar :page="0"></nav-bar>	
	</div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem,Marquee, MarqueeItem } from 'vux';
import navBar from "components/navBar";
const list = () => ['信用卡'];

export default {

  name: 'index',
  data() {
    return {
      list2: list(),
      demo2: '精选',
      selected_index: 0,
      notices:[],
      creditcards:[],
    };
  },
  mounted(){
		this.getCreditDatas();
  },
  methods:{
  	goCredit(id){
  		this.$router.push({path:'credit', query:{
          id:id
        }})
  	},
		goPath(val){
			this.$router.push({name:val})
		},
		getCreditDatas(){
			this.$http({
        method: "get",
        url: "/wechat/spread/index",
      }).then((res) => {
        let result = res.data.data;
        this.notices = result.notices;
        this.creditcards = result.creditcards;
      }).catch((err) => {});
		},
  },
  components:{
  	navBar,
  	Tab,
    TabItem,
    Swiper,
    SwiperItem,Marquee, MarqueeItem
  }
};
</script>

<style lang="css" scoped>
	#wrapper{
		padding: .2rem;
	}
	.index-wrapper{
		position: relative;
	}
	.index-right{		
		width: 10%;
		height: 44px;
		line-height: 44px;
		position: absolute;
		right: 0;
		top:0;
		justify-content: space-around;
	}
	.index-right i{
		cursor:pointer;
		font-size: .36rem;
	}
	.loan-page {
		min-height: 11rem;
	}
	.credit-page{
		margin-top: .24rem;
	}
	.loan-page i{
		font-size: .4rem;
		/*color:#48cfad;*/
		color: #1a91eb;
	}
	.loan-notice{
		padding: .2rem 0;
	}
	.loan-notice i{
		font-size: .4rem;
		color: #1a91eb;
		margin-right: .1rem;
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

