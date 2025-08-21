import { useState } from "react";
import { MenuCard } from "../components/MenuCard";
import { coffeeBeansList } from "../data/CoffeeBeans";
import { coldCoffeeList } from "../data/ColdCoffee";
import { dessertList } from "../data/Dessert";
import { hotCoffeeList } from "../data/HotCoffee";

export function Menu() {
  const allItem = [
    ...hotCoffeeList,
    ...coldCoffeeList,
    ...dessertList,
    ...coffeeBeansList,
  ];

  const categories = [
    { key: "all", label: "All", data: allItem },
    { key: "hot", label: "Hot Coffee", data: hotCoffeeList },
    { key: "cold", label: "Cold Coffee", data: coldCoffeeList },
    { key: "dessert", label: "Dessert", data: dessertList },
    { key: "beans", label: "Coffee Beans", data: coffeeBeansList },
  ];

  const [selectedCat, setSelectedCat] = useState("all");

  const currentCat = categories.find((cat) => cat.key === selectedCat);

  return (
    <div>
      <div className="bg-[#FFF0D7]">
        <div>
          <img
            src="./bg-menu.jpg"
            alt="pour coffee"
            className="w-full h-[45vh] object-cover md:object-cover md:h-[35vh] md:w-full"
          ></img>
        </div>
        <div className="flex gap-3 justify-center py-6 px-4 ">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-4 py-2 rounded-xl text-xl text-[#3F3C38] font-medium transition ${
                selectedCat === cat.key
                  ? " text-[#3F3C38] bg-[#D4A475] shadow-md"
                  : " hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-x-4 w-full max-w-6xl">
            {currentCat.data.map((item) => (
              <MenuCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                description={item.description}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
