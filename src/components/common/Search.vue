<template>
  <div class="search">
    <div class="left-part">
      <img class="logo search" src="@/assets/search.png" />
      <mt-field v-model="value" placeholder="神庙爱好者"></mt-field>
      <img class="logo scan" src="@/assets/scan.png" />
    </div>
    <div style="width:12%;">
      <img style="width:26px;" src="@/assets/email.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search .left-part {
  width: 85%;
  position: relative;
}
.search .left-part .logo {
  z-index: 100;
  position: absolute;
  top: 8px;
  width: 20px;
}
.search .left-part .search {
  left: 12px;
}
.search .left-part .scan {
  right: 12px;
}
.search .mint-cell {
  min-height: 36px;
  border-radius: 30px;
  background-color: #f5f5f5;
}
.search input {
  padding-left: 30px;
  padding-right: 25px;
  background-color: #f5f5f5;
}
</style>