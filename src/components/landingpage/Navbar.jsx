import {
  AlignRight,
  Heart,
  Home,
  Search,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const mobileNav = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "menu" },
    { name: "ABOUT US", path: "aboutus" },
    { name: "CONTACT", path: "/footer" },
  ];

  const routeIsActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* --- Top Navbar --- */}
      <nav
        className="sticky top-0 w-full flex justify-between items-center py-2 px-4 lg:px-20 
        bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_4px_6px_rgba(0,0,0,0.6)] z-50"
      >
        <Link
          to="/"
          className="text-2xl md:text-4xl lg:text-4xl m-0 text-gray-300 font-poppins font-medium"
        >
          Obsidian<span className="text-yellow-600">Sip</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 justify-center ">
          <Link to="/" className="nav-style">
            HOME
          </Link>
          <Link to="menu" className="nav-style">
            MENU
          </Link>
          <Link to="aboutus" className="nav-style">
            ABOUT US
          </Link>
          <Link to="/footer" className="nav-style">
            CONTACT
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1 m-0">
          <Search className="text-white w-14 h-7" />
          <Heart className="text-white w-14 h-7" />
          <ShoppingBasket className="text-white w-14 h-7" />
          <Link to="login" className="getbutton inline-block">
            Get started
          </Link>
        </div>

        {/* mobile toggle nav */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X /> : <AlignRight />}
        </button>

        {/* mobile dropdown nav */}
        {isMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-gradient-to-r from-[#000000] to-[#341f01] flex flex-col items-center gap-4 py-6 md:hidden z-50 ">
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

      {/* --- Mobile Bottom Navbar --- */}
      <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_-4px_6px_rgba(0,0,0,0.6)] z-50 md:hidden pb-3">
        <div className="flex justify-around items-center py-2 relative">
          {/* Favorite */}
          <Link
            to="/favorites"
            className={`flex flex-col items-center text-xs transition-all ${
              routeIsActive("/favorites")
                ? "text-amber-400 scale-110"
                : "text-gray-300"
            }`}
          >
            <Heart className="w-8 h-8" />
          </Link>

          {/* Home (center, floating) */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className={`flex items-center justify-center rounded-full p-3 shadow-lg transition-transform ${
                routeIsActive("/")
                  ? "bg-amber-400 text-black scale-110"
                  : "bg-yellow-600 text-white"
              }`}
            >
              <Home className="w-8 h-8" />
            </Link>
          </div>

          {/* Basket */}
          <Link
            to="/cart"
            className={`flex flex-col items-center text-xs transition-all ${
              routeIsActive("/cart")
                ? "text-amber-400 scale-110"
                : "text-gray-300"
            }`}
          >
            <ShoppingBasket className="w-8 h-8" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
