
<template>
<div>
    <v-card class="top-ten" v-if="videoList">
        <v-toolbar color="red" class="white--text">
            <v-toolbar-title>Top 10</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-icon color="white">whatshot</v-icon>
        </v-toolbar>

        <v-list two-line>
            <template  v-for="(item, index) in items">
                <v-tooltip hover :key="index" left>
                    <div slot="activator">
                        <v-list-tile
                            :key="item.title"
                            class="pa-2"
                        >
                            <v-img min-width="100px" left class="mr-2" :src="item.thumbnail"/>

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </div>
                    <span>
                        <h3 class="subtitle">
                            {{item.title}}
                        </h3>
                        <p class="caption">
                            {{item.subtitle}}
                        </p>
                    </span>
                </v-tooltip>
            </template>
        </v-list>
    </v-card>
    <v-card v-else>
        <v-layout class="white pa-3" justify-center>
                <v-progress-circular
                    class="py-5"
                    indeterminate
                    color="primary"
                ></v-progress-circular>
        </v-layout>
    </v-card>
</div>
</template>

<script>
  export default {
    props: {
        videoList: {
            type: Array,
            default: null,
        },
    },
    data () {
      return {
        items: [
          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },          {
            thumbnail: 'https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg',
            title: 'Brunch this weekend?',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
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
        [role="listitem"]{
            cursor: pointer;
        }
    }
 </style>
 