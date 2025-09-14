import { Autoplay, EffectCoverflow, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Ourblog.css"; // <-- CSS ด้านล่าง

const slides = [
  {
    image: "/Blogimg/01Ourblog.png",
    text: "Every cup tells a story, every bite sparks joy.",
  },
  {
    image: "/Blogimg/02Ourblog.jpg",
    text: "Freshly brewed coffee & homemade bakes, made just for you.",
  },
  {
    image: "/Blogimg/03Ourblog.jpg",
    text: "Good days start with good coffee—and a little sweetness.",
  },
  {
    image: "/Blogimg/04Ourblog.png",
    text: "Your vibe, your brew. Let’s make today special.",
  },
  {
    image: "/Blogimg/05Ourblog.jpg",
    text: "Because coffee isn’t just a drink, it’s an experience.",
  },
];

export default function Ourblog() {
  return (
    <div className="expo-wrap">
      <Swiper
        modules={[EffectCoverflow, Parallax, Autoplay]}
        effect="coverflow"
        centeredSlides
        slidesPerView="auto" // ความกว้างสไลด์กำหนดใน CSS
        spaceBetween={32}
        loop
        speed={800}
        parallax={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2.4,
          slideShadows: false,
        }}
        className="expo-slider"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="expo-slide">
            {/* รูป + parallax */}
            <div className="img-wrap" data-swiper-parallax="-40%">
              <img src={s.image} alt={`slide-${i}`} />
            </div>

            {/* ตัวหนังสือ overlay + parallax */}
            <div className="caption" data-swiper-parallax="-80">
              <h3 className="caption-text">{s.text}</h3>
            </div>

            {/* ไล่โทนมืดด้านล่างเพื่อให้อ่านตัวหนังสือง่าย */}
            <div className="shade" aria-hidden />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
