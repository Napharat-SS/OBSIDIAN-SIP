import { useContext, createContext } from "react";
//สร้าง context สำหรับเก็บข้อมูลเกี่ยวกับ Authentication (การล็อกอิน/ผู้ใช้)
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

