<template>
    <div>
        <v-navigation-drawer
            class="nav-drawer"
            v-model="drawer"
            fixed
            clipped
            width="220"
            app
        >
            <v-list dense class="white py-0">
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
            color="white"
            dense
            flat
            fixed
            clipped-left
            app
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-icon class="mx-3" color="red">fas fa-play-circle</v-icon>
            <v-toolbar-title class="title mr-5 align-center ">
                <router-link :to="{name: 'home'}" class="black--text">Day One Bros.com &nbsp</router-link>
                <span v-if="category" class="subheading">{{category}}</span>
            </v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
        source: String,
    },
    data: () => ({
      drawer: null,
      category: null,
      items: [
        { icon: 'trending_up', text: 'News', slug: 'news' },
        { icon: 'fas fa-laugh-squint', text: 'Comedy', slug: 'news' },
        { icon: 'spa', text: 'Beauty', slug: 'news' },
        { icon: 'fas fa-football-ball', text: 'Sports', slug: 'news' },
        { icon: 'drive_eta', text: 'Auto', slug: 'news' },
        { icon: 'audiotrack', text: 'Music', slug: 'news' },
        { icon: 'fas fa-film', text: 'Film and Animation', slug: 'news' },
        { icon: 'videogame_asset', text: 'Gaming', slug: 'news' },
        { icon: 'pets', text: 'Pets', slug: 'news' },
        { icon: 'fas fa-flask', text: 'Science', slug: 'news' },
        { icon: 'fas fa-graduation-cap', text: 'Education', slug: 'news' },
      ],
    }),
    watch:{
        $route: {
            handler(to, from){
                if(this.$router.history.current.name == "home"){
                    this.category = null;
                } else {
                    this.category = this.$router.history.current.name;
                }
            },
            immediate: true,
        },
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
    .primary--text{
        background-image: none;
        color: inherit !important;
    }
}
</style>
