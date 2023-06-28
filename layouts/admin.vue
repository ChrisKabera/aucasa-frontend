<template>
  <v-app dark class="">
    <v-navigation-drawer
      dark
      color="#00447b"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="mb-7 py-5">
        <h2 class="px-7" style="color: lightgray">AUCASA</h2>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="px-5"
          :class="{ 'active-linker': isActive(item) }"
        >
          <v-list-item-action dark>
            <v-icon color="#ffffff">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="color: lightgray">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat :clipped-left="clipped" fixed app color="#ffffff" class="">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <!-- <v-icon v-if="width" @click="addField" class="mt-1">mdi-magnify</v-icon>
      <v-text-field
        v-else
        dense
        filled
        outlined
        placeholder="search ..."
        class="mt-5 custom-width"
        @click:append="search"
        append-icon="mdi-magnify"
      ></v-text-field> -->
      <v-spacer />
      <!-- <div class="icons">
        <v-icon class="mr-4">mdi-account</v-icon>
        <v-icon class="mr-4">mdi-account</v-icon>
        <v-icon class="mr-4">mdi-account</v-icon>
      </div> -->
      <div>
        <v-menu offset-y v-if="width" class="mx-4">
          <template v-slot:activator="{ on, attrs }">
            <div class="" v-bind="attrs" v-on="on">
              <v-avatar class="mr-4">
                <!-- <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                /> -->
                <v-icon>mdi-account</v-icon>
              </v-avatar>
            </div>
          </template>
          <v-list class="pr-5">
            <v-list-item><h4 class="pa-4">Welcome Anna</h4></v-list-item>
           
            <v-list-item>
              <v-list-item-title class="" @click="logout"
                ><nuxt-link to="">
                  <v-icon small class="mx-3">mdi-logout</v-icon
                  ><small>Logout</small></nuxt-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y v-else>
          <template v-slot:activator="{ on, attrs }">
            <div class="profile d-flex" v-bind="attrs" v-on="on">
              <v-avatar class="mr-4">
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <span class="d-flex flex-column">
                <small class=""><strong>Anna</strong></small>
                <small>founder</small>
              </span>
            </div>
          </template>
          <v-list>
            <!-- <v-list-item v-for="(item, index) in itemsList" :key="index">
              <v-list-item-title class=""
                ><nuxt-link to="">
                  <v-icon small class="mx-3">{{ item.icon }}</v-icon
                  ><small>{{ item.title }}</small></nuxt-link
                ></v-list-item-title
              >
            </v-list-item> -->
            <v-list-item>
              <v-list-item-title class="" @click="logout"
                ><nuxt-link to="">
                  <v-icon small class="mx-3">mdi-logout</v-icon
                  ><small>Logout</small></nuxt-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main class="main-bg">
      <v-divider class=""></v-divider>
      <div class="sub-main py-2 px-5">
        <v-row>
          <h4 style="text-transform: capitalize">
            <span v-if="routeTitle.length > 10">{{
              routeTitle.slice(10)
            }}</span>
            <span v-else>{{ routeTitle }}</span>
          </h4>
          <v-spacer></v-spacer>
          <small
            ><nuxt-link to="/dashboard">Dashboard</nuxt-link>
            <span style="color: gray; text-transform: capitalize">
              <span class="mx-2">></span>
              <span v-if="routeTitle.length > 10">{{
                routeTitle.slice(10)
              }}</span>
              <span v-else>{{ routeTitle }}</span></span
            ></small
          >
        </v-row>
      </div>
      <div class="main-bg">
        <Nuxt class="main-bg px-5 py-5" />
      </div>
      <div class="footer px-5">
        <p class="">
          <span class="">{{ new Date().getFullYear() }} &copy; AUCASA </span>
        </p>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      switch1: false,
      items: [
        {
          icon: "mdi-home",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-post",
          title: "Posts",
          to: "/dashboard/posts",
        },
        {
          icon: "mdi-text",
          title: "Activities",
          to: "/dashboard/activities",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inqueries",
          to: "/dashboard/inqueries",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      activeItem: null,
      itemsList: [
        { icon: "mdi-apps", title: "Click Me" },
        { icon: "mdi-apps", title: "Click Me" },
        { icon: "mdi-apps", title: "Click Me" },
        { icon: "mdi-apps", title: "Click Me 2" },
      ],
    };
  },
  computed: {
    itemsWithActiveFlag() {
      return this.items.map((item) => ({
        ...item,
        active: this.$route.path === item.to,
      }));
    },
    routeTitle() {
      return this.$route.name;
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    },
  },
  methods: {
    isActive(item) {
      return this.$route.path === item.to;
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    addField() {
      console.log("hii");
    },
    search() {
      console.log("hii");
    },
    logout() {
      localStorage.removeItem("token")
      this.$router.push("/auth/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.main-bg {
  background: #eef0f2 !important;
  
}
.profile {
  background: #eef0f2;
  padding: 8px 20px;
}
.sub-main {
  background: #ffffff;
  @media screen and(max-width:600px) {
    margin-top: -46px;
  }
}
.custom-width ::v-deep .v-input__control {
  max-width: 250px; /* Adjust the width as desired */
}
.active-linker {
  color: #fff;
}
.footer {
  bottom: 0;
  padding-top: 10px !important;
  padding: 1px;
  background: #ffffff !important;
}
</style>
