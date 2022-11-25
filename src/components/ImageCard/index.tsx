import React, { useState } from "react";
import { ReactComponent as Dot } from "assets/svg/dot.svg";
import "./styles.scss";
import Modal from "components/Modal";

interface DataCard {
  index: number;
  width: number;
  data: {
    src: string;
  };
}

const ImageCard = (data: DataCard) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
      <img className="img" src={data.data.src} />
      <div className="title-wrapper">
        <div className="title">asdasdasasdasdasddsdefsdfwertwerfewf</div>
        <Dot onClick={() => setIsOpen(true)}/>
      </div>
    </div>
  );
};

export default ImageCard;
