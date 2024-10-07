import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Admin from "./Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route Component={App} path="/"></Route>
      <Route Component={Admin} path="/admin/"></Route>
    </Routes>
  </BrowserRouter>
);
