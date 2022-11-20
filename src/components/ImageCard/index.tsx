import React from "react";
import { ReactComponent as Dot } from "assets/svg/dot.svg";
import './styles.scss'

interface DataCard {
  index: number;
  width: number;
  data: {
    src: string;
  };
}

const ImageCard = (data: DataCard) => {
  return (
    <div className="card">
      <img className="img" src={data.data.src} />
      <div className="title-wrapper">
        <div className="title">asdasdasasdasdasddsdefsdfwertwerfewf</div>
        <Dot />
      </div>
    </div>
  );
};

export default ImageCard;
