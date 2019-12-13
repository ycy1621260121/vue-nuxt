<template>
  <div>
    <Menu />
    <List v-bind:hotList="hotData" @getChild="getChildChange" />
    <!-- <nuxt-link :to="{ name: 'home'}">
      home 页面
    </nuxt-link> -->
    <TabBar/>
  </div>
</template>

<script>
import Menu from '~/components/menu.vue';
import TabBar from '~/components/TabBar.vue';
import List from '~/components/list.vue';
import axios from '~/plugins/axios';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    Menu,
    List,
    TabBar
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      hotData: state => state.fileStore.data
    })
  },
  async asyncData({ params, store }) {
    //head信息
    let res = await axios(`/api/getRed`);
    return {
      data: res.data
    };
  },
  async created() {
    //首页数据提交给vuex
    this.$store.commit('getRedData', this.data);
    //console.log("页面加载完毕！");
    let ress = await axios(`http://106.13.69.59:8098/tenctent`);
    console.log(ress);
  },
  mounted() {
    sessionStorage.setItem('nuxtRedData', JSON.stringify(this.data));
    //隐藏显示浏览器Network接口， 在/fileStore/action.js
    //如果需要用到store，请求这个接口，上面的hotList的数据改为'hotData'
    //this.$store.dispatch('getHotFile');
  },
  methods: {
    keysort(data, key, sortType) {
      if (key == 'rt') {
        var dateToTime = function(str) {
          //用/替换日期中的-是为了解决Safari的兼容
          return new Date(str.replace(/-/g, '/')).getTime();
        };

        for (var i = 0; i < data.length; i++) {
          data[i].publishTimeNew = dateToTime(data[i][key]);
        }
        data.sort(function(a, b) {
          return b.publishTimeNew > a.publishTimeNew ? 1 : -1;
        });
      } else {
        data.sort(function(a, b) {
          return sortType ? (b[key] > a[key] ? -1 : 1) : b[key] > a[key] ? 1 : -1;
        });
      }
    },
    getChildChange(val) {
      if (val != '') {
        this.keysort(this.hotData.hot, val, false);
      } else {
        var data = sessionStorage.getItem('nuxtRedData');
        this.$store.commit('getRedData', JSON.parse(data));
      }
    }
  }
};
</script>
