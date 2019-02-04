<template>
    <div >
        <v-navigation-drawer
            class="nav-drawer"
            v-model="drawer"
            fixed
            clipped
            app
        >
            <v-list dense class="white py-0">
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
            fixed
            clipped-left
            app
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-icon class="mx-3" color="red">fas fa-play-circle</v-icon>
            <v-toolbar-title class="mr-5 align-center">
                <router-link :to="{name: 'home'}" class="title black--text">Day One Bros.com</router-link>
            </v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: () => ({
      drawer: null,
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
    props: {
      source: String
    }
  }
</script>


<style lang="scss">
.title{
    text-decoration: none;
}
.nav-drawer{
    .primary--text{
        background-image: none;
        color: inherit !important;
    }
}
</style>
