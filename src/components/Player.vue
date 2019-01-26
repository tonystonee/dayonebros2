<template>
<div>
    <div class="player">
        <div class="screen-container">
            <v-alert 
                width="560" height="315"
                :value="true"
                class="screen darken-2"
                color="blue-grey"
            >
            <static-screen></static-screen>
                <!-- <v-layout justify-center>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EWguUJtesrs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                </v-layout> -->
            </v-alert>
        </div>
        <v-progress-linear height="8" :indeterminate="true" class="player-progress mt-1 mb-0 pt-1"></v-progress-linear>
    </div>
    <v-tooltip top  >
        <v-btn slot="activator" large round color="red" class="random-btn white--text ml-0 mt-3 px-3">
            <v-icon class="mr-2">cached</v-icon>
            Random
        </v-btn>
        <span>Fetch a random video</span>
    </v-tooltip>
    <div class="my-3 white">
        <v-expansion-panel
            v-model="panel"
            expand
        >
            <v-layout>
                <h2 class="pa-3">Title</h2>
            </v-layout>
            <v-expansion-panel-content>
                <div slot="header" class="font-weight-bold">
                    <span v-if="!panel[0]">Show More</span>
                    <span v-else>Close 
                        <v-icon small right>close</v-icon>
                    </span>
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
</div>
</template>

<script>
    import StaticScreen from '@/components/StaticScreen'
    export default {
        name: 'Player',
        data(){
            return {
                panel: [false],
            };
        },
        components: {
            StaticScreen,
        },
    }
</script>

<style lang="scss">
    .random-btn{
        letter-spacing: 5px;
    }
    .player {
        .screen-container{
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 51%;
            .screen{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0; top: 0;
            }
        }
        .screen{
            width: 100%;
            height: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            iframe{
                display: block;
                height: 100%;
                max-width: 100%;
            }
        }
        .player-progress{
            border-bottom-left-radius:2px;
            border-bottom-right-radius:2px;
        }
}
</style>
