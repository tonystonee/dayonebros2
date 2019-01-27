<template>
  <v-app>
    <navbar/>
    <v-content class="main-wrapper">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.main-wrapper{
  background: rgb(250,250,250);
  background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(189,189,189,1) 39%, rgba(238,238,238,1) 100%);
}
</style>
