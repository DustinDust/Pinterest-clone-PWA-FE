import React from "react";
// import { Navigate } from "react-router-dom";
import BottomNavigation, { Tabs } from "components/BottomNavigation";
import Feed from "components/Feed";
import "./styles.scss";
import { useParams } from "react-router-dom";
import Profile from "components/Profile";

const Home = () => {
  let a = useParams();
  console.log(a["*"]);
  return (
    <div className="Pinhome">
      {a["*"] === Tabs.Home ? <Feed /> : <Profile />}
      <BottomNavigation />
    </div>
  );
};

export default Home;
