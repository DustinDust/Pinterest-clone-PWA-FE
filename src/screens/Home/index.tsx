import React from "react";
import { Navigate } from "react-router-dom";
import BottomNavigation from "components/BottomNavigation";
import './styles.scss'

const Home = () => {
  // const authentication = false;
  return (
    <div className="home">
      asdasdasd
      {/* {!authentication && (
          <Navigate to="/login" replace={true} />
        )} */}
      <BottomNavigation />
    </div>
  );
};

export default Home;
