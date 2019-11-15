<template>
	<div class="news pd24 bgf">
		<h4>{{title}}</h4>
		<h5>{{time}}</h5>
		<div v-html="content"></div>
	</div>
</template>

<script>
export default {

  name: 'news',

  data() {
    return {
			title:'',
			time:'',
			content:'',
    };
  },
  mounted(){
		this.getNewsDatas(this.$route.query.id);
  },
  methods:{
		getNewsDatas(id){
			this.$http({
        method: "get",
        url: "/wechat/find/articledetail?id="+id,
      }).then((res) => {
        let result = res.data.data.detail;
        this.title = result.post_title;
        this.time = result.create_time;
        this.content = result.post_content;
      }).catch((err) => {});
		}
  },
};
</script>

<style lang="css" scoped>
	.news{}
	.news h4{
		line-height: .88rem;
		font-size: .32rem;
	}
	.news h5{
		font-size: .28rem;
		color: #666;
		line-height: 1;
		padding-bottom: .32rem;
	}
</style>
