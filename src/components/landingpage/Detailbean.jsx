import { motion } from "framer-motion";
import bean1 from "../../assets/Homeimg/01bean.jpg";
import bean2 from "../../assets/Homeimg/02bean.jpg";
import bean3 from "../../assets/Homeimg/03bean.jpg";
import bean4 from "../../assets/Homeimg/04bean.jpg";
import bean5 from "../../assets/Homeimg/05bean.jpg";
const images = [bean1, bean2, bean3, bean5, bean4];

const Detailbean = () => {
  return (
    <section className="px-15 py-5 md:py-32 bg-[url('/bgofbeans.jpg')] bg-cover bg-center bg-no-repeat">
      {" "}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Motion Images */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }} // -100% เพื่อเลื่อนไปหมด
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
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

        {/* Text */}
        <div className="w-full md:w-1/2">
          {/* FlipText scroll into view */}
          <motion.h2
            initial={{ rotateX: 90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-libertinus text-gray-700 md:text-gray-200 py-4 text-4xl md:text-6xl text-center md:text-left "
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
          >
            Our Coffee Beans
          </motion.h2>

          {/* Description with semi-transparent black background */}
          <div className="font-kanit mt-6 p-6 bg-black/60 text-gray-100 text-[19px] text-center md:text-left space-y-2 xl:space-y-0">
            <span className="block xl:inline">
              ทุกเมล็ดกาแฟของเราถูกคัดสรรอย่างพิถีพิถันจากไร่ที่ดีที่สุด
            </span>
            <span className="block 2xl:inline">
              เพื่อให้ได้รสชาติที่กลมกล่อม และกลิ่นหอมละมุนในทุกแก้ว
            </span>
            <span className="block 2xl:inline">
              เราใส่ใจตั้งแต่การเก็บเกี่ยว การคั่ว จนถึงการบดและชง
            </span>
            <span className="block 2xl:inline">
              ทุกขั้นตอนถูกออกแบบมาเพื่อรักษาคุณภาพและเอกลักษณ์เฉพาะตัว
            </span>
            <span className="block 2xl:inline">
              ให้คุณได้สัมผัสประสบการณ์กาแฟที่เต็มไปด้วยความรักและความใส่ใจในทุกแก้ว
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailbean;
