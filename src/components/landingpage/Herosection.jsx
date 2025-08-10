import { motion } from "framer-motion";
import { useState } from "react";
import { HeroList } from "../../data/HeroBG";
import Navbar from "./Navbar";
const Herosection = () => {
  const [activeData, setActiveData] = useState(HeroList[0]);
  const handleActiveData = (HeroData) => {
    setActiveData(HeroData);
  };
  return (
    <>
      <motion.div
        initial={{ backgroundImage: `url(${activeData.bgimg})` }}
        animate={{ backgroundImage: `url(${activeData.bgimg})` }}
        transition={{ duration: 0.8 }}
        className="bg-cover bg-center min-h-screen"
      >
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          <div className="flex flex-col justify-center py-14 md:py xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="title text-shadow">{activeData.title}</h1>
              <p className="description">{activeData.description}</p>
              <button className="getbutton">Order Now</button>
              {/*list seprator */}
              <div className="list-seprator ">
                <div className="lg:w-45 w-25 h-0.5 bg-white"></div>
                <p className="text-sm lg:text-base">Special Menu</p>
                <div className="lg:w-45 w-25 h-0.5 bg-white"></div>
              </div>
              {/*image switcher */}
              <div className="grid grid-cols-4 gap-10">
                {HeroList.map((HeroData) => {
                  return (
                    <div className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200">
                      <div className="flex justify-center">
                        <img
                          src={HeroData.image}
                          alt="product-img"
                          className={`w-[80px] img-shadow ${
                            activeData.image === HeroData.image
                              ? "opacity-100 scale-110"
                              : "opacity-50"
                          }`}
                        />
                      </div>
                      <div>
                        <p>{HeroData.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*Hero img */}
          {/*icon */}
        </div>
      </motion.div>
    </>
  );
};

export default Herosection;
