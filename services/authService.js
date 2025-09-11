import api from "./api"; // Axios instance with withCredentials:true

export const loginUser = async (username, password) => {
  const response = await api.post("/mongo/auth/cookie/login", {
    username,
    password,
  });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/mongo/auth/logout");
  return response.data;
};

export const signupUser = async ({ firstname, lastname, email, phone, username, password}) => {
  const response = await api.post("/mongo/auth/register", {
    firstname,
    lastname,
    email,
    phone,
    username,
    password,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/mongo/auth/profile");
  return response.data;
};
