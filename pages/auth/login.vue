<template>
  <v-app style="margin: 0 !important; padding: 0 !important">
    <div>
      <div class="main-bg">
        <div class="text-center py-10">
          <h1>
            <nuxt-link to="/" style="color: #ffffff !important"
              >AUCASA</nuxt-link
            >
          </h1>
        </div>
      </div>
      <div class="card">
        <v-row justify="center">
          <v-card class="pa-5 pb-10" :width="width">
            <v-card-text>
              <div class="text-center">
                <h2>Welcome Back !!</h2>
                <p>Sign in to continue to Template.</p>
              </div>
              <form action="" @submit.prevent="submit">
                <div class="">
                  <label for="">Email</label>
                  <v-text-field dense outlined required type="email" v-model="email"></v-text-field>
                </div>
                <div class="row-height">
                  <div class="d-flex justify-space-between">
                    <label for="">Password</label>
                    <nuxt-link to="">Forgot Password??</nuxt-link>
                  </div>
                  <v-text-field
                    dense
                    outlined
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    required
                    v-model="password"
                  ></v-text-field>
                </div>
                <div>
                  <v-checkbox
                    style="margin-top: -10px"
                    color="#00447b"
                    v-model="checkbox"
                    class="checkbox"
                    :label="`Remember me `"
                  ></v-checkbox>
                </div>
                <div>
                  <v-btn type="submit" block dark color="#00447b" :loading="loading"
                    >Sign in</v-btn
                  >
                </div>
              </form>
            </v-card-text>
          </v-card>
        </v-row>
        <div class="py-5">
          <p class="text-center">
            Don't have an account ?
            <nuxt-link to="/auth/register">Register</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      password:"",
      email:"",
      loading: false,
      checkbox: false,
      show1: false,
    };
  },
  layout: "empty",
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 350;
        case "sm":
          return 350;
        case "md":
          return 400;
        case "lg":
          return 400;
        case "xl":
          return 500;
      }
    },
  },
  methods: {
    async submit() {
      try {
        this.loading = true;
        const { res } = await this.$axios.post("users/authenticate", {
          username: this.email,
          password: this.password,
        });
        console.log("res", res);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
body {
  margin: 0 !important;
}
.main-bg {
  background: var(--primary-color);
  height: 50vh;
  z-index: 1;
  @media screen and(max-width:600px) {
    margin-top: -3rem !important;
  }
}
.card {
  z-index: 100;
  margin-top: -200px;
}
.card .row-height {
  margin-top: -10px;
}

a,
h2 {
  color: var(--primary-color) !important;
}
h1 {
  color: #ffffff !important;
}
</style>
