import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animationData from "../assets/Coffee love.json";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setLoading(true); // เริ่มต้นการโหลด
        // ถ้าไม่มี token ใน localStorage ไม่ต้องเรียก API
        if (!token) {
          setIsLoggedIn(false);
          setUser(null);
          return;
        }

        const res = await api.get("/auth/status");
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        } else {
          // ถ้า token หมดอายุหรือ invalid ให้ลบออกจาก localStorage
          localStorage.removeItem("token");
          setToken(null);
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        localStorage.removeItem("token");
        setToken(null);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        // ไม่ว่าจะสำเร็จหรือล้มเหลว ให้ตั้งค่า loading เป็น false เสมอ
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [token]);

  const login = (userData, accessToken) => {
    localStorage.setItem("token", accessToken);
    setToken(accessToken);
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      const res = await api.post("/auth/logout");
      if (res.status === 200) {
        localStorage.removeItem("token");
        setToken(null);
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
      value={{ user, token, isLoggedIn, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
