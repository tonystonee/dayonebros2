<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            clipped
            app
        >
            <v-list dense>
                <v-list-tile ripple v-for="item in items" :key="item.text" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                        {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
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
                <span class="title">Day One Bros.com</span>
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
        { icon: 'trending_up', text: 'News' },
        { icon: 'fas fa-laugh-squint', text: 'Comedy' },
        { icon: 'spa', text: 'Beauty' },
        { icon: 'fas fa-football-ball', text: 'Sports' },
        { icon: 'drive_eta', text: 'Auto' },
        { icon: 'audiotrack', text: 'Music' },
        { icon: 'fas fa-film', text: 'Film and Animation' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'pets', text: 'Pets' },
        { icon: 'fas fa-flask', text: 'Science' },
        { icon: 'fas fa-graduation-cap', text: 'Education' }
      ],
    }),
    props: {
      source: String
    }
  }
</script>


