import React, { useState, useEffect } from "react"
import { ReactComponent as Home } from "assets/svg/home.svg"
import { ReactComponent as Search } from "assets/svg/search.svg"
import { ReactComponent as Comment } from "assets/svg/comment.svg"
import { ReactComponent as Profile } from "assets/svg/profile.svg"
import "./styles.scss"
import { useLocation, useNavigate } from "react-router-dom"

export enum Tabs {
  Home = "",
  Search = "search",
  Noti = "notifications",
  Profile = "profile"
}

const tabs = [
  {
    component: Home,
    path: Tabs.Home
  },
  {
    component: Search,
    path: Tabs.Search
  },
  {
    component: Comment,
    path: Tabs.Noti
  },
  {
    component: Profile,
    path: Tabs.Profile
  }
]

const BottomNavigation = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [state, setState] = useState(0)

  useEffect(() => {
    pathname === "/"
      ? setState(0)
      : pathname === "/search"
      ? setState(1)
      : pathname === "/notifications"
      ? setState(2)
      : pathname === "/profile"
      ? setState(3)
      : void 0
  }, [pathname])

  return (
    <div className="bottom">
      {tabs.map((tab, i) => {
        return (
          <tab.component
            key={i}
            className={state === i ? "active" : "inactive"}
            onClick={() => {
              setState(i)
              navigate(tab.path)
            }}
          />
        )
      })}
    </div>
  )
}

export default BottomNavigation
