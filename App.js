import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const app = React.createElement("div", { className: "app" }, "Hello");

root.render(app);
