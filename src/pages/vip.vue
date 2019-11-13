<template>
	<div class="pd24">
		<div class="vip-banner">
			<img :src="activeImg" alt="">
		</div>
		<div class="vip-main">
			<div class="hot-item flex">
				<h4>VIP优势</h4>
			</div>
			<div class="vip-goods">
				<p>1.办理信用卡返利比普通会员多30%佣金</p>
				<p>2.推荐他人成功办理佣金比普通会员多30%</p>
				<p>3.推荐他人办理vip 比普通会员佣金多30%</p>
			</div>
			<div class="hot-item flex">
				<h4>VIP费用</h4>
			</div>
			<div class="vip-fee flex">
				<h4>VIP终身会员卡</h4>
				<div>
					<small>¥</small><b>199</b>
				</div>
				<p>有效期：永久有效</p>
			</div>
		</div>
		<div class="common-fixed">
			<div class="vip-btn" @click="getApiData">立即购买</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'vip',

  data() {
    return {
			activeImg:require('../assets/images/active.png'),

    };
  },
  mounted(){
  	this.$wechat.onMenuShareTimeline({
      title: 'hello VUX'
    })
  },
  methods:{
  	getApiData(){
  		let params = {};
			params.Invite_id = '';
  		this.$http({
        method: "get",
        url: "/user/profile/wechat_buyvip",
        data: this.$qs.stringify(params)
      }).then((res) => {
        let result = res.data.data;
        this.buyVip(result);
      }).catch((err) => {});
  	},
  	buyVip(data){				
  		let vm = this;
  		if (typeof WeixinJSBridge == "undefined"){
		    if( document.addEventListener ){
		      document.addEventListener('WeixinJSBridgeReady', vm.jsApiCall(data), false);
		    }else if (document.attachEvent){
		      document.attachEvent('WeixinJSBridgeReady', vm.jsApiCall(data)); 
		      document.attachEvent('onWeixinJSBridgeReady', vm.jsApiCall(data));
		    }
			}else{
			  vm.jsApiCall(data);
			}
  	},
  	jsApiCall(data){
			WeixinJSBridge.invoke(
				'getBrandWCPayRequest',
				data,
				function(res){
					if(res.err_msg == "get_brand_wcpay_request:ok" ){
						// this.$toast({position:'top',message:'支付成功后江自动跳转到我的页面',duration: 500,});
						this.$router.push({path:'mine'})
					}
					// WeixinJSBridge.log(res.err_msg);
					// alert(res.err_code+res.err_desc+res.err_msg);
				}
			);
		},

  }
};
</script>

<style lang="css" scoped>
	.vip-banner img{
		width: 100%;
		border-radius: .08rem;
	}
	.vip-main{
		background: #fff;
		margin-top: .24rem;
		border-radius: .08rem;
		padding: .1rem .2rem .4rem .2rem;
	}
	.vip-goods p{
		line-height: .48rem;
		padding-left: .24rem;
	}
	.vip-fee{
		width:6rem;
		height: 2.6rem;
		background: #f2d97c;
		margin:.2rem auto;
		text-align: center;
		justify-content: center;
		flex-direction: column;
		border-radius: .08rem;
	}
	.vip-fee h4{
		font-size: .32rem;
		margin-bottom: .24rem;
	}
	.vip-fee small{
		font-size: .3rem;
		margin-right: .1rem;
	}
	.vip-fee b{
		font-size: .6rem;
	}
	.vip-fee p{
		margin-top: .24rem;
		font-size: .24rem;
	}
	.common-fixed{
		height: auto;
		justify-content: center;
	}
	.vip-btn{
		color: #333;
		height: .8rem;
		font-size: .32rem;
		font-weight: 700;
		width: 100%;
		background: #f2d97c;
	}
</style>
