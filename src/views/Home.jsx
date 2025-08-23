import BakeryDetail from "../components/landingpage/bakeryDetail.jsx";
import Detailbean from "../components/landingpage/Detailbean.jsx";
import Herosection from "../components/landingpage/Herosection";
import Newmenu from "../components/landingpage/Newmenu";
import { ReviewCard } from "../components/landingpage/ReviewCard";
import WhyDifferent from "../components/landingpage/WhyDifferent";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Newmenu />
      <Detailbean />
      <BakeryDetail />
      <WhyDifferent />
      <ReviewCard />
    </div>
  );
};

export default Home;
