import React from "react";
import { Outlet, useParams } from "react-router-dom";
import BottomNavigation from "components/BottomNavigation";
import "./styles.scss";

const Home = () => {
  return (
    <div className="Pinhome">
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default Home;
