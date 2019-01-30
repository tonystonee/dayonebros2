<template>
    <div>
        <v-responsive :aspect-ratio="16/9">
            <v-alert 
                :value="true"
                class="screen darken-2 pa-0 ma-0"
                color="blue-grey"
            >
                <v-alert 
                    transition="scale-transition" origin="center center"
                    v-show="video && url"
                    :value="true"
                    class="pa-0 ma-0"
                    :style="styleObject"
                >
                    <iframe :src="url" frameborder="0" allowfullscreen=""></iframe>
                </v-alert>
                <static-screen v-if="!video"></static-screen>
            </v-alert>
        </v-responsive>
        <v-progress-linear v-if="!video" height="8" :indeterminate="true" class="player-progress mt-1 mb-0 pt-1"></v-progress-linear>
    </div>
</template>

<script>
    import StaticScreen from '@/components/StaticScreen'
    export default {
        name: 'Screen',
        props: {
            video: {
                type: Object,
                default: null,
            },
        },

        components: {
            StaticScreen,
        },
        computed: {
            styleObject() {
                if (this.video){
                    return {
                        backgroundImage: 
                        `url("${this.video.thumbnails.maxres ? 
                            this.video.thumbnails.maxres.url : this.video.thumbnails.medium.url}")`,
                        backgroundSize: 'cover',
                    }
                } 
                return null;
            },
            url(){
                if (this.video){
                    return `https://www.youtube.com/embed/${this.video.id}?rel=0&amp;showinfo=0`;
                }
                return null;
            },
        }
    }
</script>

<style lang="scss">

.v-alert{
    border: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    width: 100%;
    div{
        height:100%;
    }
    iframe{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        height: 100%;
        width: 100%;
    }
}
</style>
