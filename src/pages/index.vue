<template>
	<div id="wrapper">
		<!-- top -->
		<div>
			<div class="index-wrapper">
				<div class="index-right flex">
					<i class="iconfont icon-sousuo"></i>
        	<!-- <i class="iconfont icon-xiaoxi"></i> -->
				</div>
	      <tab  class="index-tab" :line-width=2 active-color='#fc378c' v-model="index">
	        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index1) in list2" @click="demo2 = item" :key="index1">{{item}}</tab-item>
	      </tab>
	      <swiper v-model="index" height="100px" :show-dots="false">
	        <swiper-item>
	        	<div class="loan-page">
							<marquee>
			          <marquee-item v-for="i in 2" :key="i" @click.native="goNotice(i)">
			          	<i class="iconfont icon-faxian"></i>
			          	<i class="iconfont icon-wode"></i>
			          	<i class="iconfont icon-tuiguang"></i>
			          	<i class="iconfont icon-dingdan"></i>
			          	<!-- <i class="iconfont">&#xe651;</i>
			          	<i class="iconfont">&#xe62c;</i>
			          	<i class="iconfont">&#xe746;</i>
			          	<i class="iconfont">&#xe604;</i> -->
			          	<p class="line-ellipsis02">{{(i)}}.大家好！由于节能施工改造，</p>
			          </marquee-item>
			        </marquee>
			        <div class="product-items">
			        	<div class="loan-item">
			        		
			        	</div>
			        </div>
	        	</div>
	        </swiper-item>
	        <swiper-item>
	        	<div class="">
	        		
	        	</div>
	        </swiper-item>
	        <swiper-item>
	        	<div>33</div>
	        </swiper-item>
	        <swiper-item>
	        	<div>44</div>
	        </swiper-item>
	        <swiper-item>
	        	<div>55</div>
	        </swiper-item>
	      </swiper>
	    </div>
		</div>
	</div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem,Marquee, MarqueeItem } from 'vux'
const list = () => ['精选', '美食', '电影', '酒店', '外卖'];
const test = () => ['11', '22', '33', '44', '55'];

export default {

  name: 'index',
  data() {
    return {
      list1: test(),
      list2: list(),
      demo2: '精选',
      index: 0,
    };
  },
  mounted(){

  },
  motheds:{

  },
  components:{
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
	.loan-page i{
		font-size: .4rem;
		/*color:#48cfad;*/
		color: #4978c4;
	}
</style>

