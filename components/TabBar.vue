<template>
  <div class="tabBar">
    <mu-container style="width:100%;">
      <mu-bottom-nav :value="bottomNav" >
        <mu-bottom-nav-item value="index" title="首页" icon="ondemand_video" to="/"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="home" title="home" icon="music_note" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="Books" icon="books" to="/books"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo" to="/pictures"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
import  '~/plugins/muse-ui';
export default {
  data(){
    return {
      bottomNav: 'index'
    }
  },
  created() {
        this.fetchData();
   },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
         fetchData () {
            if (this.$route.path === "/") {
                this.bottomNav = "index"
            }else if (this.$route.path === "/home") {
                this.bottomNav = "home"
            }else if (this.$route.path === "/books") {
                this.bottomNav = "books"
            }else if (this.$route.path === "/pictures") {
                this.bottomNav = "pictures"
            }
        }
    },
 }
</script>
<style lang="less" scoped>
  .tabBar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
  }
  a:hover{
    text-decoration: none !important;
  }
</style>
