<template>
  <!-- your answer -->
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        HELLO?
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// your answer
  import { defineStore } from 'pinia';
  import { ProductDoc } from '../types/product';
  import { useProductStore } from '../store/ProductStore';
  import { initProducts } from "../data-init";
 
</script>
