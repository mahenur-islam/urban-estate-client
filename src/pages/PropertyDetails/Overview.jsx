/* eslint-disable react/prop-types */
import { IoBedOutline } from "react-icons/io5";
const Overview = ({property}) => {
    const {bedrooms,bathrooms,garages,propertyType,builtYear,propertySizeOverall} = property;
    return (
       <div className="grid grid-cols-3 py-10 w-1/2 gap-10 bg-white shadow-lg rounded-md">
         <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold">{bedrooms}</h1>
                <p>3</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold">{bathrooms}</h1>
                <p>3</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold"></h1>
                <p>3</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold">Bedrooms</h1>
                <p>3</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold">Bedrooms</h1>
                <p>3</p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <div className="outline outline-1 rounded-lg p-2">
            <IoBedOutline size={30}/>
            </div>
            <div>
                <h1 className="font-semibold">Bedrooms</h1>
                <p>3</p>
            </div>
        </div>
       </div>
    );
};

export default Overview;