<template>
  <div class="moment">
    <div class="head-part">
      <img class="profile" src="@/assets/profile15.png" />
      <span>{{data.userName}}</span>
      <img class="profile" src="@/assets/more.png" />
    </div>
    <div class="content"></div>
    <div class="foot-part"></div>
  </div>
</template>

<script>
export default {
  name: "Moment",
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          id: "8357927359238259", //固有id
          title: "测试标题巴啦啦", //随机长度为在8到20内的汉字字符串
          content: "",
          tag: "今天过得怎么样", //随机长度为2 到 6 的汉字
          userName: "巴啦啦能量"
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.profile {
  width: 32px;
}
.moment .head-part{
  display: block;
}
</style>