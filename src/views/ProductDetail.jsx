import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuCard from "../components/MenuPage/MenuCard";
import { useCart } from "../context/CardContext";
import { fetchProductById, fetchProducts } from "../services/productApi";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data.product);
        const allProducts = await fetchProducts();
        const array = Array.isArray(allProducts)
          ? allProducts
          : allProducts.products || [];
        setRecommend(array.filter((p) => p.id !== id).slice(0, 4));
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black px-10 md:px-50 pt-20 pb-20">
      <div className="grid md:grid-cols-2 gap-8 border border-gray-400 rounded-4xl bg-[#1b1b1b] px-[2%] md:p-[3%]">
        {/* รูปสินค้า */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-4xl"
        />
        {/* รายละเอียดสินค้า */}
        <div className="p-8 shadow-lg text-white space-y-6 pt-10 md:pt-25">
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

          <div className="flex space-x-4 pt-10">
            <Button
              className="bg-[#e2a053e6] hover:bg-[#ffffffe6]  text-black px-6 py-3 rounded-2xl cursor-pointer"
              disabled={!product.inStock}
              onClick={() => addToCart(product)}
            >
              Add to Basket
            </Button>
            <Button
              className="bg-[#e2a053e6] hover:bg-[#ffffffe6] text-gray-800 px-6 py-3 rounded-2xl cursor-pointer"
              disabled={!product.inStock}
              onClick={() =>
                navigate("/checkout", {
                  state: { basket: [{ ...product, quantity: 1 }] },
                })
              }
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
          {recommend.map((rec) => (
            <div
              key={rec.id}
              onClick={() => navigate(`/menu/${rec.id}`)}
              className="cursor-pointer flex flex-col"
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
