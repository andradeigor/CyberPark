import React from "react";
import BearCarousel, {
  TBearSlideItemDataList,
  BearSlideItem,
} from "bear-carousel";
import "bear-carousel/dist/index.css";

const images = [
  {
    id: 1,
    image: "https://images.alphacoders.com/914/thumb-1920-914670.jpg",
  },
  {
    id: 2,
    image: "https://images4.alphacoders.com/884/thumb-1920-884373.png",
  },
  { id: 3, image: "https://images2.alphacoders.com/199/thumb-1920-199830.jpg" },
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
      isEnableNavButton={true}
    />
  );
};
export default Carousel;
