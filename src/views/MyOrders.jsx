import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios"; // นำเข้า Axios

export default function MyOrders() {
  const navigate = useNavigate();
  const { user, token } = useAuth(); // ดึง user และ token จาก AuthContext

  // เพิ่ม State สำหรับเก็บรายการ orders, สถานะการโหลด, และข้อผิดพลาด
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect เพื่อดึงข้อมูล orders เมื่อ component ถูก render
  useEffect(() => {
    // ฟังก์ชันสำหรับดึงข้อมูล orders จาก API ด้วย Axios
    const fetchOrders = async () => {
      // ตรวจสอบว่ามี user และ token ก่อนเรียก API
      // ถ้าไม่มี ให้เปลี่ยนเส้นทางไปหน้า login และหยุดการทำงาน
      if (!user || !token) {
        setLoading(false); // ตั้งค่า loading เป็น false เพื่อไม่ให้หน้าค้าง
        navigate("/login");
        return;
      }

      try {
        setLoading(true); // ตั้งค่า loading เป็น true ก่อนเริ่มเรียก API
        const response = await axios.get(
          "http://localhost:5000/api/orders", // แก้ไข URL ตาม API ของคุณ
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // ส่ง token ใน header เพื่อยืนยันตัวตน
            },
          }
        );
        // เมื่อได้รับข้อมูลสำเร็จ อัปเดต state orders
        setOrders(response.data.orders);
        setError(null);
      } catch (err) {
        // หากมีข้อผิดพลาด
        console.error("Failed to fetch orders:", err);
        setError("ไม่สามารถดึงรายการคำสั่งซื้อได้ในขณะนี้ กรุณาลองใหม่ภายหลัง");
      } finally {
        setLoading(false); // ไม่ว่าจะสำเร็จหรือล้มเหลว ให้ตั้งค่า loading เป็น false
      }
    };

    fetchOrders();
  }, [user, token, navigate]); // กำหนด dependency array เพื่อให้ effect ทำงานเมื่อ user หรือ token เปลี่ยน

  // แสดงผล loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#000000] to-[#341f01]">
        <div className="text-white text-2xl animate-pulse">กำลังโหลด...</div>
      </div>
    );
  }

  // แสดงผล error state
  if (error) {
    return (
      <div className="text-center p-10 text-red-500 bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen">
        <p>{error}</p>
      </div>
    );
  }

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
            {/* แสดงชื่อผู้ใช้จาก context */}
            <div className="text-xl text-[#E8D9C6] mb-6">
              {user?.username || "Obisidian Sipper"}
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

            {/* ถ้าไม่มี orders ให้แสดงข้อความและปุ่ม Shop Now */}
            {orders.length === 0 ? (
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
              // วนลูปแสดงข้อมูล orders ทั้งหมด
              <div className="space-y-8 text-[#E8D9C6] p-6">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-[#2B1B17] shadow-md rounded-2xl p-6"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                      <div>
                        {/* ปรับปรุงการแสดงผล Date, Order Number */}
                        <p className="text-lg">
                          <strong>Date:</strong>{" "}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-lg">
                          <strong>Order Number:</strong> {order.orderNumber}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          navigate("/profile/notification", {
                            state: { orderId: order._id }, // ส่ง ObjectId ไปแทน orderNumber
                          })
                        }
                        className="mt-4 sm:mt-0 bg-[#c58c4ce6] text-black px-5 py-2 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
                      >
                        Track Status
                      </button>
                    </div>

                    {/* Basket Items */}
                    <div className="border-t border-b divide-y divide-[#403B36]">
                      {/* วนลูปแสดงรายการสินค้าในแต่ละ order */}
                      {order.basketItems.map((item) => (
                        <div
                          key={item._id}
                          className="flex justify-between items-center py-3"
                        >
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm">Qty: {item.quantity}</p>
                          </div>
                          <div className="font-semibold">
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
                      {/* แสดงค่า deliveryFee เฉพาะในกรณีที่มากกว่า 0 */}
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