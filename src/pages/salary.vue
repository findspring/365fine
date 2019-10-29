<template>
	<div class="pd24 salary">
		<van-tabs v-model="activeName" sticky color="#1a91eb" type="card">
			<van-tab title="信用卡" name="a">
				<div class="salary-tab">
					<div class="loan-title flex">
						<p class="li1">产品名称</p>
						<p class="li2">普通用户</p>
						<p class="li3">会员</p>
						<p class="li4">条件</p>
					</div>
					<div class="loan-infos">
						<ul class="flex" v-for="(item,index) in creditlist" :key="index">
							<li class="li1">
								<img :src="'http://www.365qutui.cn/'+item.bank_logo" height="20" alt="">
								<span>{{item.card_name}}</span>
								<p>{{item.commission_check_date}}</p>
							</li>
							<li class="li2">
								<p><span>{{item.member_commission}}</span>/单</p>
							</li>
							<li class="li3">
								<p><span>{{item.vip_commission}}</span>/单</p>
							</li>
							<li class="li4">
								<p>{{item.commission_check_condition}}</p>
							</li>
						</ul>
					</div>
				</div>
			</van-tab>
		  <!-- <van-tab title="信用卡" name="b">
		  	<div class="salary-tab">
					22222
				</div>
		  </van-tab> -->
		</van-tabs>
	</div>
</template>

<script>
export default {

  name: 'salary',

  data() {
    return {
			activeName: 'a',
			creditlist:[],
    };
  },
  mounted(){
		this.getSalaryDatas();
  },
  methods:{
		goPath(val){
			this.$router.push({name:val})
		},
		getSalaryDatas(){
			this.$http({
        method: "get",
        url: "/wechat/find/commissionlist",
      }).then((res) => {
        let result = res.data.data;
        this.creditlist = result.creditlist;
      }).catch((err) => {});
		},
  },
};
</script>

<style lang="css" scoped>
	.salary-tab{
		padding: .24rem;
		background: #fff;
		text-align: center;
		min-height: 18rem;
	}
	.loan-title{
		font-size: .32rem;
		height: .88rem;
		line-height: 1;
		background: #ffe8e8;
	}
	.li1{
		width:35%;
	}
	.li2{
		width:25%;
	}
	.li3{
		width:25%;
	}
	.li4{
		width:15%;
	}
	.li1 p{
	}
	.loan-infos ul{
		padding:.3rem 0;
		border-bottom: 1px solid #e4e4e4;
	}
	.loan-infos .li1 p{
		margin:0 auto;
		margin-top: .08rem;
		width: 60%;
		/*display: inline-block;*/
		color: #fff;
		padding: .08rem .12rem;
		border-radius: .08rem;
		background: #f67572;
	}
	.loan-infos .li2 p span, .loan-infos .li3 p span{
		color:#f67572;
	}
	.loan-infos .li4{
		color:#f67572;
		line-height: .32rem;
	}

</style>
