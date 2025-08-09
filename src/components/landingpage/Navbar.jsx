import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 lg:px-20 bg-amber-900 bg-opacity-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0 text-gray-300">
        Obsidian<span className="text-yellow-600">Sip</span>
      </h1>
      <div className="flex gap-4 justify-center">
        <Link to="/" className="nav-style">
          HOME
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger to="" className="bg-none">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  to="menu"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Our Menu
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/specials"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Specials
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link to="/" className="nav-style">
          ABOUT US
        </Link>
        <Link to="/" className="nav-style">
          CONTACT
        </Link>
      </div>

      <div className="hidden md:flex gap-3 m-0">
        <ShoppingBasket className="text-white" />
        <button className="bg-amber-200 py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer z-50">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
