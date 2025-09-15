import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Supreme Beans",
    desc: "Beans that provides great taste",
    icon: "/Homeimg/coffeebeans.png", // แทนด้วย SVG หรือ Icon component
  },
  {
    title: "High Quality",
    desc: "We provide the highest quality",
    icon: "/Homeimg/award.png",
  },
  {
    title: "Extraordinary",
    desc: "Coffee like you have never tasted",
    icon: "/Homeimg/coffee.png",
  },
  {
    title: "Affordable Price",
    desc: "Our Coffee prices are easy to afford",
    icon: "/Homeimg/price.png",
  },
];

const WhyDifferent = () => {
  return (
    <section className="relative bg-[#000000]  overflow-hidden py-10">
      {/* splash image ด้านบนขวา */}
      <img
        src="/Homeimg/coffee_blast.png"
        alt="Coffee splash"
        className="hidden xl:block absolute top-0 right-0 w-64 md:w-80 opacity-90 pointer-events-none"
      />
      {/* splash image ด้านบนซ้าย */}
      <img
        src="/Homeimg/coffee_blast_left.png"
        alt="Coffee splash left"
        className="hidden xl:block absolute top-0 left-0 w-64 md:w-80 opacity-90 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-[#252525] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#eaeaea] mb-2">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
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
          <p className="text-gray-300 mb-8">
            Great ideas start with great coffee. Let us help you achieve that
          </p>
          <Link
            to="menu"
            className="px-6 py-3 bg-[#c58c4ce6] text-black rounded-full font-semibold shadow hover:bg-[#e0a200] transition"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferent;
