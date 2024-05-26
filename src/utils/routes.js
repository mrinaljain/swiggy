import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import HomeLayout from "../components/HomeLayout";
import Restaurant from "../pages/Restaurant/Restaurant";
import Shimmer from "../components/Shimmer/Shimmer";
import Cart from "../pages/Cart/Cart";

//! Lazy load one component for example

const About = lazy(() => import("../pages/About/About"));

export let routes = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <Restaurant /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
