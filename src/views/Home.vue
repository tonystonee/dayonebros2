<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md8 :class="{'pr-4': $vuetify.breakpoint.mdAndUp}">
          <player @random="random" :video="currentVideo"/>  
        </v-flex>
        <v-flex xs12 md4>
            <top-ten-bar @selectVideo="changeVideo" :activeVideo="activeVideo" :videoList="topTen"/>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import mixin from '@/mixins/'
    export default {
        name: 'Home',
        mixins: [mixin],
        data(){
            return {
                maxResults: 50,
            };
        },
        computed: {
            url(){
                return `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${this.maxResults}&key=${this.$store.state.key}`;
            },
        },
    }
</script>
