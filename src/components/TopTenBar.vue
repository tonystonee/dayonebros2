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
        <v-layout class="white pa-3" justify-center>
            <v-layout row wrap>
                <v-flex>
                    <v-img src="https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg"></v-img>
                </v-flex>
                <v-flex class="px-3">
                    <h3 class="title">Title</h3>
                    <!-- <p>lore</p> -->
                </v-flex>
            </v-layout>
            <!-- <v-progress-circular
                class="py-5"
                indeterminate
                color="primary"
            ></v-progress-circular> -->
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: 'TopTenbar',
}
</script>
