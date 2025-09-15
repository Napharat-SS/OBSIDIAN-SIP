const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (category) => {
  const url = category
    ? `${API_BASE_URL}/products?category=${category}`
    : `${API_BASE_URL}/products`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const searchProducts = async (query) => {
  const res = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
  if (!res.ok) throw new Error("Failed to search products");
  return res.json();
};

export const fetchBestsellers = async () => {
  const res = await fetch(`${API_BASE_URL}/products/bestsellers`);
  if (!res.ok) throw new Error("Failed to fetch bestsellers");
  return res.json();
};
