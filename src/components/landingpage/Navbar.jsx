import { AlignRight, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNav = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "menu" },
    { name: "ABOUT US", path: "about" },
    { name: "CONTACT", path: "contact" },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center py-2 px-4 lg:px-20 bg-amber-900 bg-opacity-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl m-0 text-gray-300">
          Obsidian<span className="text-yellow-600">Sip</span>
        </h1>
        {/*Desktop nav*/}
        <div className="hidden md:flex gap-6 justify-center ">
          <Link to="/" className="nav-style">
            HOME
          </Link>
          <Link to="menu" className="nav-style">
            MENU
          </Link>
          <Link to="about" className="nav-style">
            ABOUT US
          </Link>
          <Link to="contact" className="nav-style">
            CONTACT
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-1 m-0">
          <ShoppingBasket className="text-white w-14 h-7" />
          <Link to="login" className="getbutton inline-block">
            Get started
          </Link>
        </div>

        {/*mobile toggle nav */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X /> : <AlignRight />}
        </button>
        {/* mobile menu nav*/}
        {isMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-amber-800 bg-opacity-90 flex flex-col items-center gap-4 py-6 md:hidden z-50 ">
            {mobileNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white text-lg hover:text-amber-400 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center">
              <Link
                to="/login"
                className="getbutton inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
