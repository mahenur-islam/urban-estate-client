// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";

const Carousel = () => {
  const sliderImage = [
    {
      name: "House-1",
      url: "https://i.ibb.co/373S0JB/house-1.jpg",
    },
    {
      name: "House-2",
      url: "https://i.ibb.co/Kb8ffXg/house-2.jpg",
    },
    {
      name: "House-3",
      url: "https://i.ibb.co/4SY0NbY/house-3.jpg",
    },
  ];

  return (
    <div
      style={{
        height: "90vh",
        marginTop: "0",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Swiper
        direction="vertical"
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        style={{ height: "100%", position: "relative" }}
      >
        {sliderImage.map((slider) => (
          <SwiperSlide key={slider.name}>
          <div className="absolute  md:h-[90vh] top-0 bottom-0 left-0 opacity-10 right-0 bg-black z-10"></div>
            <img
              src={slider.url}
              alt={slider.name}
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
        <div className="absolute hidden md:block md:bottom-2 md:z-10 md:left-5 md:top-56">
          <SwiperNavButton />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
