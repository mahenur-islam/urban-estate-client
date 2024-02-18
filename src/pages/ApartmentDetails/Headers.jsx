/* eslint-disable react/prop-types */
import { CiHeart, CiBookmark, CiShare2, CiClock2 } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { PiBathtub } from "react-icons/pi";
import { LuKanbanSquareDashed } from "react-icons/lu";

const Headers = ({apartment}) => {
    return (
        <div className="py-10 flex justify-between items-center w-full">
        <div>
          <h1 className="text-sm md:text-xl lg:text-4xl font-bold">
            {apartment?.houseName}
          </h1>
          <div className="flex gap-1">
            <p className="font-semibold">{apartment?.address?.city}, </p>
            <p className="font-semibold">{apartment?.address?.state}, </p>
            <p className="font-semibold">{apartment?.address?.country} </p>
            <div className="text-gray-400">|</div>
            <p className="text-orange-700 font-semibold flex justify-center items-center gap-2"><FaCircle size={10}/>For Sell </p>
            <div className="text-gray-400">|</div>
            <p className="font-semibold flex justify-center items-center gap-1"> <CiClock2 />6 years ago</p>
            <div className="text-gray-400">|</div>
            <p className="font-semibold">Review</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-1/2 py-5">
              <p className="flex justify-start items-center gap-2"><IoBedOutline size={24}/>Bed</p>
              <p className="flex justify-start items-center gap-2"><PiBathtub size={24}/>Bath</p>
              <p className="flex justify-start items-center gap-2"><LuKanbanSquareDashed size={24}/>sft</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              className="p-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-700 text-gray-800 hover:border-gray-600 hover:text-gray-600  dark:border-gray-300 dark:text-gray-700 dark:hover:text-gray-700 dark:hover:border-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all duration-300"
            >
              <CiHeart size={26} />
            </button>
            <button
              type="button"
              className="p-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-700 text-gray-800 hover:border-gray-600 hover:text-gray-600  dark:border-gray-300 dark:text-gray-700 dark:hover:text-gray-700 dark:hover:border-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all duration-300"
            >
              <CiBookmark size={26} />
            </button>
            <button
              type="button"
              className="p-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-700 text-gray-800 hover:border-gray-600 hover:text-gray-600  dark:border-gray-300 dark:text-gray-700 dark:hover:text-gray-700 dark:hover:border-gray-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all duration-300"
            >
              <CiShare2 size={26} />
            </button>
          </div>
          <div className="text-2xl md:text-3xl font-bold">
            $14400 <small className="font-normal">/month</small>
          </div>
        </div>
      </div>
    );
};

export default Headers;