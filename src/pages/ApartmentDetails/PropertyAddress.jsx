import GoogleMapLocation from "./GoogleMapLocation";

/* eslint-disable react/prop-types */
const PropertyAddress = ({address}) => {
    const {country, city, state, roadNumber, houseNumber} = address
    console.log(address);
    return (
        <div className="bg-white py-10 px-3 shadow-xl">
            <div>
            <h1 className="font-bold">Address</h1>
            </div>
            <div>
                <ul>
                    <li>Address: {country +' '+city +' ' + roadNumber+' ' + houseNumber+' ' + state}</li>
                    <li>City:</li>
                    <li>State</li>
                    <li>Country:</li>
                </ul>
                <div className="w-96">
                    <GoogleMapLocation />
                </div>
            </div>
        </div>
    );
};

export default PropertyAddress;