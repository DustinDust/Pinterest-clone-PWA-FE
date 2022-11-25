import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import Register from "screens/Register";
import Feed from "components/Feed";
import Profile from "components/Profile";
import Search from "components/Search";
import Board from "components/Board";
import CreateBoard from './../components/CreateBoard/index';
import UpdateBoard from './../components/UpdateBoard/index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="" element={<Feed />} />
          <Route path="search" element={<Search />} />
          <Route path="notification" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:idBoard" element={<Board />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="board/create" element={<CreateBoard />} />
        <Route path="board/update" element={<UpdateBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
