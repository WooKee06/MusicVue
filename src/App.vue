<template>
  <div class="wrapper">
    <navigation />
    <div class="plages">
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

body {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(@/assets/back.jpg);
  margin: 0;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
.container {
  width: 50vw;
  background-color: #08080899;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 15px;
  height: 505px;
}

h1 {
  margin: 0;
  color: #fff;
  font-size: 23px;
}

.column-20 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

p {
  color: #fff;
  margin: 0;
}
</style>
