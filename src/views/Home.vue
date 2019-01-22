<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 md8 :class="{'pr-4': $vuetify.breakpoint.mdAndUp}">
            <div class="player">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EWguUJtesrs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <v-btn large round color="red" class="random-btn white--text ml-0 mt-3 px-3">
                <v-icon class="mr-2">cached</v-icon>
                Random
            </v-btn>
            <div class="my-3 white">
                <v-expansion-panel>
                    <v-layout>
                        <h2 class="pa-3">Title</h2>
                    </v-layout>
                    <v-expansion-panel-content>
                        <div slot="header">
                            Show more
                        </div>
                        <v-card>
                            <v-card-text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </div>
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
  import Player from '@/components/Player' 
  export default {
    data(){
        return {
            videos: null,
        };
    },
    components:{
      Player,
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
        var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyA2surjYpInK_ft0gWD0R__XQ05zbaptCQ';
        this.getVideos(url);
    },
  }
</script>
