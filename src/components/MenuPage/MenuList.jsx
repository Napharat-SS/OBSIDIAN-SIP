import { useEffect } from "react";
import { useProductStore } from "../store/productStore";
import MenuCard from "./MenuCard";

export default function MenuList({ category }) {
  const { products, loading, error, getProducts } = useProductStore();

  useEffect(() => {
    getProducts(category);
  }, [category, getProducts]);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!products.length)
    return <p className="text-center text-gray-400">No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <MenuCard
          key={p.id}
          id={p.id}
          name={p.name}
          desc={p.desc}
          tag={p.tag}
          img={p.img}
          price={p.price}
          inStock={p.inStock}
        />
      ))}
    </div>
  );
}
