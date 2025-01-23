import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import { routes } from "./src/utils/routes";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  const [userName, setUserName] = useState("Mrinal Jain");
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
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          userFullName: userName,
          userImage: "https://avatars.githubusercontent.com/mrinaljain",
          changeName: setUserName,
        }}
      >
        <RouterProvider router={routes}></RouterProvider>
      </UserContext.Provider>
    </Provider>
  );
};

root.render(<App />);
