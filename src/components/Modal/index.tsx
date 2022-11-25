import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Pin } from "assets/svg/pin.svg";
import { ReactComponent as Share } from "assets/svg/share2.svg";
import { ReactComponent as Save } from "assets/svg/save.svg";
import { ReactComponent as Add } from "assets/svg/add.svg";
import "./styles.scss";

interface ModalProps {
  inProfile?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ inProfile, setIsOpen }: ModalProps) => {
  const navigate = useNavigate();
  const [save, setSave] = useState(false);
  return (
    <>
      <div className="modal-background" onClick={() => setIsOpen(false)}></div>
      <div className="modal">
        <div className="modal-header">
          <Close className="header-button" onClick={() => setIsOpen(false)} />
          <div className="header-text">
            {inProfile ? "Thêm vào hồ sơ" : save ? "Lưu vào bảng" : "Tuỳ chọn"}
          </div>
        </div>
        <div className="modal-buttons">
          {inProfile ? (
            <>
              <div className="img-picker-text">
                Ảnh
                <input
                  id="upload-pin"
                  type="file"
                  accept="image/*"
                  className="img-picker"
                  // style={{
                  //   opacity: 0; position: absolute; top: 0px; height: 100%; width: 100%;
                  // }}
                  onClick={() => navigate("/board/update")}
                ></input>
              </div>
              <div onClick={() => navigate("/board/create")}>Bảng</div>
            </>
          ) : save ? (
            <>
              <div className="modal-board">
                <img
                  src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
                  className="modal-img"
                  alt=""
                />
                Gấu bắc cực
              </div>
              <div className="modal-board">
                <img
                  src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
                  className="modal-img"
                  alt=""
                />
                Gấu bắc cực
              </div>
              <div className="modal-board">
                <img
                  src="https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
                  className="modal-img"
                  alt=""
                />
                Gấu bắc cực
              </div>
              <div
                className="create-board"
                onClick={() => navigate("/board/create")}
              >
                <Add className="create-icon" />
                Tạo bảng
              </div>
            </>
          ) : (
            <>
              <div className="button" onClick={() => setSave(true)}>
                <Pin className="button-icon" />
                Lưu
              </div>
              <div className="button">
                <Share className="button-icon" />
                Gửi
              </div>
              <div className="button">
                <Save className="button-icon" />
                Tải hình ảnh xuống
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
