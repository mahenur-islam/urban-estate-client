/* eslint-disable no-unused-vars */
import Heading from "../shared/Heading";
import { categories } from "../../../public/categoriesData";
import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category)
  return (
    <div className="min-h-[30vh]">
      <Heading title={"Category"} />
      <div className="flex gap-3 justify-start items-center py-10 overflow-x-auto">
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
