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
import colors from 'vuetify/lib/util/colors';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data () {
    return {
      //
    }
  },
    watch: {
      $route: {
          handler(){
            this.$vuetify.theme.barColor = this.$route.matched[0].props.default.primary;
          },
          immediate: true,
      },
    }
}
</script>

<style>
a{
    text-decoration: none;
}
.main-wrapper{
  background: rgb(250,250,250);
  background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(189,189,189,1) 39%, rgba(238,238,238,1) 100%);
}
</style>
