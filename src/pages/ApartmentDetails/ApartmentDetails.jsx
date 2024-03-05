import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import { Helmet } from "react-helmet-async";
import Headers from "./Headers";
import PhotoGallery from "./PhotoGallery";
// import Overview from "./Overview";
import PropertyDescription from "./PropertyDescription";
import PropertyAddress from "./PropertyAddress";
import FeaturesAmenities from "./FeaturesAmenities";
import OwnerInfo from "./OwnerInfo";
import ContactForm from "./ContactForm";


const ApartmentDetails = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/apartments.json")
      .then((res) => res.json())
      .then((data) => {
        const singleApartment = data.find((apartment) => apartment._id === id);
        setApartment(singleApartment);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <Container>
        <Helmet>
          <title>{apartment?.houseName}</title>
        </Helmet>
        <div>
            <Headers apartment={apartment} />
        </div>
        <div>
            <PhotoGallery apartment={apartment}/>
        </div>
        {/* <div className="py-10">
            <Overview apartment={apartment} />
        </div> */}
        <div className="py-10">
            <PropertyDescription apartment={apartment} />
        </div>
        <div className="py-10">
            <PropertyAddress address={apartment.address} />
        </div>
        <div className="py-10">
            <FeaturesAmenities featuresAndAmenities={apartment.featuresAndAmenities} />
        </div>
        <div className="py-10">
            <OwnerInfo featuresAndAmenities={apartment.featuresAndAmenities} />
        </div>
        <div>
          <ContactForm />
        </div>

      </Container>
    </div>
  );
};

export default ApartmentDetails;
