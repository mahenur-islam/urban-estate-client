/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { cities } from "../../../public/Cities";
import CitySearchBox from "./CitySearchBox";

const CitySearch = () => {
    const [params, setParams] = useSearchParams()
    const city = params.get('city')
    console.log(city)
   
  return (
    <div className="min-h-[30vh]">
       <div className="flex flex-wrap gap-3 justify-start items-center">
        {cities.map((item) => (
          <CitySearchBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected = {city === item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySearch;