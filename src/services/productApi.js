const API_URL = "http://localhost:3030/products";

export const fetchProducts = async (category) => {
  const url = category ? `${API_URL}?category=${category}` : API_URL;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const searchProducts = async (query) => {
  const res = await fetch(`${API_URL}/search?q=${query}`);
  if (!res.ok) throw new Error("Failed to search products");
  return res.json();
};

export const fetchBestsellers = async () => {
  const res = await fetch(`${API_URL}/bestsellers`);
  if (!res.ok) throw new Error("Failed to fetch bestsellers");
  return res.json();
};
