import React from "react";
import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideItem,
} from "bear-carousel";
import "bear-carousel/dist/index.css";

const images = [
  {
    id: 1,
    image: "https://images8.alphacoders.com/105/thumb-1920-1054256.jpg",
  },
  {
    id: 2,
    image: "https://images8.alphacoders.com/105/thumb-1920-1054256.jpg",
  },
  { id: 3, image: "https://images.alphacoders.com/914/thumb-1920-914670.jpg" },
];

const bearSlideItemData: TBearSlideItemDataList = images.map((row) => {
  return {
    key: row.id,
    children: <BearSlideItem imageUrl={row.image} />,
  };
});

const Carousel = () => {
  return (
    <BearCarousel
      data={bearSlideItemData}
      aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
      isEnableLoop={true}
      isEnableAutoPlay={true}
      isEnablePagination={true}
    />
  );
};
export default Carousel;
