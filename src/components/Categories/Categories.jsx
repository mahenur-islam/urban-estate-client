/* eslint-disable no-unused-vars */

import { categories } from "../../../public/categoriesData";
import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category)
  return (
    <div className="min-h-[30vh]">
      <div className="flex gap-3 justify-start items-center pt-10 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected = {category === item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
