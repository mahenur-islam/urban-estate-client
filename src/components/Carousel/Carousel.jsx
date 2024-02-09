import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";
import CarouselCard from "./CarouselCard";
import Button from '../../components/shared/Button/Button'

const Carousel = () => {
  const sliderContent = [
    {
      name: "House-1",
      url: "https://i.ibb.co/373S0JB/house-1.jpg",
      text: "Beautiful House 1",
      textSubtitle: "Details about House 1",
    },
    {
      name: "House-2",
      url: "https://i.ibb.co/Kb8ffXg/house-2.jpg",
      text: "Stunning House 2",
      textSubtitle: "Details about House 2",
    },
    {
      name: "House-3",
      url: "https://i.ibb.co/4SY0NbY/house-3.jpg",
      text: "Cozy House 3",
      textSubtitle: "Details about House 3",
    },
  ];

  return (
    <div
      style={{
        height: "90vh",
        marginTop: "0",
        // position: "absolute",
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
        {sliderContent.map((slide) => (
          <SwiperSlide key={slide.name}>
            <div
              className="absolute  md:h-[90vh] top-0 bottom-0 left-0 opacity-40 right-0 bg-black z-10"
              style={{ zIndex: 10 }}
            ></div>
            <img
              src={slide.url}
              alt={slide.name}
              // style={{ width: "100%", height: "100%", position: "absolute" }}
              className="w-full h-full absolute"
            />
            <div className="grid grid-cols-2 gap-10 justify-between items-center absolute top-20 py-10 lg:px-32 w-full z-10 col-end-2 mx-auto">
              <div className="space-y-3">
                <h2 className="text-white text-2xl lg:text-5xl font-bold">{slide.text}</h2>
                <p className="text-white text-xl font-semibold">{slide.textSubtitle}</p>
                <div className="w-1/4">
                <Button label = 'See Details' />
                </div>
              </div>
              <div>
                <CarouselCard slide={slide}/>
              </div>
            </div>
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
