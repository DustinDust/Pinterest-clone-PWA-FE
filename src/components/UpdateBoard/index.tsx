import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Add } from "assets/svg/add.svg";
import "./styles.scss";

const UpdateBoard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="update-header">
        <Back className="back-icon" onClick={() => navigate(-1)} />
        <div className="update-name">Lưu vào bảng</div>
      </div>
      <div className="update-content">
        <div className="board-item">
          <img
            src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
            className="board-img"
            alt=""
          />
          Gấu bắc cực
        </div>
        <div className="board-item">
          <img
            src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
            className="board-img"
            alt=""
          />
          Gấu bắc cực
        </div>
        <div className="board-item">
          <img
            src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
            className="board-img"
            alt=""
          />
          Gấu bắc cực
        </div>
        <div className="create-board" onClick={() => navigate("/board/create")}>
          <Add className="create-icon" />
          <div className="create-icon-text">Tạo bảng</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBoard;
