import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { coffeeBeansList } from "../data/CoffeeBeans";
import { coldCoffeeList } from "../data/ColdCoffee";
import { dessertList } from "../data/Dessert";
import { hotCoffeeList } from "../data/HotCoffee";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState("eat"); // eat | take

  // รวมสินค้าทุกหมวด
  const allItem = [
    ...hotCoffeeList,
    ...coldCoffeeList,
    ...dessertList,
    ...coffeeBeansList,
  ];

  const product = allItem.find((item) => slugify(item.title) === slug);
  const isBean = coffeeBeansList.some((item) => slugify(item.title) === slug);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto border-2 my-20 py-20 bg-[#ffffff] rounded-3xl">
      {/* รูปสินค้า */}
      <div className="flex justify-center">
        <img
          src={product.img}
          alt={product.title}
          className="w-full max-w-sm object-cover rounded-xl shadow-md"
        />
      </div>

      {/* ข้อมูลสินค้า */}
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-gray-500 text-lg mt-2">{product.price}</p>

        <p className="text-gray-700 mt-4">{product.description}</p>

        {/* Option Eat here / Take away */}
        {/* Option / 500g */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-700">OPTION</h3>
          {isBean ? (
            <div className="flex gap-4 mt-2">
              <button
                className={`px-4 py-2 border rounded-lg ${
                  option === "take"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setOption("take")}
              >
                500 g
              </button>
            </div>
          ) : (
            <div className="flex gap-4 mt-2">
              <button
                className={`px-4 py-2 border rounded-lg ${
                  option === "eat"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setOption("eat")}
              >
                Eat here
              </button>
              <button
                className={`px-4 py-2 border rounded-lg ${
                  option === "take"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setOption("take")}
              >
                Take away
              </button>
            </div>
          )}
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-700">QUANTITY</h3>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="px-3 py-1 border rounded-lg"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          className="mt-6 w-full bg-[#D4A475] hover:bg-[#c28a5d] text-white font-semibold py-3 rounded-lg shadow-md"
          onClick={() =>
            toast.success(
              `Added ${quantity}x ${product.title} (${option}) to basket`
            )
          }
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
