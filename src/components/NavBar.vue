<template>
  <nav class="nav">
    <router-link to="/">v-if / v-else-if / v-else</router-link> |
    <router-link to="/vshow">v-show</router-link> |
    <router-link to="/vfor">v-for</router-link> |
    <router-link to="/vbindkey">v-bind:key</router-link>
  </nav>
</template>

<style scoped>
.nav {
  background: #333;
  padding: 10px;
}
a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  color: yellow;
}
</style>
