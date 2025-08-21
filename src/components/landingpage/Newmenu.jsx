import { SparklesText } from "@/components/magicui/sparkles-text";
import { coldCoffeeList } from "../../data/ColdCoffee";
import { dessertList } from "../../data/Dessert";
import { hotCoffeeList } from "../../data/HotCoffee";
import { MenuCard } from "../MenuCard";

const Newmenu = () => {
  const selectedIds = [207, 307, 108, 304];

  const allProducts = [...hotCoffeeList, ...coldCoffeeList, ...dessertList];
  const filteredProducts = allProducts.filter((product) =>
    selectedIds.includes(product.id)
  );

  return (
    <section className="bg-[url('/bgnewmenu.jpg')] bg-cover">
      <SparklesText className="text-center text-white font-libertinus py-10 text-4xl md:text-6xl">
        Our New Menu
      </SparklesText>

      <div className="px-10 pb-10">
        {/* Mobile & Tablet: scrollable */}
        <div className="flex gap-6 overflow-x-auto md:overflow-x-auto xl:hidden ">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-72 flex flex-col items-center"
            >
              <MenuCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.img}
                className="h-full flex flex-col justify-between"
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid 4 columns */}
        <div className="hidden xl:grid xl:grid-cols-4 xl:gap-6 2xl:px-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <MenuCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newmenu;
