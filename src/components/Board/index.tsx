import React from "react";
import Header from "components/Header";
import { useViewport } from "hooks";
import { Masonry } from "masonic";
import { data } from "components/Feed";
import ImageCard from "components/ImageCard";
import './styles.scss'

const Board = () => {
  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : Math.floor(viewPort.width / 200) - 1;
  return (
    <div className="board">
      <Header inBoard />
      <div className="board-name">Gấu Bắc Cực</div>
      <Masonry
        items={data}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu là 300px
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={ImageCard} // Grid item của component
      />
    </div>
  );
};
export default Board;
