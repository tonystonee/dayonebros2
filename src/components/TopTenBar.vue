
<template>
    <v-card class="top-ten">
        <v-toolbar color="red" class="white--text">
            <v-toolbar-title>Top 10</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-icon color="white">whatshot</v-icon>
        </v-toolbar>

        <v-list two-line>
            <template v-for="(item, index) in items">
            <v-subheader
                v-if="item.header"
                :key="item.header"
            >
            </v-subheader>

            <v-divider
                v-else-if="item.divider"
                :inset="item.inset"
                :key="index"
            ></v-divider>

            <v-list-tile
                v-else
                :key="item.title"
                class="pa-2"
            >
                <v-img min-width="100px" left class="mr-2" :src="item.thumbnail"/>

                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            </template>
        </v-list>
    </v-card>
</template>
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


<script>
  export default {
    data () {
      return {
        items: [
          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
        ]
      }
    }
  }
</script>
 <style lang="scss">
    .top-ten{
        .v-list--two-line .v-list__tile {
            height: auto;
        }
    }
 </style>
 