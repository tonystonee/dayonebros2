<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md8 :class="{'pr-4': $vuetify.breakpoint.mdAndUp}">
          <player/>  
        </v-flex>
        <v-flex xs12 md4>
            <v-card>
                <v-toolbar
                color="red"
                class="white--text"
                dense
                >   
                <h2 class="headline">Top 10</h2>
                <v-spacer></v-spacer>
                <v-icon color="white">whatshot</v-icon>
                </v-toolbar>
                <div class="white pa-3">
                    dasfsdf
                </div>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import Player from '@/components/Player' 
  export default {
    data(){
        return {
            videos: null,
            panel: [false],
        };
    },
    components: {
      Player,
    },
    computed: {
      url(){
        return `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${this.$store.state.key}`;
      },
    },
    methods: {
        getVideos(url){
            const self = this;
            axios.get(url)
            .then(function (response) {
                // handle success
                self.videos = response.data.items.map(item => item.snippet);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        },
    },
    mounted(){
        //home page reel
        this.getVideos(this.url);
    },
  }
</script>
