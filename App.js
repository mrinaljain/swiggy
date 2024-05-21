import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

root.render(<App />);
