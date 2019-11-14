<template>
	<div class="share">
		<div>
			<div class="share-item flex" v-for="(item,index) in shareArr" :key="index">
				<div class="share-left">
					<van-image
					  width="1rem"
					  height="1rem"
					  fit="cover"
					  :src="item[1]"
					/>
				</div>
				<div class="share-right">
					<div class="share-top flex">
						<div>
							<h4>豆豆钱推广</h4>
							<p>10-16 15:49</p>
						</div>
						<div><van-button :class="'copy'+`${index}`"  round  size="small" color="linear-gradient(to right, #f17e0f, #fbac60)" :data-clipboard-text="item[1]" @click="copy(index)">复制文案</van-button></div>
					</div>
					<div class="share-content">
						<p>5万现金正在路上，燃眉之急就要解决了！维信现在主推豆豆钱！如果你年龄20-50周岁，芝麻分700以上，征信没逾期问题，可放心点链接：</p>
					</div>
				</div>
			</div>
		</div>
			<!-- <div class="share-item flex">
				<div class="share-left">
					<van-image
					  width="1rem"
					  height="1rem"
					  fit="cover"
					  :src="headImg"
					/>
				</div>
				<div class="share-right">
					<div class="share-top flex">
						<div>
							<h4>豆豆钱推广</h4>
							<p>10-16 15:49</p>
						</div>
						<div><van-button class="tag-read"  round  size="small" color="linear-gradient(to right, #f17e0f, #fbac60)" :data-clipboard-text="copyText" @click="copy">复制文案</van-button></div>
					</div>
					<div class="share-content">
						<p>5万现金正在路上，燃眉之急就要解决了！维信现在主推豆豆钱！如果你年龄20-50周岁，芝麻分700以上，征信没逾期问题，可放心点链接：</p>
					</div>
				</div>
			</div> -->
	</div>
</template>

<script>
import Clipboard from 'clipboard';
export default {

  name: 'share',

  data() {
    return {
			headImg:require('../assets/images/share.png'),
			copyText:"这就是你想复制的东东",
			shareArr:[],
    };
  },
  mounted(){
  	let nowId = this.$route.query.id;
		this.getShareDatas(nowId);
  },
  methods:{
  	copy(index){
  		let _this = this;
			var clipboard = new Clipboard('.copy'+index);
      clipboard.on('success', e => {
      	_this.$toast({position:'top',message:'复制成功',duration: 500,});
        // console.log('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
  	},
  	getShareDatas(cardId){
			this.$http({
        method: "get",
        url: "/wechat/creditcard/cardshare?id="+cardId,
      }).then((res) => {
        let result = res.data.data;
        this.shareArr = result.spread_material;
      }).catch((err) => {});
		},
  }
};
</script>

<style lang="css" scoped>
	.share{
		background: #fff;
		min-height: 13.3rem;
		padding: .3rem;
	}
	.share-item{
		width: 100%;
		align-items: flex-start;
	}
	.share-left{
		width: 1rem;
		margin-right: .2rem;
		border-radius: .08rem;
		overflow: hidden;
	}
	.share-right{
		width: 6rem;
	}
	.share-top{
		justify-content: space-between;
	}
	.share-top h4{
		font-size: .32rem;
		line-height: 1.8;
	}
	.share-top p{
		font-size: .24rem;
		line-height: 1.8;
	}
	.share-copy{
		width: 2rem;
		height: .64rem;
		line-height: .64rem;
		text-align: center;
		color: #fff;
		background: #f17e0f;
		border-radius: .4rem;
	}
	.share-content{
		padding-top: .2rem;
		line-height: 1.5;
		text-align: justify;
	}
</style>
