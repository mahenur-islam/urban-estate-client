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


const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => {
        const singleProperty = data.find((property) => property._id === id);
        setProperty(singleProperty);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <Container>
        <Helmet>
          <title>{property?.houseName}</title>
        </Helmet>
        <div>
            <Headers property={property} />
        </div>
        <div>
            <PhotoGallery property={property}/>
        </div>
        {/* <div className="py-10">
            <Overview property={property} />
        </div> */}
        <div className="py-10">
            <PropertyDescription property={property} />
        </div>
        <div className="py-10">
            <PropertyAddress address={property.address} />
        </div>
        <div className="py-10">
            <FeaturesAmenities featuresAndAmenities={property.featuresAndAmenities} />
        </div>
        <div className="py-10">
            <OwnerInfo featuresAndAmenities={property.featuresAndAmenities} />
        </div>
        <div>
          <ContactForm />
        </div>

      </Container>
    </div>
  );
};

export default PropertyDetails;
