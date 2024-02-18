/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  //using query string to find cards according to the category we select
  const [params, setParams] = useSearchParams(); //take a state to store params
  const navigate = useNavigate(); //useNavigate - used to navigate the category label

  //function to handleCategory search
  const handleCategory = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

      const updatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });

      navigate(url);
  };

  return (
    <div
      className={`flex justify-center items-center flex-col p-3 rounded-xl min-w-32 group hover:shadow-xl cursor-pointer ${selected ? 'bg-purple-900 text-white':'bg-gray-100'}`}
      onClick={handleCategory}
    >
      <div className="p-2 rounded-full group-hover:bg-purple-900 group-hover:text-white">
        <Icon size={26} />
      </div>
      <h1 className="font-semibold">{label}</h1>
    </div>
  );
};

export default CategoryBox;
