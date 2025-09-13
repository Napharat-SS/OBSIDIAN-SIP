import api from "./api"; // Axios instance with withCredentials:true


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


