import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "antd/dist/antd.css";
// import { store } from "./store/store";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Web3ContextProvider from "./components/Web3Context";
import "../src/app.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ContextProvider>
        <App />
      </Web3ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
