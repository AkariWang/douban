<template>
  <mt-tabbar v-model="selected" class="footer">
    <mt-tab-item id="index">
      <img slot="icon" src="@/assets/index.png" />
      首页
    </mt-tab-item>
    <mt-tab-item id="media">
      <img slot="icon" src="@/assets/media.png" />
      书影音
    </mt-tab-item>
    <mt-tab-item id="moment">
      <img slot="icon" src="@/assets/moment.png" />
      小组
    </mt-tab-item>
    <mt-tab-item id="market">
      <img slot="icon" src="@/assets/market.png" />
      市集
    </mt-tab-item>
    <mt-tab-item id="me">
      <img slot="icon" src="@/assets/me.png" />
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: "index"
    };
  },
  watch: {
    selected: {
      handler(newValue) {
        switch (newValue) {
          case "index":
            break;
          case "media":
            break;
          case "moment":
            break;
          case "market":
            break;
          case "me":
            break;
        }
      }
    }
  }
};
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #55d583 !important;
}
</style>