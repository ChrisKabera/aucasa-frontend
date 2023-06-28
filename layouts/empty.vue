<template>
    <v-main>
        <nuxt />
        <div class="text-center main-footer">
            <p class="text-center">
          <span class="">{{ new Date().getFullYear() }} &copy; <nuxt-link to="">AUCASA</nuxt-link>, Created By <a href=""> Kabera Christia</a> </span>
        </p>
        </div>
    </v-main>
</template>
<style lang="scss" scoped>
body {
    margin: 0 !important;
}
.main-footer {
    display: flex !important;
    justify-content: center !important;
    padding-bottom: 10px !important;
}
a {
    color: var(--primary-color) !important;
}
</style>