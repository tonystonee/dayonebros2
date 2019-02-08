
<template>
<div>
    <v-expand-transition>
        <v-card class="top-ten" v-if="videoList">
            <v-toolbar color="barColor" :class="darken" class="white--text">
                <v-toolbar-title>Top 10 
                    <span v-if="category">in {{category}}</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-icon color="white">whatshot</v-icon>
            </v-toolbar>

            <v-list class="pt-0" two-line>
                <template  v-for="(item, index) in videoList">
                    <v-tooltip hover :key="index" left>
                        <div slot="activator">
                            <v-list-tile
                                :key="item.title"
                                class="py-2 px-0"
                                @click="selectVideo(item, index)"
                                :class="{
                                    blue: item.active,
                                    'lighten-5': item.active,
                                }"
                            >

                                <img class="mr-2" :src="item.thumbnails.medium.url" alt="">

                                <v-list-tile-content>
                                    <v-list-tile-title class="body-2">{{item.title}}</v-list-tile-title>
                                    <v-list-tile-sub-title class="caption">{{item.channelTitle}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </div>
                        <span>
                            <h3 class="subtitle">
                                {{item.title}}
                            </h3>
                        </span>
                    </v-tooltip>
                </template>
            </v-list>
        </v-card>
    </v-expand-transition>
    <v-card v-if="!videoList">
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
    import Category from '@/mixins/category'
    export default {
        mixins: [Category],
        props: {
            videoList: {
                type: Array,
                default: null,
            },
            activeVideo: {
                type: Number,
                required: true,
            },
        },
        methods: {
            selectVideo(item, index){
                this.$emit('selectVideo', item, index);
            },
        },
    }
</script>
 <style lang="scss">
    .top-ten{
       .v-list__tile {
            align-items: flex-start;
            height: auto;
            padding-left: 10px;
            padding-right: 10px;
            img{
                width: 20%;
                min-width: 100px;
            }
            .v-list__tile__content{
                justify-content: flex-start;
            }
        }
        [role="listitem"]{
            cursor: pointer;
        }
    }
 </style>
 