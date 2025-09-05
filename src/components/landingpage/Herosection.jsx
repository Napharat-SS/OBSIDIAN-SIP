import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Video1 from "../../assets/HeroVideo/Video1.mp4";
import Video2 from "../../assets/HeroVideo/Video2.mp4";
import Video3 from "../../assets/HeroVideo/Video3.mp4";
const videos = [Video1, Video2, Video3];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // วนเล่นวิดีโอทีละไฟล์
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 7000); // เปลี่ยนทุก 15 วิ (ปรับได้)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* วิดีโอ background */}
      <video
        key={currentVideo[currentVideo]} // บังคับ re-render เวลาเปลี่ยนไฟล์
        src={videos[currentVideo]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay มืดๆ */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Content */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 translate-y-30">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-gray-100 font-libertinus"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          Brewed with passion, Baked with Love
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-2xl mb-6 max-w-2xl drop-shadow-md text-gray-200 font-poppins"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 3, ease: "easeOut" }}
        >
          Special coffee & bakery, anywhere, anytime.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 font-poppins"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 5, ease: "easeOut" }}
        >
          <button className="px-6 py-3 rounded-3xl bg-[#c58c4ce6] text-white font-medium shadow-lg hover:bg-[##ddb07ee6] transition">
            Get Yours Today
          </button>
          <button className="px-6 py-3 rounded-3xl bg-transparent border border-white text-white font-medium hover:bg-white/20 transition">
            Browse Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
