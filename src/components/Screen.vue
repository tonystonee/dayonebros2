<template>
    <div>
        <div class="screen-container">
            <v-alert 
                width="560" height="315"
                :value="true"
                class="screen darken-2"
                color="blue-grey"
            >
            <v-layout v-if="video" justify-center>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EWguUJtesrs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
            </v-layout>
            <static-screen v-else></static-screen>
            </v-alert>
        </div>
        <v-progress-linear height="8" :indeterminate="true" class="player-progress mt-1 mb-0 pt-1"></v-progress-linear>
    </div>
</template>

<script>
    import StaticScreen from '@/components/StaticScreen'
    export default {
        name: 'Screen',
        props: {
            type: Object,
            default: null,
        },
        components: {
            StaticScreen,
        }
    }
</script>
