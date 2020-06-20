<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="display-1">Address not found.</div>
          <router-link :to="{ name: 'home' }" class="more-link"
            >Back</router-link
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.paragraph-text {
  font-size: 18px;
}
</style>
