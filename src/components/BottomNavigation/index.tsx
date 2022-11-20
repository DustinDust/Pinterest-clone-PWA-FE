import React, { useState } from "react";
import { ReactComponent as Home } from "assets/svg/home.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Comment } from "assets/svg/comment.svg";
import { ReactComponent as Profile } from "assets/svg/profile.svg";
import "./styles.scss";

const tabs = [
  {
    component: Home,
    path: "/"
  },
  {
    component: Search,
    path: "/search"
  },
  {
    component: Comment,
    path: "/notifications"
  },
  {
    component: Profile,
    path: "/profile"
  }
];

const BottomNavigation = () => {
  const [state, setState] = useState(0);

  return (
    <div className="bottom">
      {tabs.map((tab, i) => {
        return (
          <tab.component
            key={i}
            className={state === i ? "active" : "inactive"}
            onClick={()=>setState(i)}
          />
        );
      })}
    </div>
  );
};

export default BottomNavigation;
