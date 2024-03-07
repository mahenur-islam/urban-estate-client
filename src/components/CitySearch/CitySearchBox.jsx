/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CitySearchBox = ({ label, icon: Icon, selected }) => {
   //using query string to find cards according to the city we select
   const [params, setParams] = useSearchParams(); //take a state to store params
   const navigate = useNavigate(); //useNavigate - used to navigate the city label
 
   //function to handleCity search
   const handleCity= () => {
     let currentQuery = {};
     if (params) {
       currentQuery = qs.parse(params.toString());
     }
 
       const updatedQuery = { ...currentQuery, city: label };
       const url = qs.stringifyUrl({
         url: "/apartments",
         query: updatedQuery,
       });
 
       navigate(url);
   };
 
   return (
     <div
       className={`flex justify-center items-center  min-w-32 group hover:shadow-xl cursor-pointer ${selected ? 'bg-purple-900 text-white':'bg-gray-100'}`}
       onClick={handleCity}
     >
       {/* <div className="p-1 rounded-full">
         <Icon size={26} />
       </div> */}
       <h1 className="font-semibold">{label}</h1>
     </div>
   );
 };

export default CitySearchBox;