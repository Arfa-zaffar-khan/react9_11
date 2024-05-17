import React, { StrictMode, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Root from "./pages/Root.jsx";
import Product,{productLoader} from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
const Home=lazy(()=>wait(2000).then(()=>import("./pages/Home.jsx")))
const Contact=lazy(()=>wait(2000).then(()=>import("./pages/Contact.jsx")))
const About=lazy(()=>wait(2000).then(()=>import("./pages/About.jsx")))



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path:"/product/:id",
        loader:({params})=>productLoader(params.id),
        element:<Product />
      }
    ]
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
