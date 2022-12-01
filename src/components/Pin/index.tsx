import React from "react";
import { Masonry } from "masonic";
import { useViewport } from "hooks";
import Header from "components/Header";
import ImageCard from "components/ImageCard";
import "./styles.scss";

const Pin = () => {
  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : viewPort.width / Math.floor(viewPort.width / 200);
  return (
    <div className="pin">
      <Header inPin />
      <img
        src="https://i.pinimg.com/736x/36/41/76/36417642b0d5781e17cb52d61334aadb.jpg"
        alt="123"
        className="pin-image"
      />
      <div className="user-attributes">
        <img
          src="https://i.pinimg.com/736x/36/41/76/36417642b0d5781e17cb52d61334aadb.jpg"
          alt="123"
          className="user-img"
        />
        <div className="user-attribute">
          <div className="user-name">LTNam</div>
          <div className="user-follower">123 Người theo dõi</div>
        </div>
        <button className="follow-btn">Theo dõi</button>
      </div>
      <div className="img-attribute">
        <div className="img-name">ABCDEFGH</div>
        <div className="img-des">
          wsuehrftiuwedshnfbvkjusdhfiusehfgksjdnfbksjef
        </div>
      </div>
      <div className="other">Các ghi khác tương tự</div>
      {/* <Masonry
        items={data}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={ImageCard} // Grid item của component
      /> */}
    </div>
  );
};

export default Pin;
