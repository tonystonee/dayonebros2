<template>
  <v-footer
    height="auto"
    color="grey"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        color="white"
        class="caption"
        flat
        small
      >
        {{ link.name }}
      </v-btn>
      <v-flex
        grey
        lighten-2
        py-1
        text-xs-center
        black--text
        xs12
      >
        &copy;2019 — <strong>Day One Bros</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Terms',
          path: '/terms',
        },
        {
          name: 'Copyright',
          path: '/copyright',
        },
        {
          name: 'Privacy',
          path: '/privacy',
        }
      ],
    })
  }
</script>

