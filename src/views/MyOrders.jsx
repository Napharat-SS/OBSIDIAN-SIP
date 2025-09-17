import { Link, useNavigate } from "react-router-dom";
// ใช้ useAuth เพื่อดึงข้อมูล user และสถานะการ login
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import api from "../services/api";

export default function MyOrders() {
  // ใช้ hook เพื่อสร้าง Function สำหรับการเปลี่ยน path
  const navigate = useNavigate();
  // ดึงค่า user และ isLoggedIn จาก AuthContext
  const { user, isLoggedIn } = useAuth();

  // สร้าง state สำหรับเก็บรายการคำสั่งซื้อ, สถานะการ load, และ error
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // กำหนด function asynchronous เพื่อดึงข้อมูลคำสั่งซื้อ
    const fetchOrders = async () => {
      // ตรวจสอบว่าผู้ใช้ login หรือไม่ และ token พร้อมใช้งาน
      if (!isLoggedIn) {
        // ถ้ายังไม่ได้ login ให้เปลี่ยน path ไปหน้า /login ทันที
        navigate("/login");
        return;
      }
      try {
        // ตั้งค่า state loading เป็น true เพื่อแสดงหน้ากำลัง load
        setLoading(true);
        // ทำการเรียก API เพื่อดึงข้อมูลคำสั่งซื้อของผู้ใช้
        const response = await api.get("/orders");

        // ตรวจสอบว่าข้อมูลที่ได้มาว่า มี orders และเป็น array หรือไม่
        if (response.data && Array.isArray(response.data.orders)) {
          // update state orders ด้วยข้อมูลที่ได้รับ
          setOrders(response.data.orders);
        } else {
          // ถ้าข้อมูลไม่ถูกต้องหรือไม่มี ให้ตั้งค่า orders เป็น array ว่าง
          setOrders([]);
        }
        setError(null); // ล้าง state error
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders. Please try again."); // ตั้งค่า state error
      } finally {
        // ตั้งค่า loading เป็น false เมื่อการเรียก API เสร็จสิ้น ไม่ว่าจะ success หรือ fail
        setLoading(false);
      }
    };

    // เรียกใช้ function fetchOrders เมื่อ isLoggedIn เปลี่ยนสถานะเป็น true
    if (isLoggedIn) {
      fetchOrders();
    }
    // กำหนด dependency array เพื่อให้ useEffect ทำงานเมื่อ isLoggedIn หรือ navigate เปลี่ยน
  }, [isLoggedIn, navigate]);

  // แสดงผลหน้า Loading ในระหว่างที่กำลังดึงข้อมูล
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading orders...
      </div>
    );
  }

  // ถ้าไม่มีข้อมูล user (เช่น user logout) จะไม่แสดงผลใดๆ
  if (!user) {
    return null;
  }

  // ส่วนการแสดงผลหลักของ JSX component
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen">
      <div className="p-5 md:p-10">
        {/* แถบ Profile ด้านบน */}
        <div className="bg-[#3E2723] pt-5 pl-7 pb-5 border-b-[2px] border-[#403B36] md:pl-20">
          <h1 className="w-[284px] top-[42px] left-24 text-[33px] text-[#C78E2C] font-semibold">
            Profile
          </h1>
          <div className="text-2xl flex gap-15 pt-5 pl-3">
            <Link
              to="/profile"
              className="font-medium text-[#C78E2C] text-[17px]"
            >
              Info
            </Link>
            <Link
              to="/profile/notification"
              className="font-medium text-[#C78E2C] text-[17px]"
            >
              Notification
            </Link>
            <Link
              to="/profile/privacy"
              className="font-medium text-[#C78E2C] text-[17px]"
            >
              Privacy
            </Link>
            <Link
              to="/profile/my-orders"
              className="font-medium text-[#C78E2C] text-[17px]"
            >
              Orders
            </Link>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] bg-[#2B1B17]">
          {/* Profile Sidebar */}
          <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6">
            <div className="text-2xl font-semibold text-[#fdcf8e] mb-6">
              Profile
            </div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4">
              <img
                src="/profile_avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* แสดงชื่อ username จริงจาก user object */}
            <div className="text-xl text-[#E8D9C6] mb-6">
              {user?.username || "Guest"}
            </div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
              CHANGE AVATAR
            </button>
          </div>

          {/* My Orders Section */}
          <div className="border-l-[2px] border-[#403B36] bg-[#2B1B17]">
            <div className="text-xl text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
              My Orders
            </div>

            {/* จัดการกรณีที่เกิด error หรือไม่มี orders */}
            {error && (
              <div className="text-center p-6 text-red-500">{error}</div>
            )}
            {/* ตรวจสอบว่ามีคำสั่งซื้อหรือไม่ */}
            {orders.length === 0 ? (
              // ถ้าไม่มีคำสั่งซื้อ ให้แสดงข้อความและปุ่ม Shop Now เพื่อให้ user กด link กลับไปหน้า home
              <div className="text-center p-6 rounded-xl text-[#E8D9C6]">
                <p className="text-xl">You don’t have any orders yet.</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-6 bg-[#c58c4ce6] text-black px-6 py-3 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            ) : (
              // ถ้ามีคำสั่งซื้อ ให้วน loop แสดงข้อมูล
              <div className="space-y-8 text-[#E8D9C6] p-6">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-[#2B1B17] shadow-md rounded-2xl p-6"
                  >
                    {/* ส่วนหัวของแต่ละคำสั่งซื้อ */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                      <div>
                        <p className="text-lg">
                          <strong>Date:</strong>{" "}
                          {/* แสดงวันที่สร้าง order โดยแปลงเป็นรูปแบบวันที่ที่อ่านง่าย */}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-lg">
                          {/* แสดงหมายเลขคำสั่งซื้อ */}
                          <strong>Order Number:</strong> {order.orderNumber}
                        </p>
                      </div>

                      {/* ปุ่มไปติดตามสถานะของ order */}
                      <button
                        onClick={() =>
                          // เมื่อกดปุ่มแล้ว จะ link ไปหน้า /profile/notification พร้อมส่งค่า orderId ใน query string
                          navigate(`/profile/notification?orderId=${order._id}`)
                        }
                        className="mt-4 sm:mt-0 bg-[#c58c4ce6] text-black px-5 py-2 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium cursor-pointer"
                      >
                        Track Status
                      </button>
                    </div>

                    {/* Basket Items */}
                    <div className="border-t border-b divide-y divide-[#403B36]">
                      {order.basketItems.map((item) => ( // วนลูปสินค้าแต่ละตัวใน basketItems
                        <div
                          key={item._id} // ใช้ _id ของสินค้าเป็น key
                          className="flex justify-between items-center py-3"
                        >
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm">Qty: {item.quantity}</p>
                          </div>
                          <div className="font-semibold">
                            {/* แสดงราคาคูณด้วยจำนวน */}
                            ฿{item.price * item.quantity}.00
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <div className="mt-4 text-md space-y-1">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>฿{order.subtotal}.00</span>
                      </div>
                      {/* แสดงค่าจัดส่งเฉพาะเมื่อมีค่ามากกว่า 0 */}
                      {order.deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>฿{order.deliveryFee}.00</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold pt-2 border-t mt-4 text-xl">
                        <span>Total</span>
                        <span>฿{order.total}.00</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
