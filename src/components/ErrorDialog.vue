  <template>
      <v-dialog
    class="error-dialog"
    v-model="dialog"
    width="500"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Error
        </v-card-title>

        <v-card-text>We're sorry, but an error has occured. Please contact the adminstrator to address the issue.
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            OKAY
          </v-btn>
        </v-card-actions>
        <code>{{error}}</code>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
      props: {
          error: {
              type: String,
              default: null,
          },
          dialog: {
              type: Boolean,
              default: false,
          }
      },
  }
  </script>
  