/* eslint-disable react/prop-types */


const FeaturesAmenities = ({featuresAndAmenities}) => {

    console.log(featuresAndAmenities);

    return (
        <div className="bg-white shadow-xl p-10">
            <h1>Features & Amenities</h1>
            <div className="py-10">
                <ul className="list-disc grid grid-cols-2 gap-3">
                   {
                    featuresAndAmenities.map((feature,idx) =>(
                        <li key={idx}>{feature}</li>
                    ))
                   }
                </ul>
            </div>
        </div>
    );
};

export default FeaturesAmenities;