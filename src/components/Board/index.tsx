import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Masonry, useInfiniteLoader } from "masonic";
import { useViewport } from "hooks";
import Header from "components/Header";
import ImageCard from "components/ImageCard";
import { State } from "redux-saga/reducers";
import { getPins } from "./actions";
import "./styles.scss";
import { useParams } from "react-router-dom";

export interface PinsRequest {
  boardId: number;
  pageNum: number;
  pageSize: number;
}

export interface PinsResult {
  id: number;
  url: string;
  src: string;
  filename: string;
  name: string;
  createdAt: string;
}

const Board = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [pins, setPins] = useState<PinsResult[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [conti, setConti] = useState(true);
  const getPinsResult = useSelector((state: State) => state.getPinsResult);

  useEffect(() => {
    setPins([]);
    dispatch(
      getPins({
        boardId: boardId as unknown as number,
        pageNum: 1,
        pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      } as PinsRequest)
    );
  }, []);

  useEffect(() => {
    if (getPinsResult) {
      setPins([
        ...pins,
        ...(getPinsResult?.response as unknown as PinsResult[])
      ]);
      if (
        (getPinsResult?.response as unknown as PinsResult[]).length <
        parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      ) {
        setConti(false);
      }
      setPageNum((pageNum) => pageNum + 1);
    }
  }, [getPinsResult]);

  const fetchMoreItems = (startIndex: number, stopIndex: number) => {
    if (conti) {
      dispatch(
        getPins({
          boardId: boardId as unknown as number,
          pageNum: pageNum,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        } as PinsRequest)
      );
    }
  };

  const maybeLoadMore = useInfiniteLoader(fetchMoreItems, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: 32,
    threshold: 3
  });

  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : Math.floor(viewPort.width / 200) - 1;

  return (
    <div className="board">
      <Header inBoard />
      <div className="board-name">Gấu Bắc Cực</div>
      {pins && (
        <Masonry
          style={{ paddingBottom: "72px" }}
          items={pins}
          columnGutter={8} // Set khoảng cách giữa các column
          columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu là 300px
          overscanBy={5} // Giá trị để render trước khi scroll tới
          render={ImageCard} // Grid item của component
          onRender={maybeLoadMore}
        />
      )}
    </div>
  );
};
export default Board;
