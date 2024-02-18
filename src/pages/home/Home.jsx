import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel";
import Apartments from "../Apartments/Apartments";
const Home = () => {
  return (
    <div>
    <Helmet>
      <title>
        Urban Estate | Buy, Rent or Sell
      </title>
    </Helmet>
      <Carousel />
      <div className="min-h-[60vh]">
        <Apartments />
      </div>
    </div>
  );
};

export default Home;
