import React from "react";
// import { Navigate } from "react-router-dom";
import BottomNavigation from "components/BottomNavigation";
import Feed from "components/Feed";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Feed />
      <BottomNavigation />
    </div>
  );
};

export default Home;
