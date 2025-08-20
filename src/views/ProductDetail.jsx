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
  const [option] = useState("eat"); // eat | take

  // รวมสินค้าทุกหมวด
  const allItem = [
    ...hotCoffeeList,
    ...coldCoffeeList,
    ...dessertList,
    ...coffeeBeansList,
  ];

  const product = allItem.find((item) => slugify(item.title) === slug);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="bg-[#fff0d7]  md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto border-2 border-gray-300  py-20 md:rounded-3xl shadow-lg bg-[#e0b68b]">
        {/* รูปสินค้า */}
        <div className="flex justify-center">
          <div
            className={`overflow-hidden rounded-xl shadow-md ${
              product.category === "coffeeBeans" ? "h-100 w-50" : "h-85 w-75"
            }`}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ข้อมูลสินค้า */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-500 text-lg mt-2">{product.price}</p>

          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Quantity */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">QUANTITY</h3>
            <div className="flex items-center gap-4 mt-2">
              <button
                className="px-3 py-1  bg-[#a37c55]  rounded-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="px-3 py-1  bg-[#a37c55] rounded-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="mt-6 w-full bg-[#a37c55] hover:bg-[#c28a5d] text-white font-semibold py-3 rounded-lg shadow-md"
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
    </div>
  );
};

export default ProductDetail;
