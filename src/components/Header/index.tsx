import React, { createRef, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Dot } from "assets/svg/dot.svg";
import { ReactComponent as Share } from "assets/svg/share.svg";
import "./styles.scss";

interface HeaderProps {
  inSearch?: boolean;
  inBoard?: boolean;
  inPin?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const ref: RefObject<HTMLInputElement> = createRef();
  if (props.inBoard || props.inPin) {
    return (
      <div className="headerCom">
        <div
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Back />
        </div>
        <Share className="icon" />
        <Dot className="icon" />
        {props.inPin && <div className="save">Lưu</div>}
      </div>
    );
  }

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
      {!props.inSearch && (
        <>
          <Add
            className="icon"
            onClick={() => {
              props.setIsOpen && props.setIsOpen(true);
            }}
          />
          <Setting className="icon" />
        </>
      )}
    </div>
  );
};

export default Header;
