import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import award from "../../assets/Homeimg/award.png";
import coffee from "../../assets/Homeimg/coffee.png";
import coffee_blast from "../../assets/Homeimg/coffee_blast.png";
import coffee_blast_left from "../../assets/Homeimg/coffee_blast_left.png";
import coffeebeans from "../../assets/Homeimg/coffeebeans.png";
import price from "../../assets/Homeimg/price.png";

const features = [
  {
    title: "Supreme Beans",
    desc: "Beans that provides great taste",
    icon: coffeebeans, // แทนด้วย SVG หรือ Icon component
  },
  {
    title: "High Quality",
    desc: "We provide the highest quality",
    icon: award,
  },
  {
    title: "Extraordinary",
    desc: "Coffee like you have never tasted",
    icon: coffee,
  },
  {
    title: "Affordable Price",
    desc: "Our Coffee prices are easy to afford",
    icon: price,
  },
];

const WhyDifferent = () => {
  return (
    <section className="relative bg-[#f5eae0] py-16 overflow-hidden">
      {/* splash image ด้านบนขวา */}
      <img
        src={coffee_blast}
        alt="Coffee splash"
        className="hidden xl:block absolute top-0 right-0 w-64 md:w-80 opacity-90 pointer-events-none"
      />
      {/* splash image ด้านบนซ้าย */}
      <img
        src={coffee_blast_left}
        alt="Coffee splash left"
        className="hidden xl:block absolute top-0 left-0 w-64 md:w-80 opacity-90 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-libertinus text-3xl md:text-5xl font-bold text-[#5C3A21] mb-4"
        >
          Why are we different?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-20"
        >
          We don’t just make your coffee, we make your day!
        </motion.p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-[#FFF6ED] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#5C3A21] mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8">
            Great ideas start with great coffee. Let us help you achieve that
          </p>
          <Link
            to="menu"
            className="px-6 py-3 bg-[#F4B400] text-white rounded-full font-semibold shadow hover:bg-[#e0a200] transition"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferent;
