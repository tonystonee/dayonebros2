<template>
    <div>
        <v-navigation-drawer
            class="nav-drawer lighten-5 "
            :class="navColor"
            v-model="drawer"
            fixed
            clipped
            width="230"
            app
        >
            <v-list dense class="py-0">
                <v-toolbar flat :color="navColor" class="darken-2 hidden-lg-and-up title-tile d-flex">
                    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="mx-1"></v-toolbar-side-icon>
                    <v-icon class="mx-0" :color="iconColor">fas fa-play-circle</v-icon>
                    <v-toolbar-title class="title ml-1 mr-5 align-center ">
                        <router-link :to="{name: 'home'}" :class="textColor">DayOneBros &nbsp;</router-link>
                    </v-toolbar-title>
                    <v-divider></v-divider>
                </v-toolbar>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.text" color="black" :to="{path: item.slug}" ripple >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                        {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
            :color="navColor"
            class="darken-2"
            dense
            flat
            fixed
            clipped-left
            app
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-icon class="ml-2 mr-0" :color="iconColor">fas fa-play-circle</v-icon>
            <v-toolbar-title class="title ml-2 mr-5 align-center ">
                <router-link :to="{name: 'home'}" :class="textColor">DayOneBros &nbsp;</router-link>
                <span v-if="category" :class="textColor" class="subheading">{{category}}</span>
            </v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    import Category from '@/mixins/category';
    export default {
        name: 'Navbar',
        mixins: [Category],
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            category: null,
            items: [
                { icon: 'trending_up', text: 'News', slug: 'news' },
                { icon: 'fas fa-laugh-squint', text: 'Comedy', slug: 'comedy' },
                { icon: 'fas fa-football-ball', text: 'Sports', slug: 'sports' },
                { icon: 'drive_eta', text: 'Auto', slug: 'auto' },
                { icon: 'audiotrack', text: 'Music', slug: 'music' },
                { icon: 'fas fa-film', text: 'Film and Animation', slug: 'film_and_animation' },
                { icon: 'videogame_asset', text: 'Gaming', slug: 'gaming' },
                { icon: 'pets', text: 'Pets', slug: 'pets' },
                { icon: 'fas fa-flask', text: 'Science', slug: 'science' },
                { icon: 'fas fa-graduation-cap', text: 'Education', slug: 'education' },
            ],
        }), 
        computed:{
            textColor(){
                if(this.$route.name == "home"){
                    return 'black--text';
                } else{
                    return 'white--text';
                }
            },
            iconColor(){
                if(this.$route.name == "home"){
                    return 'red';
                } else{
                    return 'white';
                }
            },
            navColor(){
                if(this.$route.name == "home"){
                    return 'white';
                } else{
                    return 'barColor';
                }
            },
        },
        mounted(){
            console.log(this.$route)
        }
    };
</script>


<style lang="scss">
.title{
    a{
        text-decoration: none;
    }
}
.nav-drawer{
    .title-tile{
        flex-direction: column;
        align-content: center;
        height: 48px;
        .v-toolbar__content{
            padding: 0;
            .title{
                font-size: 16px !important;
            }
        }
    }
    .primary--text{
        background-image: none;
        color: inherit !important;
    }
}
</style>
