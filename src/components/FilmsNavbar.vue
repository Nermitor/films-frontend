<template>
<div class="films-navbar page-content">
  <div>
    <img :src="image.link" width="45" alt="">
  </div>
  <div>
    <router-link to="/main">Главная</router-link>
  </div>
  <div>
    <router-link to="/news">Новинки</router-link>
  </div>
  <div>
    <router-link to="/serials">Сериалы</router-link>
  </div>
  <div>
    <router-link to="/tops">Топы</router-link>
  </div>

  <div>
    <input type="text" :value="searchQuery" placeholder="Поиск...">
  </div>
</div>
</template>

<script>
export default {
  name: "FilmsNavbar",
  data(){
    return {
      searchQuery: "",
      image:{
        link: require("@/assets/logo.png")
      }
    }
  }
};
</script>

<style scoped>
.films-navbar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;

}

</style>