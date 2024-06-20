<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

  <header>

    <h1 class="text-center mb-4">Nutri BR</h1>
  </header>
  <div class="d-flex justify-content-center align-items-center mt-5" >
  <div class="spinner-border " v-if="loading"> 
</div>
</div>
  <div class="container mt-4" style="width:800px">
<article class="post mt-4 card" v-for="posts in nutri" :key="posts.id">
  <h2 class="text-center mb-2 mt-2">{{posts.titulo }}</h2>
<img class="mt-3" :src="posts.capa" >
<span class="categoria"> {{posts.categoria }}</span>
<p>{{posts.subtitulo }}</p>
<a href="#" class="btn btn-outline-primary"
       style="color: #DE6D00; border-color: #DE6D00; font-size: 18px;"
       onmouseover="this.style.backgroundColor='#DE6D00'; this.style.color='white';"
       onmouseout="this.style.backgroundColor=''; this.style.color='#DE6D00';" > Acessar post</a>
</article>
</div>

</template>

<style>
header{
  background-color: #DE6D00;

  height: 80px;
  width: 100%;
  align-items: center;
  color:white;

}
h1{
  font-size: 45px;
}

img{
  width: 100%;
  align-self: center;
  margin: 0;
  border-radius: 3px;
}
a{
  width: 100%;
  height: 60px;

}

footer{
  background-color:#DE6D00;
  height: 80px;
  width: 100%;
  align-items: center;
  color:white;
}
.post{
  display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #5555;
   color:white;
    border-radius: 7px;
    margin: 8px;
    padding: 10px;

}
.categoria{
  padding-top: 15px;
  font-weight: bold;
}
.spinner-border{
  color:#DE6D00;
}
</style>
<script>
import api from './services/api';
export default {
  name: 'App',
  data() {
    return {
      nutri: [],
      loading:true
    }
  },

  async created() {
    const response = await api.get('https://sujeitoprogramador.com/rn-api/?api=posts');
    console.log(response)
    this.nutri = response.data;
    this.loading=false;
  }

}
</script>