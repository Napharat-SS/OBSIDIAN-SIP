import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#472C03] to-[#A36403] text-white text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Info */}
        <div>
          <h3 className="font-bold mb-4">About Info</h3>
          <p className="mb-4">
            This is the perfect place to find a nice and cozy spot to sip some.
            You'll find the Java Jungle.
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span>📍</span> Address: 10 JSD, Bankok, Thailand
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span>✉️</span> Email: ObsidianSip@example.com
          </p>
          <p className="flex items-center gap-2">
            <span>📞</span> Phone: (012) 345 6789
          </p>
        </div>

        {/* Information */}
        <div className="md:pl-20">
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="menu" className="hover:text-gray-300 block">
                Menu
              </Link>
            </li>
            <li>
              <Link to="about" className="hover:text-gray-300 block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-gray-300 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div className="md:pl-15">
          <h3 className="font-bold mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <Link to="menu" className="hover:text-gray-300 block">
                Hot Coffee
              </Link>
            </li>
            <li>
              <Link to="menu" className="hover:text-gray-300 block">
                Cold Coffee
              </Link>
            </li>
            <li>
              <Link to="menu" className="hover:text-gray-300 block">
                Dessert
              </Link>
            </li>
            <li>
              <Link to="menu" className="hover:text-gray-300 block">
                Coffee Beans
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us On */}
        <div className="md:pl-10">
          <h3 className="font-bold mb-4">Follow Us On</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="https://facebook.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                📘 Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                🐦 Twitter
              </Link>
            </li>
            <li>
              <Link
                to="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                📸 Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://youtube.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                ▶️ Youtube
              </Link>
            </li>
            <li>
              <Link
                to="https://pinterest.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-gray-300"
              >
                📌 Pinterest
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
