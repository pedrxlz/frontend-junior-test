import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import EditToken from "./views/EditToken/EditToken";
import AddToken from "./views/AddToken/AddToken";

import "./index.css";
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/edit-token" element={<EditToken />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
