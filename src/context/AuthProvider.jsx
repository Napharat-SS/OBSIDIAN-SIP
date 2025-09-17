import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animationData from "../assets/Coffee love.json";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information
  const [loading, setLoading] = useState(true); // Track loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // This API call will automatically send the 'accessToken' cookie
        const res = await api.get("/auth/status");
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    };
    checkAuthStatus();
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user); // Save user info in the context
  };

  const logout = async () => {
    try {
      const res = await api.post("/auth/logout");
      if (res.status === 200) {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-b from-yellow-950 to-black">
        <Lottie className="w-40 h-40" animationData={animationData} />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, setLoading, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
