import { create } from "zustand";
import {
  fetchBestsellers,
  fetchProductById,
  fetchProducts,
  searchProducts,
} from "../services/productApi.js";

export const useProductStore = create((set) => ({
  products: [],
  product: null,
  bestsellers: [],
  loading: false,
  error: null,

  //เรียกสินค้าทั้งหมด
  getProducts: async (category = null) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchProducts(category);
      set({ products: data.products, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //จะเอาสินค้าแค่อันเดียวมา
  getProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchProductById(id);
      set({ product: data.product, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //จะเสริชหาสิ้นค้าที่เราหา
  search: async (query) => {
    set({ loading: true, error: null });
    try {
      const data = await searchProducts(query);
      set({ products: data.products, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  //bestsellers
  getBestsellers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchBestsellers();
      set({ bestsellers: data.products, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
