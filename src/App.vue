<template>
  <films-navbar/>
</template>

<script>

import FilmsNavbar from "@/components/FilmsNavbar";

export default {
  name: 'App',
  components: {
    FilmsNavbar
  }
}
</script>

<style>
:root{
  --active-color: #2D8984;
  --nonact-accent-color: #666666;
  --background-color: #241B2C;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body{
  background-color: var(--background-color);
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.page-content{
  margin-left: 15%;
  margin-right: 15%;
}
</style>
