import React, { useState, useEffect } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";
import Lottie from "lottie-react";
import animationData from "../assets/Coffee love.json";

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
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // Save user info in the context
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
    return <Lottie className="w-30 h-30" animationData={animationData} />;
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, setLoading, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
