import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useMemo, useState } from "react";
import MenuCard from "../components/MenuPage/MenuCard";
import { useProductStore } from "../stores/productStore";

const CATEGORY_ORDER = [
  { id: "hot", label: "Hot" },
  { id: "cold", label: "Cold" },
  { id: "bakery", label: "Bakery" },
  { id: "beans", label: "Beans" },
  { id: "combo", label: "Combo" },
];

export default function MenuPage() {
  const [activeCat, setActiveCat] = useState("all");

  const { products, loading, error, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const filteredItems = useMemo(() => {
    if (activeCat === "all") return products;
    return products.filter(
      (p) => (p.category || "").toLowerCase() === activeCat
    );
  }, [activeCat, products]);

  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      <div className="mx-[10%] px-4 py-10">
        {/* Header */}
        <header className="py-15 px-20 mb-10 rounded-4xl bg-[url('/bgMenu.png')] bg-cover bg-bottom bg-no-repeat">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">
            Our <span className="text-[#fab260e6]">Menu</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-center font-kanit text-sm md:text-xl drop-shadow">
            Every cup and every bite, crafted to bring you joy and brighten your
            day.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-6 flex justify-center ">
          <Tabs value={activeCat} onValueChange={setActiveCat}>
            <TabsList className="md:flex md:flex-wrap justify-center gap-2 bg-[#1a1a1b]/70 rounded-2xl md:pt-2 md:pb-16 md:px-1 border py-7">
              <TabsTrigger
                value="all"
                className="flex flex-col items-center justify-center rounded-xl md:px-6 md:py-7 transition-colors duration-300 px-3 py-5 text-gray-100 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                <span className="font-bold">All</span>
              </TabsTrigger>

              {CATEGORY_ORDER.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex flex-col items-center justify-center rounded-xl text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold text-gray-100 md:px-6 md:py-7 py-5 px-3 transition-colors duration-300"
                >
                  <span className="font-bold">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Products */}
        <section aria-label="menu-items">
          {loading ? (
            <div className="text-center py-16 opacity-80">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16 text-red-500">
              <p>{error}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16 opacity-80">
              <p>No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((product) => (
                <MenuCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
