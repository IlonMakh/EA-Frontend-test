import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import FontStyles from "./fontStyles";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  font-size: 10px;
}

.App {
  margin: 0;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Poppins", sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyles />
    <App />
  </React.StrictMode>
);
