const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(category.id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
        isActive
          ? "bg-brown-700 text-white"
          : "bg-white text-brown-700 border-brown-700"
      }`}
    >
      <span className="text-xl">{category.icon}</span>
      <span className="font-medium">{category.name}</span>
      <span className="ml-2 text-sm opacity-70">({category.count})</span>
    </button>
  );
};

export default CategoryCard;
