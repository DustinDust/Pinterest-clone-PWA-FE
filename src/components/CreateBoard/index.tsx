import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "assets/svg/back.svg";
import "./styles.scss";

const CreateBoard = () => {
  const navigate = useNavigate();
  const [boardName, setBoardName] = useState("");
  return (
    <div>
      <div className="create-header">
        <Back className="back-icon" onClick={() => navigate(-1)} />
        <div className="create-name">Tạo bảng</div>
        <button className="create-button" disabled={!boardName}>
          Tạo
        </button>
      </div>
      <div className="create-content">
        <div>Tên bảng</div>
        <input
          type="text"
          placeholder="Thêm"
          className="create-input"
          value={boardName}
          onChange={(value) => setBoardName(value.target.value)}
        />
      </div>
    </div>
  );
};

export default CreateBoard;
