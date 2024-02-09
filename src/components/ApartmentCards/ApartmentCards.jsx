/* eslint-disable react/prop-types */
const ApartmentCards = ({ apartment }) => {
    const {houseName, images, propertyPrice} = apartment;
    return (
        <div>
            <div className="card col-span-1 cursor-pointer w-full md:w-64 lg:w-80 glass mx-auto group">
                <figure>
                    <img
                        src={images.bedroom1}
                        alt={houseName}
                        className="group-hover:scale-110 transition-all duration-700"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{houseName}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{propertyPrice}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCards;
