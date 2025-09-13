import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchBestsellers } from "../../services/productApi";
import MenuCard from "../MenuPage/MenuCard";

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBestsellers = async () => {
      try {
        const data = await fetchBestsellers();
        setBestsellers(data.data); // data.data คือ array ของ product
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getBestsellers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
