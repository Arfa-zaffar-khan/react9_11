import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />,
      errorElement: <Error />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
)
