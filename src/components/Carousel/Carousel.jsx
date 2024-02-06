// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";

const Carousel = () => {
  const sliderImage = [
    {
      name: "House-1",
      url: "https://i.ibb.co/373S0JB/house-1.jpg",
    },
    {
      name: "House-2",
      url: " https://i.ibb.co/Kb8ffXg/house-2.jpg",
    },
    {
      name: "House-3",
      url: "https://i.ibb.co/4SY0NbY/house-3.jpg",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliderImage.map((slider) => (
          <SwiperSlide key={slider.name}>
            <img src={slider.url} alt={slider.name}  />
          </SwiperSlide>
       
        ))}
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

export default Carousel;
