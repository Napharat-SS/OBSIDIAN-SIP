import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MenuItem } from "../../data/MenuData";
import MenuCard from "../MenuPage/MenuCard";

const Bestsellers = () => {
  const bestsellerIds = [
    "vanilla-iced-latte",
    "hot-latte",
    "sumatra-mandheling",
    "butter-croissant",
    "cinnamon-roll",
    "iced-espresso-tonic",
    "kenya-aa",
    "banana-bread",
    "hot-caramel-latte",
    "chocolate-iced-coffee",
  ];

  const bestsellers = MenuItem.filter((p) => bestsellerIds.includes(p.id));

  return (
    <section className=" bg-black py-10 px-10 xl:px-20 ">
      <div className="">
        <div className="text-white text-center mb-10">
          <motion.h2
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-4xl md:text-6xl font-medium mb-2 font-kanit"
          >
            Best Sellers
          </motion.h2>

          <motion.p
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 font-kanit "
          >
            Customer favorites you’ll love—crafted fresh, every day.
          </motion.p>
        </div>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Mousewheel]}
          grabCursor
          centeredSlides
          initialSlide={2}
          slidesPerView="auto"
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          mousewheel={{
            invert: true,
            thresholdDelta: 50,
            sensitivity: 1,
          }}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            428: { slidesPerView: 1.2, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 14 },

            1024: { slidesPerView: 3, spaceBetween: 16 },
            1920: { slidesPerView: 5, spaceBetween: 18 },
          }}
        >
          {bestsellers.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <motion.div
                className="w-full mx-auto max-w-sm "
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MenuCard {...product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bestsellers;
