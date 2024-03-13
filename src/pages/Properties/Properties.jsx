/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Heading from "../../components/shared/Heading";
import Container from "../../components/shared/Container";
import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import PropertyCards from "../../components/PropertyCards/PropertyCards";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const category = params.get("category");
  const city = params.get("city");

  useEffect(() => {
    setLoading(true);
    fetch("./properties.json")
      .then((res) => res.json())
      .then((data) => {
        let filteredProperties = data;

        if (category && category.toLowerCase() !== "all") {
          filteredProperties = filteredProperties.filter(
            (property) => property.category === category
          );
        }

        if (city && city.toLowerCase() !== "all") {
          filteredProperties = filteredProperties.filter(
            (property) => property.address.city === city
          );
        }

        setProperties(filteredProperties);
        setLoading(false);
      });
  }, [category, city]);

  if (loading) return <Loader />;

  return (
    <Container>
      <Heading
        center
        title={"Discover Our Apartments"}
        subtitle={"Ready apartments are available for rent or sell"}
      />

      <div>
        <Categories />
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-12">
        <div className="col-span-3 p-2">
          {/* <h1 className="font-bold text-center text-xl mb-5">Filter Your Property</h1> */}
          {/* <CitySearch /> */}
          <div className="divider"></div>
        </div>
        <div className="col-span-9">
          {properties && properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 px-2 min-h-[40vh]">
              {properties.map((property) => (
                <PropertyCards
                  key={property._id}
                  property={property}
                ></PropertyCards>
              ))}
            </div>
          ) : (
            <div className="w-full mx-auto text-center">
              <Heading
                title={"Nothing found with this query"}
                subtitle={"Please select another category"}
                center
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Properties;
