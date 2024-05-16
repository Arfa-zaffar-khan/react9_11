import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const products=useSelector(state=>state.cart.products)
    console.log(products)
  return (
    <div>Cart</div>
  )
}
