import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartReducer",
    initialState:{
        products:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload
            state.products.push(product)
        }
    }
})


export const {addToCart}=cartSlice.actions
export default cartSlice.reducer