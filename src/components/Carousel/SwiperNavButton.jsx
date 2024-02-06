import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
    const swiper = useSwiper();
    return (  
        <div>
            <button className="bg-gray-700 rounded-xl text-white p-2" onClick={()=> swiper.slidePrev()}>prev</button>
            <button onClick={()=> swiper.slideNext()}>next</button>
        </div>
    );
};

export default SwiperNavButton;