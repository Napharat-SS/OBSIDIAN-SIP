import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const AboutUs = () => {
  const images = [
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757861639/cafe1_ruogun.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757861639/cafe2_ldyi50.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757861639/cafe3_zq96jg.png",
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
          At ObsidianSip, our story begins with teamwork. As a group of five (Noon, Arm, Yeen, Tee, Earth), we spent countless late nights working together on projects, with coffee as our constant source of energy and inspiration. Coffee was more than just a drink; it created the atmosphere that fueled our collaboration and became an essential part of every morning.

          </p>
          <p>
           From this shared experience, we recognized a common challenge faced by many, especially busy office workers who need for quality coffee and bakery items that are both affordable and accessible amidst the fast pace of daily life.
          </p>
          <p>
            That is why we created ObsidianSip, a web application designed to deliver convenience, quality, and value straight to you. The name itself reflects our vision: “Obsidian” captures the bold, dark elegance of coffee, mirroring the strength and style of our brand, while “Sip” symbolizes the small yet powerful moments that recharge and bring joy to each day. Together, our mission is to blend passion, teamwork, and innovation into every cup, making your coffee experience as meaningful as ours.
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
