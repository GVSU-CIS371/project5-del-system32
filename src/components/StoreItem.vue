<template>

  <v-card>
   <v-container>
    <v-col>

      <v-row lg="8" md="7" sm="6">
        <v-title class="align-center">
          <span> {{product.data.name}} </span>
        </v-title>
      </v-row>
        

      <v-row>
        <v-row lg="8" md="7" sm="6">
          <v-col>
            <v-card-subtitle>Item Rating: {{product.data.rating}}/5</v-card-subtitle>
          </v-col>
          <v-col>
            <v-card-subtitle>Item Price: ${{product.data.price}}</v-card-subtitle>
          </v-col>
          <v-col>
            <v-card-subtitle>Item Stock: {{product.data.stock}}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-row>


      <v-row lg="8" md="7" sm="6">
         <v-img :src="product.data.image"></v-img>
      </v-row>


      <v-row lg="8" md="7" sm="6">
        {{product.data.description}}
      </v-row>
    
    </v-col>
   
   </v-container>

  </v-card>
</template>

<script lang="ts" setup>
  import {ProductDoc} from "../types/product";
  import {defineProps} from "vue"

  defineProps<{
    product: ProductDoc
  }>();

</script>
