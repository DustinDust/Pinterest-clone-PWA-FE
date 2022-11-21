import React, { createRef, RefObject } from "react";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import "./styles.scss";

const Header = () => {
  const ref: RefObject<HTMLInputElement> = createRef();
  return (
    <div className="headerCom">
      <div
        className="search"
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
      >
        <Search />
        <input type="text" className="text" placeholder="Tìm kiếm" ref={ref} />
      </div>
      <Add className="icon" />
      <Setting className="icon" />
    </div>
  );
};

export default Header;
