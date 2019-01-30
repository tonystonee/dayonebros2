import axios from 'axios';
import Player from '@/components/Player' 
import TopTenBar from '@/components/TopTenBar' 

export default {
    data(){
        return {
            currentVideo: null,
            videos: null,
            topTen: null,
            panel: [false],
            activeVideo: 0,
        };
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
    mounted(){
        //home page reel
        this.getVideos(this.url);
    },
}