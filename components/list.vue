<template>
    <div class="list">
        <div class="movies-panel">
            <div class="movies-sorter">
                <div class="cat-sorter">
                    <ul>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 1 }" style="cursor: default" @click="toparent('')">
                                <span class="sort-control sort-radio sort-radio-checked"></span>
                                <span class="sort-control-label">按热门排序</span>
                            </span>
                        </li>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 2 }" data-href="?sortId=rt" @click="toparent('rt')">
                                <span class="sort-control sort-radio"></span>
                                <span class="sort-control-label">按时间排序</span>
                            </span>
                        </li>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 3 }" data-href="?sortId=mk" @click="toparent('mk')">
                                <span class="sort-control sort-radio"></span>
                                <span class="sort-control-label">按评价排序</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="play-sorter">
                    <span class="sort-control-group" data-act="isplay-click" data-val="{isplay:1}" data-href="?isPlay=1" @click="toparent('')">
                        <span class="sort-control sort-checkbox"></span>
                        <span class="sort-control-label">可播放</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="movies-list">
            <dl class="movie-list">
                <dd v-for="(item, index) in hotList.hot" :key="index">
                    <div class="movie-item">
                        <a :href="item.videourl" target="_blank">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img :src="editeImg(item.img)">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>
                        <div class="channel-detail-orange">
                            <i class="integer">{{item.mk}}</i>
                            <i class="fraction">分</i>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="后来的我们">
                        <a :href="item.videourl" target="_blank">{{item.nm}}</a>
                    </div>
                    <div class="channel-detail movie-item-desc">
                      {{item.desc}}
                    </div>
                    <div class="channel-detail movie-item-desc">
                      上映时间:{{item.rt}}
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
 export default {
    props: ['hotList'],
    methods: {
        editeImg(url) {
            return url.replace('w.h/','')+'@214w_297h_1e_1c'
        },
        toparent(val){
          this.$emit('getChild',val)
        }
    }
 }
</script>

<style lang="less" scoped>
.list {
  width: 1120px;
  margin: auto;
  padding-bottom: 20px;
  overflow: hidden;
  .movies-panel {
    margin-top: 40px;
    .movies-sorter {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      li {
        display: inline-block;
        height: 16px;
        line-height: 18px;
        margin-right: 30px;
      }
      .cat-sorter {
        float: left;
        padding-left: 2px;
        .sort-control-group {
          cursor: pointer;
          line-height: 16px;
          .sort-control {
            display: inline-block;
            vertical-align: top;
            width: 16px;
            height: 16px;
            margin-right: 2px;
          }
          .sort-radio-checked {

          }
          .sort-control-label {
            font-size: 14px;
            vertical-align: top;
          }
          .sort-radio {

          }
        }
      }
    }
  }
  .movies-list {
      overflow: hidden;
    margin-top: 20px;
    dl {
      display: block;
      margin: -29px 0 20px -25px;
    }
    .movie-list {
      dd {
         margin: 30px 0 0 30px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        .movie-item {
          position: relative;
          border: 1px solid #efefef;
          margin: -1px;
        }
        .channel-detail {
          width: 160px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
          a {
            color: #333;
          }
        }
        .movie-poster {
          background-color: #fcfcfc;
          width: 160px;
          height: 220px;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .poster-default {
          top: 50%;
          left: 50%;
          width: 68px;
          height: 62px;
          margin-top: -31px;
          margin-left: -34px;
          a {
            color: #333;
          }
        }
        .channel-detail-orange {
          position: absolute;
          left: 5px;
          bottom: 5px;
          color: #ffb400;
          .integer {
            font-size: 18px;
          }
          .fraction {
            font-size: 14px;
          }
        }
        .movie-item-desc{
          font-size: 14px;
          font-style: normal;
          color: #999988;
        }
        .channel-action-sale {
          background-color: #f34d41;
        }
        .channel-action {
          position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 0 3px;
          height: 18px;
          line-height: 18px;
          border-radius: 1px;
          a {
            color: #fff;
            font-size: 12px;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>
