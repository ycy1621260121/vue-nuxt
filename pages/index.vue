<template>
  <div>
    <Menu/>
    <List v-bind:hotList= "data.data"/>
   <!-- <nuxt-link :to="{ name: 'home'}">
      home 页面
    </nuxt-link> -->
  </div>
</template>

<script>
import Menu from "~/components/menu.vue";
import List from "~/components/list.vue";
import axios from "~/plugins/axios";
import { mapState, mapActions} from "vuex";
export default {
  components: {
    Menu,
    List
  },
  computed: {
    ...mapState({
      hotData: (state) => state.fileStore.data
    })
  },
  async asyncData({params,store}){
  	//head信息
      let res = await axios(`/api/getRed`);
        return {
        	data: res.data
        }
  },
  mounted() {
    //隐藏显示浏览器Network接口， 在/fileStore/action.js
    //this.$store.dispatch('getHotFile');
  },
  methods: {
  }
};
</script>
