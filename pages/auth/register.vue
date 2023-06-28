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
                <h2>Create New Account</h2>
                <p>Get your free Template account</p>
              </div>
              <form action="" @submit.prevent="submit">
                <div class="">
                  <label for="">First Name</label>
                  <v-text-field
                    dense
                    outlined
                    required
                    v-model="fname"
                  ></v-text-field>
                </div>
                <div class="row-height">
                  <label for="">Last Name</label>
                  <v-text-field
                    dense
                    outlined
                    required
                    v-model="lname"
                  ></v-text-field>
                </div>
                <div class="row-height">
                  <label for="">Age</label>
                  <v-text-field
                    dense
                    outlined
                    type="number"
                    v-model="age"
                    required
                  ></v-text-field>
                </div>
                <div class="row-height">
                  <label for="">Email</label>
                  <v-text-field
                    dense
                    outlined
                    type="email"
                    v-model="email"
                    required
                  ></v-text-field>
                </div>

                <div class="row-height">
                  <label for="">Faculuty</label>
                  <v-select
                    :items="faculities"
                    label="Select Faculuty"
                    dense
                    outlined
                    v-model="faculuty"
                    required
                  ></v-select>
                </div>
                <div class="row-height">
                  <label for="">Role</label>
                  <v-select
                    :items="roles"
                    label="Select Role"
                    dense
                    outlined
                    v-model="role"
                    required
                  ></v-select>
                </div>
                <div class="row-height">
                  <label for="">Password</label>
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
                  <p>
                    By registering you agree to the Template
                    <nuxt-link to="">Terms of Use</nuxt-link>
                  </p>
                </div>
                <div>
                  <v-btn
                    type="submit"
                    block
                    dark
                    color="#00447b"
                    :loading="loading"
                    >Register</v-btn
                  >
                </div>
              </form>
            </v-card-text>
          </v-card>
        </v-row>
        <div class="py-5">
          <p class="text-center">
            Already have an account ?
            <nuxt-link to="/auth/login">Signin</nuxt-link>
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
      loading: false,
      show1: false,
      show2: false,
      fname: "test",
      lname: "test",
      faculuty: "IT",
      age: "20",
      role: "GUILD",
      email: "test@me.com",
      password: "test@123",
      faculities: ["IT", "BUSINESS", "THEOLOGY"],
      roles: ["GUILD", "TREASUROR", "MINISTERS"],
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
        const { res } = await this.$axios.post("users/new", {
          email: this.email,
          firstName: this.fname,
          lastName: this.lname,
          faculty: this.faculuty,
          age: this.age,
          roles: this.role,
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
  margin-top: -15px;
}

a,
h2 {
  color: var(--primary-color) !important;
}
h1 {
  color: #ffffff !important;
}
</style>
