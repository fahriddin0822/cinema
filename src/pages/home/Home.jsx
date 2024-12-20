import React, { useEffect, useState } from "react";
import { memo } from "react";
import { request } from "@/api";
import MainSlider from "@/components/slider/MainSlider";
import CardSlider from "@/components/slider/CardSlide";
import Header from "../../components/header/Header";

const sliderData = [
  "https://virtus-img.cdnvideo.ru/images/as-is/plain/ec/ec7db55d-56ae-45b9-9d84-c6f238e31294.jpg@jpg",
  "https://cdnb.artstation.com/p/assets/images/images/073/641/037/large/dfghfgj-2ba91206-cover-resize.jpg?1710154719",
  "https://i.ytimg.com/vi/ODSrggptXR8/maxresdefault.jpg",
  "https://i.ytimg.com/vi/hkg_dDv2VY0/hqdefault.jpg",
];
const cardSliderData = [
  {
    image:
      "https://avatars.dzeninfra.ru/get-zen-logos/271828/pub_62f0a2e9d7110079d1d6ff31_65a6c2c3318c85162bc9012b/xxh",
    title: "Panda",
    genre: "Cartoon",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF1000,1000_QL80_.jpg",
    title: "Titanic",
    genre: "Dramatic",
  },
  {
    image:
      "https://sun6-20.userapi.com/0gMPzLonVMZCQxXnjzZEuyBjPoevJ5EgLjdLBQ/DYxtGr783_Q.jpg",
    title: "Interstellar",
    genre: "Documentary",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=41f9d6e0a593e1adcff71d49e562bf1f_sr-5675359-images-thumbs&n=13",
    title: "Inception",
    genre: "Documentary",
  },
  {
    image:
      "https://sun6-21.userapi.com/QfxZfjnBAeLgiN0X9D7RpDN47WQ1nd7vIgHsDA/Y8e116TDpUY.jpg",
    title: "Oppenheimer",
    genre: "Hystory of end of 2nd world war",
  },
  {
    image:
      "https://sun6-21.userapi.com/QfxZfjnBAeLgiN0X9D7RpDN47WQ1nd7vIgHsDA/Y8e116TDpUY.jpg",
    title: "Oppenheimer",
    genre: "Hystory of end of 2nd world war",
  },
  {
    image:
      "https://sun6-21.userapi.com/QfxZfjnBAeLgiN0X9D7RpDN47WQ1nd7vIgHsDA/Y8e116TDpUY.jpg",
    title: "Oppenheimer",
    genre: "Hystory of end of 2nd world war",
  },
];

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    request("/discover/movie").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container w-[100%] overflow-hidden">
        <Header />
        <MainSlider data={sliderData} />

        <CardSlider data={cardSliderData} />
      </div>
    </div>
  );
};

export default memo(Home);
