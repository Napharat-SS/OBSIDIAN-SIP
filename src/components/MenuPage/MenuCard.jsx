import { memo, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MenuItem } from "../../data/MenuData";

const MenuCard = memo(
  ({ name, desc, tag, img, price, inStock, onFavoriteToggle }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
      onFavoriteToggle && onFavoriteToggle(!isFavorite);
    };

    return (
      <div className="group relative w-full p-4">
        <div className="bg-[#232323] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden h-full flex flex-col border border-gray-400">
          <div className="relative">
            <img
              src={img}
              alt={name}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute top-4 right-4 p-2 bg-[#676767] rounded-full shadow-md transition-transform duration-300 hover:scale-110 opacity-80"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-gray-300 text-xl" />
              )}
            </button>
            {tag && (
              <div className="absolute top-4 left-4 bg-[#c58c4ce6] text-black px-3 py-1 rounded-full text-sm font-semibold opacity-95">
                {tag}
              </div>
            )}
          </div>

          <div className="p-4 space-y-3 flex flex-col flex-grow">
            <h3 className="text-[20px] font-bold text-gray-100 line-clamp-2">
              {name}
            </h3>
            <p className="text-gray-100">{desc}</p>
            <div className="flex items-center justify-between">
              <div className="space-x-2">
                <span className="text-lg font-semibold text-gray-100">
                  ฿{price}
                </span>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs ${
                  inStock
                    ? "bg-emerald-50 text-emerald-600 opacity-85"
                    : "bg-gray-200 text-gray-400 opacity-85"
                }`}
              >
                {inStock ? "Available" : "Sold Out"}
              </div>
            </div>

            <div className="mt-auto">
              <button
                className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-sm font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inStock}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MenuCard.displayName = "MenuCard";

const Menu = () => {
  // ฟังก์ชันอยู่ข้างใน component
  const renderMenuCards = () =>
    MenuItem.map((product) => (
      <MenuCard
        key={product.id}
        {...product}
        onFavoriteToggle={(isFavorite) =>
          console.log(`Product ${product.id} favorite status: ${isFavorite}`)
        }
      />
    ));

  // return JSX
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">{renderMenuCards()}</div>
      </div>
    </div>
  );
};

export default MenuCard;
