import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Ourcoffee = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const images = [
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854862/J1_kx7bbh.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854863/J2_gylwn6.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854863/J3_cshpwm.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854862/J4_frddlx.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854862/J5_fseiih.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854862/J6_anustq.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854862/J7_sltlvn.png",
    "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854863/J8_d6f60e.png",
  ];
  const cards = [
    {
      img: "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854986/C1_t4v0df.png",
      text: "Refresh your spirit — cool drinks crafted to chill every moment.",
    },
    {
      img: "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854987/C2_pnvjj9.png",
      text: "Warm your soul with rich, comforting flavors in every sip.",
    },
    {
      img: "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854987/C3_jjilbj.png",
      text: "Freshly baked delights — a taste of joy in every bite.",
    },
    {
      img: "https://res.cloudinary.com/dotn0xzuw/image/upload/v1757854988/C4_w77bll.png",
      text: "From bean to brew — pure energy and passion in every roast.",
    },
  ];
  const toMenu = () => {
    navigate("/menu");
  };
  return (
    <section className="bg-black text-white pt-10 pb-5 px-10 xl:mx-30">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 xl:gap-15 md:mb-15">
        {/* LEFT - IMAGE SLIDES */}
        <div className="overflow-hidden shadow-lg flex justify-center xl:justify-start">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            className="w-full rounded-3xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <img
                  src={src}
                  alt={`coffee-story-${i}`}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT - TEXT */}
        <div className="px-4 text-center xl:text-left xl:px-4">
          <h2 className="text-3xl xl:text-5xl font-bold my-4 font-poppins">
            Our Coffee & Bakery
          </h2>
          <p className="text-gray-100 mb-5 2xl:leading-loose text-lg 2xl:text-xl">
            At Obsidian Sip, we craft every cup of coffee and bake every pastry
            with love and care. From rich espresso to refreshing iced drinks,
            our beverages are made from the finest beans. Our freshly baked
            croissants, cakes, and treats perfectly complement each drink,
            creating a delightful experience for every coffee lover. Join us and
            savor the perfect pairing of flavors.
          </p>
          <button
            className="bg-[#c58c4ce6] text-black px-6 py-2 mb-5 rounded-full hover:bg-[#ddb07ee6] transition font-bold cursor-pointer "
            onClick={toMenu}
          >
            Our Menu
          </button>
        </div>
      </div>

      {/* DESKTOP CARDS */}

      <div className="mb-[56px]">
        <div
          className="hidden md:flex items-center gap-5 max-[648px]:gap-3 h-[230px] cursor-pointer"
          onMouseLeave={() => setActive(null)}
        >
          {cards.map((c, i) => {
            const isActive = active === i;
            const isAnyActive = active !== null;

            // คุมสัดส่วนการขยาย/หด (สำคัญสุด)
            const flexSize = isActive
              ? "flex-[1.6]"
              : isAnyActive
              ? "flex-[0.7]"
              : "flex-1";

            return (
              <div
                key={i}
                className={`relative h-full overflow-hidden rounded-[32px] transition-all duration-[600ms] ease-out basis-0 ${flexSize}`}
                onMouseEnter={() => setActive(i)}
              >
                <img
                  className={`w-full h-full object-cover transition-transform duration-[600ms] ease-out ${
                    isActive ? "scale-[1.05]" : "scale-100"
                  }`}
                  loading="lazy"
                  src={c.img}
                  alt=""
                />

                {/* overlay ดำจาง */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-[600ms] ease-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* ข้อความ */}
                <p
                  className={`absolute top-8 right-5 left-8 text-3xl font-semibold text-white leading-tight z-10
                  transition-all duration-[600ms] ease-out
                  max-[648px]:text-[20px] max-[451px]:text-[18px] max-[376px]:text-base
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                `}
                >
                  {c.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative h-[150px] overflow-hidden rounded-xl"
            >
              <img className="w-full h-full object-cover" src={c.img} alt="" />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute top-8 right-5 left-5 text-sm font-semibold text-white leading-tight">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourcoffee;
