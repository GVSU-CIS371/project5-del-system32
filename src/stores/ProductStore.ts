import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [] as ProductDoc[],
  }),
  actions: {
    async initializeProducts() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      useProductStore.products = initProducts;
    },

    filterProductsByCategory(category: string) {
      return useProductStore.products.filter((product: ProductDoc) => product.data.category === category);
    },

    filterByRating(minRating: number) {
      return useProductStore.products.filter((product: ProductDoc) => product.data.rating > minRating);
    }

  },
});
