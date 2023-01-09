import React, { useEffect, useState } from "react";
// import { Masonry } from "masonic";
// import { useViewport } from "hooks";
import Header from "components/Header";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux-saga/reducers";
import { getBoardsHasPin, getPin } from "./actions";
import { useParams } from "react-router-dom";
import { PinResult } from "components/Board";
import BoardCard from "components/BoardCard";
import { useViewport } from "hooks";
import Modal from "components/Modal";

export interface PinRequest {
  pinId: number;
}

export interface BoardHasPin {
  id: number;
  name: string;
  thumbnail: string;
  user: {
    id: number;
    username: string;
    displayName: string;
    avatarUrl: string;
  };
}

const Pin = () => {
  const [save, setSave] = useState(false);
  const { pinId } = useParams();
  const dispatch = useDispatch();

  const getPinResult = useSelector((state: State) => state.getPinResult);
  const pin = getPinResult?.response as unknown as PinResult;

  const getBoardsHasPinResult = useSelector(
    (state: State) => state.getBoardsHasPinResult
  );
  const boards = getBoardsHasPinResult?.response
    ?.data as unknown as BoardHasPin[];

  useEffect(() => {
    if (pinId) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest));
      dispatch(getBoardsHasPin({ pinId: Number(pinId) } as PinRequest));
    }
  }, []);

  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 900 ? viewPort.width / 2 : viewPort.width / 3;

  return (
    <div className="pin">
      <Header inPin setSave={setSave}/>
      {save && <Modal saveOpen pinId={pin.id} src={pin.url} setIsOpen={setSave}/>}
      {pin && <img src={pin.url} alt={pin.name} className="pin-image" />}
      <div className="img-attribute">
        <div className="img-name">{pin && pin.name}</div>
      </div>
      <div className="img-note" style={{marginBottom: "-48px"}}>Các bảng lưu pin</div>
      <div style={{ display: "flex" }}>
        {boards &&
          boards.map((board, i) => (
            <BoardCard
              style={{ width: itemWidth }}
              key={board.id}
              boardInPin={board}
            />
          ))}
      </div>
    </div>
  );
};

export default Pin;
