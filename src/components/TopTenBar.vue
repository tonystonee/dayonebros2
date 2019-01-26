<template>
    <v-card class="top-ten">
        <v-toolbar
        color="red"
        class="white--text"
        dense
        >   
            <h2 class="headline">Top 10</h2>
            <v-spacer></v-spacer>
            <v-icon color="white">whatshot</v-icon>
        </v-toolbar>
        <div class="white px-2 pt-3 pb-4">
            <v-card hover flat>
                <v-layout row wrap class="py-1 px-2">
                    <v-flex xs4>
                        <v-img src="https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg"></v-img>
                    </v-flex>
                    <v-flex  xs8 class="px-3">
                        <h3 class="title">Title</h3>
                        <!-- <p>lore</p> -->
                    </v-flex>
                </v-layout>
            </v-card>
        </div>
        <!-- <v-layout class="white pa-3" justify-center>
            <v-card>
                <v-layout row wrap>
                    <v-flex xs4>
                        <v-img src="https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg"></v-img>
                    </v-flex>
                    <v-flex  xs8 class="px-3">
                        <h3 class="title">Title</h3>
                        <p>lore</p>
                    </v-flex>
                </v-layout>
            </v-card>
            <v-progress-circular
                class="py-5"
                indeterminate
                color="primary"
            ></v-progress-circular>
        </v-layout> -->
    </v-card>
</template>

<script>
export default {
    name: 'TopTenbar',
}
</script>
 <style lang="scss">
    .top-ten{
        .v-card--hover:hover {
            box-shadow: 
                0px 5px 5px -3px rgba(0,0,0,0.2), 
                0px 8px 10px 1px rgba(0,0,0,0.14), 
                0px 3px 14px 2px rgba(0,0,0,0.12) !important;
        }
    }
 </style>
 