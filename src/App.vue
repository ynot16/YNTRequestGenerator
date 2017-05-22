<template>
  <div id="app">
    <img src="./assets/avatar.png">
    <div>
      <router-link to="/generator">Generator</router-link>
      <router-link to="/result">View Result</router-link>
      <router-link to="/">Go to Hello</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
