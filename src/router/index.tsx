import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import Register from "screens/Register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
