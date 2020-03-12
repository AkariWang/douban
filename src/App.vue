<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
body{
  margin: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  padding-top: 52px;
  padding-bottom: 55px;
  box-sizing: border-box;
}
</style>
