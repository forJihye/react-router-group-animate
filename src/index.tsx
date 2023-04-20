import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
