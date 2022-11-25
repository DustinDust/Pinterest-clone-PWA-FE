import React, { useState } from "react";
import Header from "components/Header";
import logo from "assets/images/logo.png";
import "./styles.scss";
import { useViewport } from "hooks";
import BoardCard from "components/BoardCard";
import Modal from "components/Modal";

const Profile = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 900 ? viewPort.width / 2 : viewPort.width / 3;

  return (
    <div className="profile">
      <Header setIsOpen={setOpen} />
      {open && <Modal setIsOpen={setOpen} inProfile />}
      <img src={logo} className="avatar" alt=""></img>
      <div className="user-name">Nam Luong</div>
      <div className="email">namluong@gmail</div>
      <div className="rela">0 người theo dõi · 0 người đang theo dõi</div>
      <div className="share">Chia sẻ</div>
      <div className="boards">
        <div
          className={`board ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Đã tạo
        </div>
        <div
          className={`board ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Đã lưu
        </div>
      </div>
      <div style={{}}>
        <BoardCard style={{ width: itemWidth }} />
        <BoardCard style={{ width: itemWidth }} />
        <BoardCard style={{ width: itemWidth }} />
        <BoardCard style={{ width: itemWidth }} />
      </div>
    </div>
  );
};

export default Profile;
