<template>
  <div class="header" :style="{background:bgColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    bgColor: {
      default: "#ffffff",
      type: String
    }
  }
};
</script>

<style>
.header {
  height: 52px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>