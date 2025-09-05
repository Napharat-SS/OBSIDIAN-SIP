import Bestsellers from "../components/landingpage/Bestsellers/Bestsellers.jsx";
import Ourblog from "../components/landingpage/blog/Ourblog.jsx";
import { Community } from "../components/landingpage/Community.jsx";
import Herosection from "../components/landingpage/Herosection";
import Ourcoffee from "../components/landingpage/Ourcoffee.jsx";
import { Promotion } from "../components/landingpage/Promotion.jsx";
import WhyDifferent from "../components/landingpage/WhyDifferent.jsx";
const Home = () => {
  return (
    <div className="bg-black">
      <Herosection />
      <Bestsellers />
      <Ourcoffee />
      <Community />
      <Promotion />
      <Ourblog />
      <WhyDifferent />
    </div>
  );
};

export default Home;
