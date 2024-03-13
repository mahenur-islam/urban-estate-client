/* eslint-disable react/prop-types */

const PhotoGallery = ({ property }) => {
  const { images } = property;
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="w-full">
        <img src={images?.bedroom1} className="w-full transition duration-300 ease-in-out rounded-md hover:scale-110 hover:shadow-2xl"/>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <img src={images?.bedroom1} className="transition duration-300 ease-in-out rounded-md hover:scale-110 hover:shadow-2xl"/>
        <img src={images?.bedroom1} className="transition duration-300 ease-in-out rounded-md hover:scale-110 hover:shadow-2xl"/>
        <img src={images?.bedroom1} className="transition duration-300 ease-in-out rounded-md hover:scale-110 hover:shadow-2xl"/>
        <img src={images?.bedroom1} className="transition duration-300 ease-in-out rounded-md hover:scale-110 hover:shadow-2xl" />
      </div>
    </div>
  );
};

export default PhotoGallery;
