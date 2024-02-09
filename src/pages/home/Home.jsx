import Carousel from "../../components/Carousel/Carousel";
import Apartments from "../Apartments/Apartments";
const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="min-h-[60vh]">
        <Apartments />
      </div>
    </div>
  );
};

export default Home;
