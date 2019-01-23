<template>
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
        <v-layout class="white pa-5" justify-center>
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    
}
</script>
