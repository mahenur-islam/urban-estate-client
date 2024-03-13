/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const PropertyDescription = ({property}) => {
    const {propertyID, propertyPrice,propertySizeOverall, propertyType,builtYear,bedrooms,bathrooms,garages} = property
    const numberOfBedRooms = bedrooms.length;
    const numberOfBathRooms = bathrooms.length;
    console.log(numberOfBedRooms);
    return (
        <div className="shadow-xl bg-white p-3">
            <div className="space-y-7">
                <h1 className="font-bold lg:text-xl">Property Description</h1>
                <p>This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you'll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.</p>
            </div>
            {/* Property Details */}
            <div>
                <h1 className="font-bold text-xl">Property Details</h1>
                <div>
                    <ul className="grid grid-cols-2 gap-2">
                        <li>Property ID {propertyID}</li>
                        <li>Price {propertyID}</li>
                        <li>Property Size {propertySizeOverall}</li>
                        <li>Bathrooms {numberOfBathRooms}</li>
                        <li>Bedrooms {numberOfBedRooms}</li>
                        <li>Garages {garages}</li>
                        <li>Garage Size 100 sqft</li>
                        <li>Year Built  {builtYear}</li>
                        <li>Property Type {propertyType}</li>
                        <li>Property Status for Sale</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PropertyDescription;