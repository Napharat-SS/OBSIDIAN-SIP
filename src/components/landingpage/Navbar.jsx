import {
  AlignRight,
  Heart,
  Home,
  Search,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../FavoritesContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

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
           <div className="relative flex items-center">
             {/* Search input */}
             <input
               type="text"
               placeholder="Search..."
               className={`bg-black text-white rounded-3xl px-2 py-1 transition-all duration-300 origin-right border border-[#c88844] 
              ${isSearchOpen ? "w-60 opacity-100 mr-2" : "w-0 opacity-0 mr-0"}`}
             />

             {/* Search icon */}
             <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
               <Search className="text-white hover:text-[#c58c4ce6] w-7 h-7 mr-4 cursor-pointer" />
             </button>
           </div>

           <div className="relative">
             <button onClick={() => setIsFavOpen(true)}>
               <Heart className=" text-white hover:text-[#c58c4ce6] w-7 h-7 mt-2 cursor-pointer" />
               {favorites.length > 0 && (
                 <span className="absolute top-1 -right-2 bg-[#c58c4ce6] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                   {favorites.length}
                 </span>
               )}
             </button>
           </div>
           <ShoppingBasket
             className="text-white hover:text-[#c58c4ce6] w-14 h-7 cursor-pointer"
             onClick={() => navigate("/addtocart")}
           />
           <Link to="login" className="getbutton inline-block">
             Get started
           </Link>
         </div>

         {/* mobile right section: search + toggle */}
         <div className="flex items-center md:hidden">
           {/* Search input */}
           <input
             type="text"
             placeholder="Search..."
             className={`bg-black text-white rounded-3xl px-2 py-1 border border-[#c88844] transition-all duration-300 origin-right 
      ${isSearchOpen ? "w-40 opacity-100" : "w-0 opacity-0 mr-0"}
    `}
           />

           {/* Search icon */}
           <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
             <Search className="text-white w-7 h-7 mr-4 cursor-pointer" />
           </button>

           {/* Toggle button */}
           <button
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="text-white"
           >
             {isMenuOpen ? <X /> : <AlignRight />}
           </button>
         </div>

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

       {/* Drawer */}
       <div
         className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 
    ${isFavOpen ? "translate-x-0" : "translate-x-full"} 
    w-full sm:w-80 md:w-96`}
       >
         {/* Header */}
         <div className="flex justify-between items-center p-4 border-b">
           <h2 className="text-lg font-bold">Your Favorites</h2>
           <button onClick={() => setIsFavOpen(false)}>
             <X className="w-6 h-6" />
           </button>
         </div>

         {/* Content */}
         <div className="p-4 overflow-y-auto h-full">
           {favorites.length === 0 ? (
             <p className="text-gray-500">No favorites yet.</p>
           ) : (
             <div className="space-y-4">
               {favorites.map((item, idx) => (
                 <div
                   key={idx}
                   className="flex items-center gap-3 border-b pb-2"
                 >
                   <img
                     src={item.img}
                     alt={item.name}
                     className="w-16 h-16 object-cover rounded-md"
                   />
                   <div className="flex-1">
                     <h3 className="font-semibold text-sm">{item.name}</h3>
                     <p className="text-xs text-gray-600">{item.desc}</p>
                     <p className="text-sm text-yellow-600 font-bold">
                       ${item.price}
                     </p>
                     <p
                       className={`text-xs ${
                         item.inStock ? "text-green-600" : "text-red-600"
                       }`}
                     >
                       {item.inStock ? "In Stock" : "Out of Stock"}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           )}
           <button className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-sm font-medium focus:outline-none ">
             Add to Basket
           </button>
         </div>
       </div>

       {/* --- Mobile Bottom Navbar --- */}
       <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_-4px_6px_rgba(0,0,0,0.6)] z-50 md:hidden pb-3">
         <div className="flex justify-around items-center py-2 relative">
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

           {/* Favorite */}
           <button className="relative" onClick={() => setIsFavOpen(true)}>
             <Heart className="text-white w-7 h-7" />
             {favorites.length > 0 && (
               <span className="absolute -top-2 -right-2 bg-[#c58c4ce6] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                 {favorites.length}
               </span>
             )}
           </button>
         </div>
       </nav>
     </>
   );
};

export default Navbar;
