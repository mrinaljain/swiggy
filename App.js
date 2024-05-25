import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import { routes } from "./src/utils/routes";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return (
    //! Using BrowserRouter
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    //! Using CreateBrowser Router
    <RouterProvider router={routes}></RouterProvider>
  );
};

root.render(<App />);
