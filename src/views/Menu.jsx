import React, { useState } from 'react'
import {MenuCard} from '../components/MenuCard'
import { hotCoffeeList } from "../data/HotCoffee";
import { coldCoffeeList } from "../data/ColdCoffee";
import { dessertList } from "../data/Dessert";
import { coffeeBeansList } from "../data/CoffeeBeans";

export function Menu() {
  const categories = [
    {key: "hot", label: "Hot Coffee", data: hotCoffeeList},
    { key: "cold", label: "Cold Coffee", data: coldCoffeeList },
    { key: "dessert", label: "Dessert", data: dessertList },
    { key: "beans", label: "Coffee Beans", data: coffeeBeansList },
  ];

  const [selectedCat, setSelectedCat] = useState("hot");

  const currentCat = categories.find(cat => cat.key === selectedCat);

  return (
    <div>
      <div>
        <div className="flex gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCat === cat.key
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentCat.data.map(item => (
          <MenuCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Menu