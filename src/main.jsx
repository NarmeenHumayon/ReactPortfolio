import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Admin from "./Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./Register.jsx";
import LogIn from "./LogIn.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route Component={App} path="/:query"></Route>
      <Route Component={App} path="/"></Route>
      <Route Component={Admin} path="/admin/"></Route>
      <Route Component={Register} path="/register/"></Route>
      <Route Component={LogIn} path="/login/"></Route>
    </Routes>
  </BrowserRouter>
);
