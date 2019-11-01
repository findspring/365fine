<template>
	<div class="withdraw pd24">
		<!-- top -->
		<div class="withdraw-top">
			<ul>
				<li>					
					<b>{{balance.balance}}</b>
					<p>总收入(元)</p>
				</li>
				<li>
					<b>{{balance.total_balance}}</b>
					<p>可提现(元)</p>
				</li>
			</ul>
		</div>
		<!-- input -->
		<van-cell-group>
		  <van-field
		    v-model="moneyNum"
		    type="number"
		    center
		    clearable
		    placeholder="请输入提现金额"
		    @input="inpuChange"
		    @clear="clearNum"
		  >
		    <van-button slot="button" size="small" type="primary" @click="carryAll">全部提现</van-button>
		  </van-field>
		</van-cell-group>
		<!-- bankCard -->
		<div class="bank-card">
			<div class="bank-list flex" v-if="bankinfo">
				<img :src="bankImg" alt="">
				<div>
					<p>{{bankinfo.bankname}}</p>
					<span>{{bankinfo.bankcard}}</span>
				</div>
			</div>
			<van-button round icon="plus" type="default" @click="openDialog" v-else>添加银行卡</van-button>
		</div>
		<!-- btn -->
		<div class="withdraw-btn">
			<van-button round color="#1a91eb" type="info" size="large" :disabled="isDisabled" @click="withdraw">立即提现</van-button>
		</div>
		<!-- dialog -->
		<van-dialog
		  v-model="dialogStatus"
		  :title="dialogTitle"
		  show-cancel-button
		  :beforeClose="beforeClose"
		>
			<div class="dialog-main">
			  <van-field
			    v-model="cardNum"
			    maxlength="18"
			    clearable
			    placeholder="请输入银行卡号"
			  />
			</div>
		</van-dialog>
	</div>
</template>

<script>
export default {

  name: 'withdraw',

  data() {
    return {
    	bankImg:require('../assets/images/bank.png'),
			moneyNum:'',
			isDisabled:true,
			dialogStatus:false,
			cardNum:'',
			dialogTitle:'绑定银行卡',
			balance:{},
			bankinfo:{},
    };
  },
  watch:{
		// moneyNum:{
		// 	handle(newVal,oldVal){
		// 		if(newVal.length){
		// 			console.log(newVal);
		// 			this.isDisabled = false;
		// 		}
		// 	},
		// }
  },
  mounted(){
  	this.getWithDrawDatas();
  },
  methods: {
  	inpuChange(value){
			if(value.length > 0 && this.bankinfo && this.moneyNum >0){
				this.isDisabled = false;
			}
  	},
  	clearNum(){
  		this.isDisabled = true;
  	},
  	carryAll(){
			this.moneyNum = this.balance.total_balance;
			if(this.moneyNum > 0 && this.bankinfo){
				this.isDisabled = false;
			}
  	},
  	goPath(val){
			this.$router.push({path:val})
		},
		withdraw(){
			if(this.moneyNum < 5){
				this.$toast({position:'top',message:'提现金额不能小于5元',duration: 1000,});
				return false;
			}
			if(this.moneyNum > this.balance.balance){
				this.$toast({position:'top',message:'提现金额不能大于总收入',duration: 1000,});
				return false;
			}
			let params = {};
			params.amount = this.moneyNum;
			this.$http({
        method: "post",
        url: "/wechat/finance/carry",
        data: this.$qs.stringify(params)
      }).then((res) => {
        let result = res.data.data;
        this.$toast({type:'success',message:res.data.msg,duration: 1000,});
        this.getWithDrawDatas();
        this.moneyNum = '';
        this.isDisabled = true;
      }).catch((err) => {});
		},
  	getWithDrawDatas(){
			this.$http({
        method: "get",
        url: "/wechat/finance/carry",
      }).then((res) => {
        let result = res.data.data;
        this.balance = result.balance;
        this.bankinfo = result.bankinfo;
      }).catch((err) => {});
		},
		openDialog(){
			this.dialogStatus = true;
  	},
  	beforeClose(action, done){
		  if (action === 'confirm') {
	    	if(this.cardNum){
	    		this.$http({
		        method: "get",
		        url: "/user/profile/wechat_usersetbank?bankcard="+this.cardNum,
		      }).then((res) => {
		      	if(res){
		        	// let result = res.data.data;
	        		this.getWithDrawDatas();
	        		this.moneyNum = '';
							done();
		      	}else{
		      		done(false);
		      	}
		      }).catch((err) => {
		      	done(false);
		      });
	    	}else{
	    		this.$toast({message:'银行卡号不能为空',duration: 500,});
	    		done(false);
	    	}			    
		  } else {
		    done();
		  }
  	},
  }
};
</script>

<style lang="css" scoped>
	.dialog-main{
		padding: .2rem;
	}
	.bank-card{
		margin-top: .4rem;
		text-align: center;
	}
	.withdraw-top{
		margin-bottom: .24rem;
		width: 100%;
		padding: 0 .24rem;
		height: 2rem;
		background: #fff;
		border-radius: 0.12rem;
	}
	.withdraw-top ul{
		overflow: hidden;
		padding: .3rem 0;
	}
	.withdraw-top ul li{
		float:left;
		width: 50%;
		text-align: center;
		border-right: 1px solid #e4e4e4;
	}
	.withdraw-top ul li p{
		font-size: .32rem;
		line-height: .36rem;
		padding-top: .48rem;
	}
	.withdraw-top ul li b{
		line-height: .48rem;
		font-size: .4rem;
	}
	.withdraw-top ul li:last-child{
		border:none;
	}
	.withdraw-btn{
		width: 100%;
		margin-top:.64rem;
		/*height: .96rem;
		line-height: .96rem;
		text-align: center;
		background: #c0c0c0;
		color: #fff;
		font-size: .4rem;
		border-radius: 1rem;*/
	}
	.bank-list{
		padding: .24rem;
		width: 100%;
		height: 1.8rem;
		background: #fff;
		border-radius: .18rem;
	}
	.bank-list div{
		text-align: left;
		margin-left: .48rem;
		line-height: .48rem;
	}
	.bank-list div p{
		font-weight: 700;
	}
</style>
