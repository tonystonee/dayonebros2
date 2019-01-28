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
                        v-if="video"
                        :value="true"
                        class="darken-2 pa-0 ma-0"
                        color="blue-grey"
                    >
                    <iframe :src="url" frameborder="0" allowfullscreen=""></iframe>
                    </v-alert>
                    <static-screen v-else></static-screen>
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
        computed: {
            url(){
                return `https://www.youtube.com/embed/${this.video.id}?rel=0&amp;showinfo=0`;
            }
        },
        components: {
            StaticScreen,
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
