<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="nav-link">{{ links.home }}</router-link
      >|
      <router-link to="/about" class="nav-link">{{ links.about }}</router-link>
      <v-spacer></v-spacer>
      <v-btn flat :href="releases" target="_blank">
        <span class="mr-2">{{ txtReleases }}</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "MATERIAL DESIGN",
      links: {
        home: "Home",
        about: "About",
      },
      releases: "https://github.com/vuetifyjs/vuetify/releases/lates",
      txtReleases: "Latest Release",
    };
  },
};
</script>
