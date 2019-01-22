<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div class="player">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EWguUJtesrs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <v-btn large round color="red" class="random-btn white--text ml-0 mb-0 px-3">
                <v-icon class="mr-2">cached</v-icon>
                Random
            </v-btn>
        </v-flex>
        <v-flex xs12 class="my-3 white">
            <v-expansion-panel>
                <v-layout>
                    <h2 class="pa-3">Title</h2>
                </v-layout>
                <v-expansion-panel-content>
                    <div slot="header">
                        Show more
                    </div>
                    <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    mounted(){
        
    }
}
</script>

<style>
    .random-btn{
        letter-spacing: 5px;
    }
    .player iframe{
        width: 100%;
        height: 100%;
    }
</style>
