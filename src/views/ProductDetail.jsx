import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import MenuCard from "../components/MenuPage/MenuCard";
import { MenuItem } from "../data/MenuData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MenuItem.find((p) => p.id === id);

  if (!product) return <div className="p-8 text-white">Product not found</div>;

  return (
    <div className="min-h-screen bg-black px-10 pt-20 pb-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 border border-gray-400 rounded-4xl bg-[#1b1b1b]">
        {/* รูปสินค้า */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-4xl"
        />
        {/* รายละเอียดสินค้า */}
        <div className="p-8 shadow-lg text-white space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-300">{product.desc}</p>

          <div className="text-2xl font-semibold text-amber-500">
            ฿{product.price}
          </div>
          <div
            className={`inline-block px-6 py-2 rounded-full text-sm opacity-80 ${
              product.inStock
                ? "bg-green-200 text-green-600"
                : "bg-gray-600 text-gray-300"
            }`}
          >
            {product.inStock ? "Available" : "Sold Out"}
          </div>

          <div className="flex space-x-4">
            <Button
              className="bg-[#e2a053e6] hover:bg-[#ffffffe6]  text-black px-6 py-3 rounded-2xl"
              disabled={!product.inStock}
            >
              Add to Basket
            </Button>
            <Button
              className="bg-[#e2a053e6] hover:bg-[#ffffffe6] text-gray-800 px-6 py-3 rounded-2xl"
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* สินค้าแนะนำ */}
      <div className="mt-12 px-7 2xl:px-35">
        <h2 className="text-xl font-semibold mb-6 text-white text-center">
          You may also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-3">
          {MenuItem.filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((rec) => (
              <div
                key={rec.id}
                onClick={() => navigate(`/menu/${rec.id}`)}
                className="cursor-pointer"
              >
                <MenuCard {...rec} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
