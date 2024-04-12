<template>

  <v-card height="100%">
   <v-container>
    <v-col>

      <v-row lg="8" md="7" sm="6">
        <v-title class="align-center">
          <span> {{product.data.name}} </span>
        </v-title>
      </v-row>
        

      <v-row>
        <v-row lg="8" md="7" sm="6">
          <v-col justify="space-between">
            <v-card-subtitle>
            <v-icon

              class="me-1 pb-1"

              color="yellow"

              icon="mdi-star"

              size="18"

             ></v-icon>
            {{product.data.rating}}/5    
            <v-icon

              class="me-1 pb-1"

              color="green"

              icon="mdi-cash"

              size="18"

             ></v-icon>
            
            {{product.data.price}}      
            <v-icon

              class="me-1 pb-1"

              color="blue"

              icon="mdi-cube"

              size="18"

             ></v-icon>

            {{product.data.stock}}
            </v-card-subtitle>
            <v-card-subtitle>  </v-card-subtitle>
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
