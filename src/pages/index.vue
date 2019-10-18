<template>
	<div id="wrapper">
		<!-- top -->
		<div>
			<div class="index-wrapper">
				<div class="index-right flex">
					<i class="iconfont icon-sousuo" @click="goPath('search')"></i>
        	<!-- <i class="iconfont icon-xiaoxi"></i> -->
				</div>
	      <tab  class="index-tab" :line-width=2 active-color='#fc378c' v-model="selected_index">
	        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index1) in list2" @click="demo2 = item" :key="index1">{{item}}</tab-item>
	      </tab>
	      <swiper v-model="selected_index" height="100%"  :show-dots="false">
	        <swiper-item :style='selected_index==0?{position: "static"}:""'>
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
	        </swiper-item>
	        <swiper-item :style='selected_index==1?{position: "static"}:""'>
	        	<div class="credit-page">
	        		<div class="loan-item clearfix" @click="goPath('credit')">
								<div class="loan-item-hot"><van-icon name="fire" />HOT</div>
				    		<div class="loan-item-top">
				    			<img src="../assets/images/cp01.png">
				    			<h4>民生信用卡</h4>
				    			<p class="loan-date">查询结算</p>
				    			<!-- <p class="loan-rate">月息0.03%</p> -->
				    		</div>
				    		<div class="loan-item-mid">
				    			<div class="card-item-tips">
				    				<span>通过率高</span>
				    				<span>易下卡</span>
				    				<span>额度大</span>
				    			</div>
				    			<div class="loan-item-vip flex">
				    				<i class="iconfont icon-vip"></i><span>￥<b>80</b></span>
				    			</div>
				    		</div>
				    		<div class="card-item-bottom">
				    			<p>天天民生日，周周享优惠</p>
				    			<p>普通用户&nbsp;￥<span>64</span></p>
				    		</div>
				    	</div>
	        	</div>
	        </swiper-item>
	        <swiper-item :style='selected_index==2?{position: "static"}:""'>
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
	        </swiper-item>
	        <swiper-item :style='selected_index==4?{position: "static"}:""'>
	        	<div class="">
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        		<p>31313</p>
	        	</div>
	        </swiper-item>
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
const list = () => ['贷款', '信用卡', '电影', '酒店', '外卖'];

export default {

  name: 'index',
  data() {
    return {
      list2: list(),
      demo2: '精选',
      selected_index: 0,
    };
  },
  mounted(){

  },
  methods:{
		goPath(val){
			this.$router.push({name:val})
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
	.loan-item{
		width: 100%;
		background: #fff;
		border-radius: .1rem;
		overflow: hidden;
		padding: .3rem .2rem .2rem .2rem;
		margin-bottom: .2rem;
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
		font-size: .3rem;
		margin-left: .1rem;

	}
	.loan-item-top p.loan-date{
		background: #f45c5c;
		color: #fff;
		font-size: .28rem;
		padding: .1rem .14rem;
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

