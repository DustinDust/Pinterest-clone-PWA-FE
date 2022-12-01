import React, { createRef, RefObject } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
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
  const { boardId } = useParams();
  const ref: RefObject<HTMLInputElement> = createRef();
  if (props.inBoard || props.inPin) {
    return (
      <div className="headerCom">
        <div className="back">
          <Back
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <Share className="icon" />
        <Edit
          className="icon"
          onClick={() => navigate(`/board/${boardId}/edit`)}
        />
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
