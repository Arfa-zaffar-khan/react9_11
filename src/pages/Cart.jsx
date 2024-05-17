import { Heart, Trash } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout, removeToCart } from "../store/features/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatcher = useDispatch();

  function handleRemove(id) {
    dispatcher(removeToCart(id));
  }
 
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      {!products.length>0 &&
      <p className="mt-3 text-sm font-medium text-gray-700">
        No items Fount in your cart
      </p>
}
      <ul className="flex flex-col divide-y divide-gray-200">
        {products.length > 0 &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {product.title}
                      </h3>
                      <p className="text-sm">{product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex divide-x text-sm ">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={product.quantity}
                      />
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(product.id)}
                      className="flex items-center space-x-2 px-2 py-1 pl-0"
                    >
                      <Trash size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">${totalAmount}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
        <Link
        to={"/checkout"}
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
