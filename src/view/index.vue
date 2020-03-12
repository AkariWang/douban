<template>
  <div class="index">
    <Top :bgColor="$config.theme">
      <Search />
    </Top>
    <mt-navbar v-model="selected" style="margin:0 auto;width:50%;">
      <mt-tab-item id="1">动态</mt-tab-item>
      <mt-tab-item id="2">推荐</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-swipe :auto="0" style="height:200px;margin:50px auto;">
          <mt-swipe-item v-for="item in [1,2,3,4,5]" :key="item">{{item}}</mt-swipe-item>
        </mt-swipe>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div>
          <moment />
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Top from "_c/common/Top";
import Search from "_c/common/Search";
import Moment from "_c/common/Moment";
import { queryRecommendList } from "@/api/api";
export default {
  name: "Index",
  components: {
    Moment,
    Search,
    Top
  },
  data() {
    return {
      selected: "1"
    };
  },
  created() {
    this.queryRecommendList();
  },
  methods: {
    queryRecommendList() {
      queryRecommendList().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #55d583;
  color: #55d583;
}
.index .mint-tab-item-label {
  font-size: 16px;
}
</style>