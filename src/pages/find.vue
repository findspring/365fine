<template>
	<div id="find">
		<!-- swipe -->
		<div class="find-swiper">
			<swiper :list="img_list" auto loop style="width:100%;margin:0 auto;border-radius: .1rem;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
		</div>
		<!-- menu -->
		<div class="find-menu flex">
			<div class="find-menu-item" @click="goPath('guide')">
				<i class="iconfont icon-xinshou"></i>
				<p>新手指南</p>
			</div>
			<div class="find-menu-item" @click="goPath('friend')">
				<i class="iconfont icon-yaoqing"></i>
				<p>邀请好友</p>
			</div>
			<div class="find-menu-item" @click="goPath('cash')">
				<i class="iconfont icon-xianjin"></i>
				<p>现金任务</p>
			</div>
			<div class="find-menu-item" @click="goPath('salary')">
				<i class="iconfont icon-gongzi"></i>
				<p>工资表</p>
			</div>
		</div>
		<!-- notice -->
		<div class="find-notice">
			<marquee>
        <marquee-item v-for="i in 2" :key="i" @click.native="goNotice(i)">
        	<p class="line-ellipsis02">{{(i)}}.大家好！由于节能施工改造，</p>
        </marquee-item>
      </marquee>
		</div>
		<!-- hot -->
		<div class="find-hot clearfix">
			<div class="hot-item flex">
				<h4>热门活动</h4>
				<p>全部活动<i class="iconfont icon-arrow"></i></p>
			</div>
			<a href="javascript:;"><img :src="activeImg" alt=""></a>
		</div>
		<!-- news -->
		<div class="find-news">
			<div class="hot-item flex">
				<h4>头条</h4>
			</div>
			<van-tabs v-model="activeName" sticky color="#1a91eb">
				<van-tab title="全部" name="a" class="find-news-info">
					<div class="find-news-all">
						<div class="find-news-item">
			    		<img src="../assets/images/news01.png" alt="">
			    		<div class="find-news-right">
			    			<h5 class="line-ellipsis02">xxxxxtitle你知道吗？</h5>
			    			<div class="flex find-news-bottom">
			    				<p class="p1">推广引流</p>
			    				<span>09-20</span>
			    				<p class="p2"><i class="iconfont icon-eyes"></i>5355</p>
			    			</div>
			    		</div>
			    	</div>
					</div>
				</van-tab>
			  <van-tab title="贷款" name="b" class="find-news-info">
			  	<div class="salary-tab">
						22222
					</div>
			  </van-tab>
			</van-tabs>  
		</div>
		<!-- navbar -->
		<nav-bar :page="1"></nav-bar>
	</div>
</template>

<script>
import { Tab, TabItem,Sticky,Swiper,Marquee, MarqueeItem} from 'vux';
import navBar from "components/navBar";
export default {

  name: 'find',

  data() {
    return {
    	activeName:'a',
    	activeImg:require('../assets/images/active.png'),
			img_list:[{
				url: 'javascript:',
				img: require('../assets/images/find01.png'),
				// title: '送你一朵fua'
				}, {
				url: 'javascript:',
				img: require('../assets/images/find02.png'),
				// title: '送你一次旅行',
			}],
			listArr: ['全部', '贷款','信用卡'],
      selected_index:0,
      // choosed:'全部',

    };
  },
  methods:{
		goNotice(){

		},
		goPath(val){
			this.$router.push({name:val})
		}
  },
  components: {
    Tab,TabItem,Sticky,Swiper,navBar,Marquee, MarqueeItem
  },
};
</script>

<style lang="css" scoped>
	#find{
		padding: .24rem;
	}
	.find-swiper{
		width:100%;
	}
	.find-menu{
		margin:.4rem 0 .1rem 0;
		justify-content: space-around;
	}
	.find-menu-item{
		text-align: center;
		cursor: pointer;
	}
	.find-menu-item i{
		font-size: .5rem;
		color: #4978c4;
	}
	.find-menu-item p{
		line-height: .8rem;
		font-size: .28rem;
	}
	.hot-item{
		line-height: .88rem;
		justify-content: space-between;
	}
	.hot-item h4{
		position:relative;
		font-size: .32rem;
		margin-left: .2rem;
		font-weight: 400;
	}
	.hot-item h4:before{
		content: '';
		width:4px;
		height: .34rem;
		position: absolute;
		left: -0.2rem;
		top:.26rem;
		background: #4978c4;
		border-radius: .2rem;
	}
	.hot-item p{
		
	}
	.find-hot a img{
		width:100%;
		border-radius: .1rem;
	}
	.find-news-info{
		width: 100%;
		min-height: 18rem;
	}
	.find-news-all{
		padding: .1rem .24rem;
		background: #fff;
	}
	.find-news-item{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #e4e4e4;
		padding: .1rem;
	}
	.find-news-item img{
		width: 2.6rem;
		margin-right: .18rem;
	}
	.find-news-right{
		width: 3.5rem;
	}
	.find-news-right h5{
		font-size: .32rem;
		line-height: .48rem;
		font-weight: 400;
		margin-bottom: .8rem;
	}
	.find-news-bottom{
		justify-content: space-between;
	}
	.find-news-bottom .p1{
		font-size: .24rem;
		padding: .1rem .12rem;
		background: #4978c4;
		color: #fff;
		border-radius: .08rem;
	}
	.find-news-bottom .p2{
		color: #999;
	}
	.find-news-bottom .p2 i{
		margin-right: .08rem;
	}
</style>

