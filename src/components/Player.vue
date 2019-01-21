<template>
    <v-layout row wrap>
        <v-flex class="player" shrink xs12>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EWguUJtesrs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
        </v-flex>
        <v-flex xs12 class="my-3 white">
            <div class="pa-4">
                <h2 class="headline font-weight-bold mb-3">Big plans</h2>
                <div class="body-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi consequuntur aspernatur tempora dolores ea et. Doloribus maxime itaque eos et saepe natus praesentium autem impedit distinctio error, neque optio.
                </div>
            </div>
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
    .player iframe{
        width: 100%;
        height: 100%;
    }
</style>
