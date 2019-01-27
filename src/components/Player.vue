<template>
<div>
    <div class="player">
        <screen/>
    </div>

    <v-tooltip top  >
        <v-btn slot="activator" large round color="red" class="random-btn white--text ml-0 mt-3 px-3">
            <v-icon class="mr-2">cached</v-icon>
            Random
        </v-btn>
        <span>Fetch a random video</span>
    </v-tooltip>

    <div class="my-3 white">
        <video-details></video-details>
    </div>
</div>
</template>

<script>
    import Screen from '@/components/Screen'
    import VideoDetails from '@/components/VideoDetails'
    export default {
        name: 'Player',
        data(){
            return {
                panel: [false],
            };
        },
        components: {
            Screen,
            VideoDetails,
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
