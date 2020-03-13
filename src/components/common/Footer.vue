<template>
  <mt-tabbar v-model="selected" class="footer">
    <mt-tab-item id="index">
      <img slot="icon" :src="icons.index" />
      首页
    </mt-tab-item>
    <mt-tab-item id="media">
      <img slot="icon" :src="icons.media" />
      书影音
    </mt-tab-item>
    <mt-tab-item id="moment">
      <img slot="icon" :src="icons.moment" />
      小组
    </mt-tab-item>
    <mt-tab-item id="market">
      <img slot="icon" :src="icons.market" />
      市集
    </mt-tab-item>
    <mt-tab-item id="me">
      <img slot="icon" :src="icons.me" />
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: "index",
      icons: {
        index: "/image/index_on.png",
        media: "/image/media.png",
        moment: "/image/moment.png",
        market: "/image/market.png",
        me: "/image/me.png"
      }
    };
  },
  watch: {
    //监听tab切换
    selected: {
      handler(newValue, oldValue) {
        this.icons[oldValue] = `/image/${oldValue}.png`;
        this.icons[newValue] = `/image/${newValue}_on.png`;
        this.$router.push({
          name: newValue
        });
      }
    }
  },
  created() {}
};
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #55d583 !important;
}
</style>