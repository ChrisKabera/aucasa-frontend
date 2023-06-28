<template>
  <v-app dark>
    <!--=============== HEADER ===============-->
    <body :class="{ darkTheme: darkTheme }">
      <header app class="header" id="header">
        <nav class="nav container">
          <nuxt-link to="#" class="nav__logo"
            ><span class="main-logo">A</span>UCASA</nuxt-link
          >

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <nuxt-link to="posts" class="nav__link">Posts</nuxt-link>
              </li>
              <li class="nav__item">
                <nuxt-link to="/inqueries" class="nav__link"
                  >Inqueries</nuxt-link
                >
              </li>

              <!-- <i class="bx bx-toggle-left change-theme" id="theme-button"><v-switch v-model="switch1" @click="changeTheme"></v-switch></i> -->
            </ul>
          </div>

          <div>
            <v-btn
              nuxt
              to="/auth/login"
              text
              style="text-transform: capitalize !important"
              >Sign In</v-btn
            >
            <v-btn
              rounded
              small
              nuxt
              to="auth/register"
              color="primary"
              dark
              style="
                text-transform: capitalize !important;
                color: #fff !important;
              "
              >Sign Up</v-btn
            >
            <!-- <v-icon @click="changeTheme" class="mx-10" v-if="!darkTheme"
              >mdi-white-balance-sunny</v-icon
            >
            <v-icon @click="changeTheme" class="mx-10" v-else color="#0fa7a4"
              >mdi-white-balance-sunny</v-icon
            > -->
          </div>
          <div class="nav__toggle" id="nav-toggle">
            <i class="bx bx-grid-alt">=</i>
          </div>
        </nav>
        <v-divider></v-divider>
      </header>
    </body>
    <v-main class="py-md-16">
      <v-container class="py-md-16">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <p class="text-center pt-2">
        <span class=" text-center"
          >{{ new Date().getFullYear() }} &copy;
          <nuxt-link to="/hello" style="color: #00447b !important;">AUCASA</nuxt-link>, Created By
          <a href="" style="color: #00447b !important;"> Kabera Christia</a>
        </span>
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      switch1: false,
      isDark: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  head() {
    return {
      title: "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     to: "/style/home.css",
      //   },
      // ],
      script: [
        {
          src: "/js/main.js",
          type: "text/javascript",
          body: true,
        },
        // {
        //   src: "/js/mixItUp.js",
        //   body: true,
        //   type: "text/javascript",
        // },
      ],
    };
  },
  computed: {
    darkTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    changeTheme() {
      this.isDark = !this.isDark;
      this.$store.dispatch("setDarkTheme", this.isDark);
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.isDark = true;
        this.$store.dispatch("setDarkTheme", this.isDark);
      } else {
        this.isDark = false;
        this.$store.dispatch("setDarkTheme", this.isDark);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
