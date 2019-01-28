<template>
    <v-expansion-panel v-if="video"
        v-model="panel"
        expand
    >
        <v-layout>
            <h2 class="pa-3">{{video.title}}</h2>
        </v-layout>
        <v-expansion-panel-content>
            <div slot="header" class="font-weight-bold">
                <span v-if="!panel[0]">Show More</span>
                <span v-else>Close 
                    <v-icon small right>close</v-icon>
                </span>
            </div>
            <v-card>
                <v-card-text>
                    {{video.description}}
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
    <v-card v-else>
        <v-layout class="white pa-3" justify-center>
                <v-progress-circular
                    class="py-5"
                    indeterminate
                    color="primary"
                ></v-progress-circular>
        </v-layout>
    </v-card>
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
