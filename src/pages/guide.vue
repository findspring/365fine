<template>
	<div class="pd24">
		<div class="hot-item flex">
			<h4>新手指南</h4>
		</div>
		<div class="ask-main">
			<van-collapse v-model="activeName" accordion>
				<van-collapse-item :title="item.post_title" :name="index" v-for="(item,index) in askArticles" :key="index"><span v-html="item.post_content"></span></van-collapse-item>
			  <!-- <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
			  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
			  <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
			</van-collapse>
		</div>
	</div>
</template>

<script>
export default {

  name: 'guide',

  data() {
    return {
			activeName: '1',
			askArticles:[],
    };
  },
  mounted(){
		this.getGuideDatas();
  },
  methods:{
		getGuideDatas(){
			this.$http({
        method: "get",
        url: "/wechat/find/ask",
      }).then((res) => {
        let result = res.data.data;
        this.askArticles = result.ask_articles;
      }).catch((err) => {});
		}
  },
};
</script>

<style lang="css" scoped>
	.ask-main .van-cell{
		color:#666;
	}
	.hot-item{
		line-height: .88rem;
		justify-content: space-between;
	}
	.hot-item h4{
		position:relative;
		font-size: .32rem;
		margin-left: .2rem;
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
</style>
