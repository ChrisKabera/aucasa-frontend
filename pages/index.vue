<template>
  <v-app>
    <div>
      <v-row>
        <v-col md="7" cols="12">
          <v-card class="" max-width="700">
            <v-toolbar color="primary" dark>
              <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

              <v-toolbar-title>Posts</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
            <v-icon @click="getPosts">mdi-refresh</v-icon>
          </v-btn>

              <!-- <v-btn icon>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn> -->
            </v-toolbar>
            <div v-if="isFetching" class="pa-5">
              <p>getting all posts ...</p>
            </div>
            <v-list two-line v-else>
              <v-list-item-group
                v-model="selected"
                active-class="pink--text"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>

                        <v-list-item-subtitle class="text--primary">{{
                          item.headline
                        }}</v-list-item-subtitle>

                        <v-list-item-subtitle>{{
                          item.subtitle
                        }}</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text>{{
                          item.action
                        }}</v-list-item-action-text>

                        <v-icon v-if="!active" color="grey lighten-1">
                          mdi-star-outline
                        </v-icon>

                        <v-icon v-else color="yellow darken-3">
                          mdi-star
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col md="5" cols="12">
          <v-card>
            <v-toolbar color="primary" dark>
              <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

              <v-toolbar-title>Inqueries</v-toolbar-title>

              <v-spacer></v-spacer>

              <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn> -->

              <!-- <v-btn icon>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn> -->
            </v-toolbar>
            <form action="" @submit.prevent="submit" class="pa-3">
              <div>
                <label for=""><strong>Submitted By</strong></label>
                <v-text-field
                  dense
                  outlined
                  placeholder="Submitted By"
                  v-model="name"
                  required
                ></v-text-field>
              </div>
              <div>
                <label for=""><strong>Leader In Charge</strong></label>
                <v-select
                  :items="leaders"
                  label="Select Leader"
                  dense
                  outlined
                  v-model="leader"
                  required
                ></v-select>
              </div>
              <div>
                <label for=""><strong>Description</strong></label>
                <v-textarea
                  dense
                  v-model="description"
                  outlined
                  clearable
                  clear-icon="mdi-close-circle"
                  rows="3"
                  row-height="15"
                  placeholder="Description"
                  required
                ></v-textarea>
              </div>
              <div>
                <v-btn
                  type="submit"
                  :loading="loading"
                  color="primary"
                  block
                  class="mb-10"
                  >Submit</v-btn
                >
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    name:"",
    leader:"",
    description:"",
    loading: false,
    isFetching: false,
    leaders: ["Jaso", "Prince", "Laurent"],
    selected: [2],
    posts:[],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holta",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holtb",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holtc",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Hol",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta olt",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Hot",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Hlt",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt1",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt2",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt3",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt4",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt5",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt6",
      },
    ],
  }),
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        this.isFetching=true
        const {res} = await this.$axios.get('aucasa/posts/all')
        console.log("submit");
      } catch (error) {
        console.log("error", error);
      }
      finally {
        this.isFetching =false
      }
    },
    async submit() {
      try {
        this.loading=true
        const {res} = await this.$axios.get('aucasa/posts/all')
        console.log("submit");
      } catch (error) {
        console.log("error", error);
      }
      finally {
        this.isFetching = false
      }
    }
  }
};
</script>
