import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-3">
      {/* กล่องหลัก */}
      <div className="mx-6 md:mx-20 md:py-8 border border-gray-700 p-6 md:p-8 rounded-[50px] bg-gradient-to-r from-[#000000] to-[#341f01] text-white text-sm shadow-xl font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
          {/* 1. About Info */}
          <div className="space-y-4 col-span-2">
            <h3 className="font-bold text-lg">About Info</h3>
            <p className="text-sm opacity-95">
              This is the perfect place to find a nice and cozy spot to sip
              some. You'll find the Java Jungle.
            </p>

            <div className="space-y-2">
              <p className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <span>Address: 10 JSD, Bangkok, Thailand</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <span>ObsidianSip@example.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>(012) 345 6789</span>
              </p>
            </div>
          </div>

          {/* 2. Map */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="font-bold text-lg">Our Location</h3>
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=Bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="w-full h-48 md:h-60 block border-0"
              ></iframe>
            </div>
          </div>

          {/* 3. Information */}
          <div className="space-y-4 md:col-span-1 md:pl-15">
            <h3 className="font-bold text-lg">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gray-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Follow Us */}
          <div className="space-y-4 col-span-1 md:pl-10">
            <h3 className="font-bold text-lg">Follow Us On</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  📘 Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  🐦 Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  ▶️ Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  📌 Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* © Section (อยู่นอกกรอบ) */}
      <div className="text-center py-8 text-xs text-gray-400">
        © {new Date().getFullYear()} Obsidian Sip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
