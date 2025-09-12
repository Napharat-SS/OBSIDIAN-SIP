import api from "./api"; // Axios instance with withCredentials:true

export const loginUser = async (username, password, remember) => {
  const response = await api.post("/auth/cookie/login", {
    username,
    password,
    remember,
  });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const signupUser = async ({ firstname, lastname, email, phone, username, password}) => {
  const response = await api.post("/auth/register", {
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
  const response = await api.get("/auth/profile");
  return response.data;
};
