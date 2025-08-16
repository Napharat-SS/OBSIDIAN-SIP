import Detailbean from "../components/landingpage/detailbean";
import Footer from "../components/landingpage/Footer";
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
      <WhyDifferent />
      <ReviewCard />
      <Footer />
    </div>
  );
};

export default Home;
