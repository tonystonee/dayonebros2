<template>
<div class="videoDetails">
    <v-scale-transition>
            <v-expansion-panel v-if="video"
                v-model="panel"
                expand
            >
                <v-layout column class="pt-3 px-3 pb-2">
                    <h2 class="title font-weight-regular">{{video.title}}</h2>
                    <h3 class="subheading grey--text text--darken-3">{{video.channelTitle}}</h3>
                </v-layout>
                <v-expansion-panel-content>
                    <div slot="header" class="font-weight-bold">
                        <span v-if="!panel[0]">Show More</span>
                        <span v-else>Close 
                            <v-icon small right>close</v-icon>
                        </span>
                    </div>
                    <v-card>
                        <v-card-text class="body-1 pt-0">
                            <pre>{{video.description}}</pre>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
    </v-scale-transition>
    <v-layout v-if="!video" class="white pa-3" justify-center>
            <v-progress-circular
                class="py-5"
                indeterminate
                color="primary"
            ></v-progress-circular>
    </v-layout>
</div>
</template>

<script>
    export default {
        props: {
            video: {
                type: Object,
                default: null,
            }
        },
        data(){
            return {
                panel: [false],
            };
        },
    }
</script>

<style lang="scss">
    .videoDetails{
        pre{
            white-space: pre-wrap;
        }
    }
</style>
