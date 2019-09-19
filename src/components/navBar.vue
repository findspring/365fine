<template>
	<div class="navBar">
		<ul class="nav">
	    <li v-for="(item,index)  in navArr" :style="item.hide?'display:none':''">
	    	<div @click="goNav(item.url,index)" :class="{active:index===page}" >
	      <!-- <router-link :to="{path:item.url}"> -->
	        <i class="iconfont" :class="item.iconClass"></i>
	        <span>{{ item.title }}</span>
	      <!-- </router-link> -->
	      </div>
	    </li>
	  </ul>
	</div>
</template>
<script>
export default {
  name: 'navBar',
  data () {
    return {
    	navArr:[
    		{
    			title: "推广",
    		 	url: "/index",
    		 	iconClass: "icon-tuiguang"
    		},
    		{
    			title: "发现",
    		 	url: "/members",
    		 	iconClass: "icon-faxian"
    		},
    		{
    			title: "订单",
    		 	url: "/visitors",
    		 	iconClass: "icon-dingdan"
    		},
    		{
    			title: "我的",
    		 	url: "/mine",
    		 	iconClass: "icon-wode"
    		},
    	]
    }
  },
  props:['page'],
  mounted(){
    // let role = localStorage.getItem("role")
    // if(role == 'property'){
    //   this.navArr = this.arr2;
    // }else if(role == 'owner'){
    //   this.navArr = this.arr;
    // }else{
    //   this.navArr = this.arr;
    // }
  },
  methods:{
  	goNav(url,index){
  		if(index == this.page){
  			return;
  		}else{
  			this.$router.push({path:''+url});
  		}  		
  	}
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
  .navBar
    width 100%    
    padding-top 1rem
		.nav
			width 100%
			height 1rem
			// border-top 1px solid #ccc
			box-shadow :1px 4px 5px #666
			background-color #f5f5f5
			position fixed
			left 0px
			bottom 0px
			display flex
			z-index 99
			li
				display flex
				flex 1          
				div
					display flex
					flex 1
					flex-direction column
					align-items center
					justify-content center
					i
						font-size .4rem
					span
						font-size .2rem
						margin-top .08rem									
				.active
					color #4978c4
  				
</style>