<template>
	<div class="pd24 receipts">
		<van-tabs v-model="activeName" sticky color="#1a91eb" title-active-color="#1a91eb">
			<van-tab title="收入记录" name="a">
				<div class="receipts-tab">
					<div class="income-items" v-if="incomeArr.length">
						<div class="income-item" v-for="(item,index) in incomeArr" :key="index">
							<div class="income-top">
								<div class="income-left">
									<p>{{item.description}}</p>
									<span>工资编号：{{item.id}}</span>
								</div>
								<div class="income-right">
									<p>¥{{item.change}}</p>
								</div>
							</div>
							<div class="income-bottom">
								<small>{{item.create_time}}</small>
							</div>	
						</div>
					</div>
					<img :src="noneImg" alt="" v-else>
						
					<!-- <div class="income-item">
						<div class="income-top">
							<div class="income-left">
								<p>22222</p>
								<span>工资编号：xxxxx</span>
							</div>
							<div class="income-right">
								<p>¥0.6</p>
							</div>
						</div>
						<div class="income-bottom">
							<small>2019-10-10 13:00:00</small>
						</div>	
					</div> -->
				</div>
			</van-tab>
		  <van-tab title="提现记录" name="b">
		  	<div class="receipts-tab">
					<div class="carry-items" v-if="carryArr.length">
						<div class="income-item" v-for="(item,index) in carryArr" :key="index">
							<div class="income-top">
								<div class="income-left">
									<!-- <p>{{item.description}}</p> -->
									<span>银行卡号：{{item.bankcard}}</span>
								</div>
								<div class="income-right">
									<p>¥{{item.balance}}</p>
								</div>
							</div>
							<div class="income-bottom">
								<small>{{item.create_time}}</small>
							</div>	
						</div>
					</div>
					<img :src="noneImg" alt="" v-else>
				</div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {

  name: 'receipts',

  data() {
    return {
			activeName:'a',
			incomeArr:[],
			carryArr:[],
			noneImg:require('../assets/images/none.png'),
    };
  },
  mounted(){
  	this.getReceiptDatas();
  },
  methods: {
  	goPath(val){
			this.$router.push({name:val})
		},
  	getReceiptDatas(){
			this.$http({
        method: "get",
        url: "/wechat/finance/index",
      }).then((res) => {
        let result = res.data.data;
        this.incomeArr = result.income;
        this.carryArr = result.carry;
      }).catch((err) => {});
		}
  }
};
</script>

<style lang="css" scoped>
	.receipts-tab{
		/* min-height: 18rem; */
		margin-top: .24rem;
	}
	.receipts-tab img{
		margin: 0 auto;
		text-align: center;
		display: block;
	}
	.income-item{
		border-radius: .08rem;		
		padding: .24rem;
		margin-bottom: .2rem;
		background: #fff;
	}
	.income-top{
		line-height: .48rem;
		display: flex;
		justify-content: space-between;
	}
	.income-left p{
		font-size: .32rem;
		color: #000;
	}
	.income-left span{
		color: #666;
	}
	.income-right{
		font-weight: 700;
		font-size: .32rem;
		color:#ff0000;
	}
	.income-bottom small{
		font-size: .24rem;
		color: #999;
		line-height: .48rem;
	}
</style>
