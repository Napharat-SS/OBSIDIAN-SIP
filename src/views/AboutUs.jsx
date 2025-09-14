import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const AboutUs = () => {
  const images = [
    "/aboutus/cafe1.png",
    "/aboutus/cafe2.png",
    "/aboutus/cafe3.png",
  ];

  return (
    <section className="bg-black text-white py-12 px-6 md:px-25 md:py-20 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* รูปด้านซ้าย (Swiper) */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            className="w-full h-full"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`about-${i}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ข้อความด้านขวา */}
        <div className="flex flex-col space-y-5 text-lg leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins">
            About Us
          </h2>
          <p>
            Founded in the heart of Bangkok, Obsidian Sip began with a dream to
            bring people together through coffee and pastries. From our very
            first brew, we have stayed true to our mission: crafting beverages
            and treats that warm the soul and spark connection.
          </p>
          <p>
            We believe in three values: quality, sustainability, and
            hospitality. Every bean we roast and every pastry we bake is chosen
            with care — ensuring that each sip and bite reflects our passion and
            dedication. Whether it’s your morning latte, an afternoon croissant,
            or a sweet indulgence, we’re here to make every moment special.
          </p>
          <p>
            At Obsidian Sip, it’s not just about coffee and pastries. It’s about
            creating a welcoming space where stories are shared, friendships
            grow, and memories are made.
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-40 px-6 flex justify-center items-center">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight font-poppins max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          “Every sip and bite tells our story of passion and care.”
        </motion.h2>
      </div>
    </section>
  );
};

export default AboutUs;
