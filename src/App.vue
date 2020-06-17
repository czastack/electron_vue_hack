<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}
body {
  margin: 0;
}

#app {
  height: 100%;
}

.flex-grow-1 {
  flex-grow: 1;
}
</style>
