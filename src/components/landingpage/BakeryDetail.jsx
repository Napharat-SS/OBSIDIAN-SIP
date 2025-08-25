import { motion } from "framer-motion";
import cake1 from "../../assets/Homeimg/cake1.jpg";
import cake2 from "../../assets/Homeimg/cake2.jpg";
import cake3 from "../../assets/Homeimg/cake3.jpg";
import cake4 from "../../assets/Homeimg/cake4.jpg";
import cake5 from "../../assets/Homeimg/cake5.jpg";
import cake6 from "../../assets/Homeimg/cake6.jpg";

const images = [cake1, cake2, cake3, cake4, cake5, cake6];

const BakeryDetail = () => {
  return (
    <section className="px-6 md:px-15 py-10 md:py-32 bg-[url('/bgofcake.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Left */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ rotateX: 90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-libertinus text-gray-700 xl:text-gray-200 py-4 text-4xl md:text-6xl text-center md:text-left"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
          >
            Our Bakery & Dessert
          </motion.h2>

          <div className="font-kanit mt-6 p-6 bg-black/60 text-gray-100 text-[19px] text-center md:text-left space-y-2 xl:space-y-0">
            <span className="block xl:inline">
              Bakery & Dessert ของเราทำสดใหม่ทุกวัน
            </span>
            <span className="block 2xl:inline">
              รสชาติหอมหวาน กลมกล่อม เข้ากันอย่างลงตัวกับกาแฟทุกแก้ว
            </span>
            <span className="block 2xl:inline">
              คัดสรรวัตถุดิบคุณภาพสูงเพื่อความอร่อยที่แตกต่าง
            </span>
            <span className="block 2xl:inline">
              ไม่ว่าจะเป็นเค้ก ขนมปัง หรือขนมไทยสไตล์โฮมเมด
            </span>
            <span className="block 2xl:inline">
              ทุกคำคือความสุขที่อบอุ่นและน่าจดจำ
            </span>
          </div>
        </div>

        {/* Motion Images Right */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,

              duration: 20,
              ease: "linear",
            }}
          >
            {images.concat(images).map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-64 h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BakeryDetail;
