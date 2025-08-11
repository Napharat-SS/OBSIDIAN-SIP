import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroList } from "../../data/HeroBG";

const SlideRight = (delay) => {
  return {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Herosection = () => {
  const [activeData, setActiveData] = useState(HeroList[0]);
  const MotionLink = motion(Link);
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
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="flex flex-col justify-center py-14 lg:pl-10 xl:max-w-3xl order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left  ">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${activeData.id}`}
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${activeData.titlecolor} title text-shadow`}
                >
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeData.id}`}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${activeData.desccolor} description text-shadow`}
                >
                  {activeData.description}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <MotionLink
                  to="menu"
                  key={`btn-${activeData.id}`}
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="orderbutton"
                >
                  Order Now
                </MotionLink>
              </AnimatePresence>

              {/*list seprator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="list-seprator "
              >
                <div className="lg:w-60 w-25 h-0.5 bg-white"></div>
                <p className="text-sm lg:text-base">Special Menu</p>
                <div className="lg:w-60 w-25 h-0.5 bg-white"></div>
              </motion.div>
              {/*image switcher */}
              <div className="grid grid-cols-4 gap-10 items-end">
                {HeroList.map((HeroData) => {
                  return (
                    <div
                      onClick={() => handleActiveData(HeroData)}
                      className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                    >
                      <div className="flex justify-center ">
                        <img
                          src={HeroData.image}
                          alt="product-img"
                          className={`${
                            HeroData.sizeImg
                          } object-cover img-shadow ${
                            activeData.image === HeroData.image
                              ? "opacity-100 scale-110"
                              : "opacity-50"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white text-center">
                          {HeroData.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*Hero img */}

          <div className="flex flex-col justify-end items-center relative order-1 md:order-2 w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -50,
                  transition: {
                    duration: 0.8,
                    ease: easeInOut,
                  },
                }}
                src={activeData.image}
                alt="Hero-img"
                className={`${activeData.sizeimgr} img-shadow relative z-10 object-cover`}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                className="text-white/10 text-[250px] font-extrabold absolute top-0 left-0.5 -translate-x-0.5 -translate-y-0.5"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/*icon */}
        </div>
      </motion.div>
    </>
  );
};

export default Herosection;
