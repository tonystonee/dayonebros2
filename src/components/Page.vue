<template>
<v-container fluid>
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
import axios from 'axios';
import Player from '@/components/Player' 
import TopTenBar from '@/components/TopTenBar' 

export default {
    name: 'Page',
    props: {
        uri: {
            type: String,
            required: true,
        },
    },
    data(){
        return {
            currentVideo: null,
            videos: null,
            topTen: null,
            panel: [false],
            activeVideo: 0,
        };
    },
    watch:{
        uri:{
            handler(value){
                this.getVideos(value)
            },
            immediate: true,
        },
    },
    components: {
        Player,
        TopTenBar,
    },
    methods: {
        $_selectFrom(lowerValue, upperValue){
            var choices = upperValue-lowerValue + 1;
            return Math.floor(Math.random() * choices +lowerValue);
        },
        random(){
            // remove active video in top ten
            if(this.activeVideo > -1){
                this.topTen[this.activeVideo].active = false;
                this.activeVideo = -1;
            }

            this.currentVideo = 
            this.videos[this.$_selectFrom(0, this.videos.length-1)];
        },
        getVideos(uri){
            const self = this;
            axios.get(uri)
            .then(function (response) {
                // handle success
                self.videos = response.data.items.map(item => {
                    return {
                        active: false,
                        id: item.id,
                        ...item.snippet
                    };
                });
                console.log(self.videos)
                self.topTen = self.videos.slice(0, 10);
                self.topTen[0].active = true;
                self.currentVideo = self.topTen[0];
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        },
        changeVideo(video, index){
            if(this.activeVideo > -1){
                this.topTen[this.activeVideo].active = false;
            }
            video.active = true;
            this.activeVideo = index;

            this.currentVideo = video;
        },
    },
}
</script>
