import { useSwiper } from "swiper/react";
import { FaArrowRight,  FaArrowLeft } from "react-icons/fa6";

const SwiperNavButton = () => {
    const swiper = useSwiper();
    return (  
        <div className="flex flex-col gap-1">
            <button className="bg-gray-700 opacity-60 hover:bg-white hover:opacity-100 hover:text-black rounded-full text-white p-4" onClick={()=> swiper.slidePrev()}><FaArrowLeft /></button>
            <button className="bg-gray-700 opacity-60 hover:bg-white hover:opacity-100 hover:text-black rounded-full text-white p-4"onClick={()=> swiper.slideNext()}><FaArrowRight /></button>
        </div>
    );
};

export default SwiperNavButton;