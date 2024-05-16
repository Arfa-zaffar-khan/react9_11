import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartReducer",
    initialState:{
        products:[
        ],
        totalAmount:0,
        totalProducts:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload
            state.totalAmount+=product.price
            state.totalProducts+=1
            product.quantity=1
            state.products.push(product)
        },
        removeToCart:(state,action)=>{
            const productIdToRemove = action.payload;
            const removedProduct = state.products.find(product => product.id === productIdToRemove);
            if (removedProduct) {
                state.totalAmount -= removedProduct.price * removedProduct.quantity;
                state.totalProducts -= removedProduct.quantity;
                state.products = state.products.filter(product => product.id !== productIdToRemove);
            }
        },
        // changeQuantity:(state,action)=>{
        //     const { id, count } = action.payload;
        //     const productToUpdate = state.products.find(product => product.id === id);
        //     state.totalAmount +=(count-productToUpdate.quantity)*productToUpdate.price
        //     state.totalProducts+=count-productToUpdate.quantity
        //     productToUpdate.quantity=count
        //     productToUpdate.price=count*productToUpdate.price
        // }
    }
})


export const {addToCart,removeToCart}=cartSlice.actions
export default cartSlice.reducer