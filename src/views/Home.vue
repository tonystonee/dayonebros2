<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md8 :class="{'pr-4': $vuetify.breakpoint.mdAndUp}">
          <player :video="currentVideo"/>  
        </v-flex>
        <v-flex xs12 md4>
            <top-ten-bar @selectVideo="changeVideo" :videoList="videos"/>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import axios from 'axios';
    import Player from '@/components/Player' 
    import TopTenBar from '@/components/TopTenBar' 
    export default {
        name: 'Home',
        data(){
            return {
                currentVideo: null,
                videos: null,
                panel: [false],
            };
        },
        components: {
            Player,
            TopTenBar,
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
                    self.videos = response.data.items.map(item => {
                        return {
                            active: false,
                            id: item.id,
                            ...item.snippet
                        };
                    });
                    self.videos[0].active = true;
                    self.currentVideo = self.videos[0];
                    console.log(self.videos);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            },
            changeVideo(video){
                this.currentVideo = video;
            },
        },
        mounted(){
            //home page reel
            this.getVideos(this.url);
        },
    }
</script>
