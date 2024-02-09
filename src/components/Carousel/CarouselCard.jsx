/* eslint-disable react/prop-types */
const CarouselCard = ({slide}) => {
  const {name, url, text, textSubtitle} = slide;
  console.log(name, url, text, textSubtitle)
  return (
    <div>
      <div className="card w-64 lg:w-96 bg-base-100 shadow-xl">
        <figure className="h-[20vh]">
          <img
            src={url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
