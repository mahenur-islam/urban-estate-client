/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CitySearchBox = ({ label, icon: Icon, selected, image }) => {
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
         url: "/properties",
         query: updatedQuery,
       });
 
       navigate(url);
   };
 
   return (
     <div
       className={`flex flex-wrap justify-center items-center text-black p-2 rounded-sm hover:shadow-xl cursor-pointer ${selected ? 'bg-purple-900 text-white':'bg-slate-100'}`}
       onClick={handleCity}
     >
       <div className="w-full h-20 grid grid-cols-2 justify-center items-center gap-3">
        <img src={image} className="rounded-sm h-20"/>
        <h1 className="font-semibold">{label}</h1>
       </div>
     </div>
   );
 };

export default CitySearchBox;