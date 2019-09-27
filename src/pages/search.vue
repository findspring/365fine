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
			<div class="search-nothing">
				
			</div>
			<div class="search-credit">
				<h3>信用卡产品</h3>
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
	    	</div><div class="loan-item clearfix">
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
			<div class="search-loan">
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
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'search',
  data() {
    return {
			value:'',
    };
  },
  methods:{
  	onSearch(){

  	},
  }
};
</script>

<style lang="css" scoped>
	.search-loan h3,.search-credit h3{
		line-height: 1rem;
		font-size: .36rem;
		font-weight: 400;
	}
	.loan-item{
		width: 100%;
		background: #fff;
		border-radius: .1rem;
		overflow: hidden;
		padding: .3rem .2rem .2rem .2rem;
		margin-bottom: .2rem;
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
