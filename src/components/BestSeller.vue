<template>
  <v-container>
    <v-row>
      <v-col v-for="prod in prods" :key="prod.id" cols="12" sm="6" md="4" lg="3">
        <StoreItem id="storeItem" :product="prod"></StoreItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import {computed} from "vue"
  import {useProductStore} from "../stores/ProductStore"
  import StoreItem from "./StoreItem.vue"
  const prodStore = useProductStore();
  prodStore.init();
  prodStore.filterByRating(4.5);
  const prods = computed(()=>prodStore.products)
</script>
