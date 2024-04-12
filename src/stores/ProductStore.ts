import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as ProductDoc[],
    };
  },

  actions: {
    init(){
      this.products = initProducts;
    },

    filterByCategory(category: string) {
      this.products = initProducts.filter((x: ProductDoc) => x.data.category == category);
    },

    filterByRating(minRating: number) {
      this.products = initProducts.filter((x: ProductDoc) => x.data.rating >= minRating);
    }

  },
});
