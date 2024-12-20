// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

import { Navigation } from "swiper/modules";
import CardItem from "./CardItem";

const MainSlider = ({ data }) => {
  return (
    <div className="my-5">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation]}
        className="CardSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
