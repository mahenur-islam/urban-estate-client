import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel";
import Categories from '../../components/Categories/Categories'
import Container from "../../components/shared/Container";
import FeaturedListing from "../../components/FeaturedListing/FeaturedListing";
import CitySearch from "../../components/CitySearch/CitySearch";
// import Apartments from "../Apartments/Apartments";
const Home = () => {
  return (
    <div>
    <Helmet>
      <title>
        Urban Estate | Buy, Rent or Sell
      </title>
    </Helmet>
      <Carousel />
     <Container>
     <Categories />
      <div className="min-h-[60vh]">
       <CitySearch />
      </div>
      <FeaturedListing />
     </Container>
    </div>
  );
};

export default Home;
