import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    products: [],
    totalAmount: 0,
    totalProducts: 0,
    search: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.totalAmount += product.price;
      state.totalProducts += 1;
      product.quantity = 1;
      state.products.push(product);
    },
    removeToCart: (state, action) => {
      const productIdToRemove = action.payload;
      const removedProduct = state.products.find(
        (product) => product.id === productIdToRemove
      );
      if (removedProduct) {
        state.totalAmount -= removedProduct.price * removedProduct.quantity;
        state.totalProducts -= removedProduct.quantity;
        state.products = state.products.filter(
          (product) => product.id !== productIdToRemove
        );
      }
    },
    searchProducts: (state, action) => {
      state.search = action.payload;
    },
    checkout: (state, action) => {
      if (state.totalProducts > 0) {
        state.products = [];
        state.totalAmount = 0;
        state.totalProducts = 0;
        alert("order placed successfull");
      }
    },
  },
});

export const { addToCart, removeToCart, searchProducts, checkout } =
  cartSlice.actions;
export default cartSlice.reducer;
