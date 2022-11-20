import React from "react";
import ImageCard from "components/ImageCard";
import { useViewport } from "hooks";
import { Masonry } from "masonic";
import "./styles.scss";

const data = [
  {
    src: "https://i.pinimg.com/236x/39/4e/28/394e282ff35510fbe7e420b149bc34c4.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/3a/c8/b9/3ac8b9270a263606ca4b26f4884a58a5.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/4d/e9/1e/4de91e3f9a1b4638a0c19b3c987c2413.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/5a/ea/12/5aea122b35a128c47815b94dfba09510.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/4d/e9/1e/4de91e3f9a1b4638a0c19b3c987c2413.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/4d/e9/1e/4de91e3f9a1b4638a0c19b3c987c2413.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/4d/e9/1e/4de91e3f9a1b4638a0c19b3c987c2413.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/39/4e/28/394e282ff35510fbe7e420b149bc34c4.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/3a/c8/b9/3ac8b9270a263606ca4b26f4884a58a5.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/5a/ea/12/5aea122b35a128c47815b94dfba09510.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
  },
  {
    src: "https://i.pinimg.com/236x/4d/e9/1e/4de91e3f9a1b4638a0c19b3c987c2413.jpg"
  }
];

const Feed = () => {
  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : viewPort.width <= 800
      ? viewPort.width / 3
      : viewPort.width <= 1000
      ? viewPort.width / 4
      : viewPort.width / 5;
  return (
    <div className="masonic">
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

export default Feed;
