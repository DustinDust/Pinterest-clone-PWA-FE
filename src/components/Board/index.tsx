import React, { CSSProperties } from "react";
import './styles.scss'

const Board = ({ style }: { style: CSSProperties }) => {
  return (
    <div style={style} className="board">
      <img
        src="https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
        alt=""
        className="img"
      />
      <div className="name">Gấu bắc cực</div>
      <div className="count">2 Ghim</div>
    </div>
  );
};

export default Board;
