import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";


/* eslint-disable react/prop-types */
const ApartmentCards = ({ apartment }) => {
  const {
    houseName,
    images,
    propertyPrice,
    address,
    propertyType,
    propertySizeOverall,
    bedrooms,
    category,
    availability,
  } = apartment;
  return (
    <div>
      <Link
        to={`/apartment/${apartment?._id}`}
        className="card col-span-1 cursor-pointer w-full md:w-64 lg:w-80 glass mx-auto group"
      >
        <figure className="relative">
          <img
            src={images.bedroom1}
            alt={houseName}
            className="group-hover:scale-110 transition-all duration-700 h-[250px]"
          />
          <p className="font-semibold absolute bottom-2 left-2 z-10 p-1 rounded-sm bg-slate-200">
            ${propertyPrice} <small>/month</small>
          </p>
        </figure>
        <div className="px-5 py-2">
          <div className="w-full flex justify-start items-center gap-5">
            <small className="text-violet-800 font-semibold">{category}</small>
          </div>

          <div>
            <h2 className="card-title">{houseName}</h2>
            <small>
              {address.state} , {address.city} , {address.country}
            </small>
            <div className="grid grid-cols-3 items-center -ml-5 mt-4">
              <p className="text-sm flex justify-center items-center gap-2 hover:text-violet-800">
                <IoBedOutline size={20} />
                {bedrooms.length} bed
              </p>
              <p className="text-sm flex justify-center items-center gap-2 hover:text-violet-800">
                <PiBathtubLight size={20} />
                {bedrooms.length} bath
              </p>
              <p className="text-sm flex justify-center items-center gap-2 hover:text-violet-800">
                <SlSizeFullscreen size={16} />
                {propertySizeOverall} bed
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between -mt-4 mb-2">
            <p className="text-sm ">{availability}</p>
            <div className="grid grid-cols-3 gap-3">
                <FaRegHeart title="add to favourit"/>
                <FiShare title="share with friend" />
                <CgDetailsMore title="show details"/>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentCards;
