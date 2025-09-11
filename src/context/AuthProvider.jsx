import React, { useState, useEffect} from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information
  const [loading, setLoading] = useState(true); // Track loading state


  // Fetch the user's profile on app load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/auth/profile");
        setUser(response.data.user); // Restore user state
      } catch (err) {
        console.error("Not authenticated:", err);
        setUser(null); // Clear user state if not authenticated
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
  }, []);

  const login = (userData) => {
    setUser(userData); // Save user info in the context
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>; // Show loading indicator while restoring session
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};