<template>
<div>
    <div class="player">
        <screen :video="video"/>
    </div>

    <v-tooltip top  >
        <v-btn @click="$emit('random')" slot="activator" large round color="barColor" :class="darken" class="random-btn white--text ml-0 mt-3 px-3">
            <v-icon class="mr-2">cached</v-icon>
            Random
        </v-btn>
        <span>
            Fetch a random <span class="text-lowercase" v-if="category">{{category}}</span> video 
        </span>
    </v-tooltip>

    <div class="my-3 white">
        <video-details :video="video"></video-details>
    </div>
</div>
</template>

<script>
    import Screen from '@/components/Screen'
    import VideoDetails from '@/components/VideoDetails'
    import Category from '@/mixins/category'
    export default {
        name: 'Player',
        mixins: [Category],
        props: {
            video: {
                type: Object,
                default: null,
            },
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
        .player-progress{
            border-bottom-left-radius:2px;
            border-bottom-right-radius:2px;
        }
}
</style>
