/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Heading from "../../components/shared/Heading";
import Container from "../../components/shared/Container";
import { useEffect, useState } from "react";
import ApartmentCards from "../../components/ApartmentCards/ApartmentCards";
import Categories from "../../components/Categories/Categories";
import { useSearchParams } from "react-router-dom";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    fetch("./apartments.json")
      .then((res) => res.json())
      .then((data) => {
        if (category && category.toLowerCase() !== "all") {
          const filteredApartments = data.filter(
            (apartment) => apartment.category === category
          );
          setApartments(filteredApartments);
        } else {
          setApartments(data);
        }
      });
  }, [category]);

  return (
    <Container>
      <div>
        <Categories />
      </div>
      <Heading
        title={"Discover Our Apartments"}
        subtitle={"Ready apartments are available for rent or sell"}
      />

      {apartments && apartments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10 px-2 min-h-[40vh]">
          {apartments.map((apartment) => (
            <ApartmentCards
              key={apartment._id}
              apartment={apartment}
            ></ApartmentCards>
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
    </Container>
  );
};

export default Apartments;
