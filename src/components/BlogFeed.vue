<template>
  <v-container class="app-container ">
    <v-layout wrap>
      <v-flex xs12>
        <div v-for="item in data" :key="item.id">
          <Card :post="item" :key="item.id" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "blogfeed",
  components: {
    Card,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
