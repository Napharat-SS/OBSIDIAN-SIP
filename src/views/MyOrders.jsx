import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MyOrders() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  if (user === null) {
    navigate("/login");
  }

  // ดึง orderData ที่ส่งมาจาก OrderConfirmation
  const order = location.state;

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
            <div className="text-xl text-[#E8D9C6] mb-6">Obisidian Sipper</div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
              CHANGE AVATAR
            </button>
          </div>

          {/* My Orders Section */}
          <div className="border-l-[2px] border-[#403B36] bg-[#2B1B17]">
            <div className="text-xl text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
              My Orders
            </div>

            {!order ? (
              <div className="text-center p-6 rounded-xl text-[#E8D9C6]">
                <p className="text-xl">You don’t have any orders yet.</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-6 bg-[#c58c4ce6] text-black px-6 py-3 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
                >
                  Shop Now
                </button>
              </div>
            ) : (
              <div className="space-y-8 text-[#E8D9C6] p-6">
                <div className="bg-[#2B1B17] shadow-md rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <p className="text-lg">
                        <strong>Date:</strong> {order.date}
                      </p>
                      <p className="text-lg">
                        <strong>Order Number:</strong> {order.orderId}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        navigate("/profile/notification", {
                          state: { orderId: order.orderId },
                        })
                      }
                      className="mt-4 sm:mt-0 bg-[#c58c4ce6] text-black px-5 py-2 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
                    >
                      Track Status
                    </button>
                  </div>

                  {/* Basket Items */}
                  <div className="border-t border-b divide-y divide-[#403B36]">
                    {order.basketItems.map((item) => (
                      <div
                        key={item.id}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function MyOrders() {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]); // เก็บ orders ของ user
//   const [loading, setLoading] = useState(true);

//   // ดึง orders ของ user ที่ login อยู่
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://localhost:3030/api/orders/me", {
//           credentials: "include", // ให้ cookie/token ติดไปด้วย ถ้าใช้ auth
//         });
//         const data = await res.json();
//         setOrders(data); // data = array ของ orders
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen">
//       <div className="p-5 md:p-10">
//         {/* แถบ Profile ด้านบน */}
//         <div className="bg-[#3E2723] pt-5 pl-7 pb-5 border-b-[2px] border-[#403B36] md:pl-20">
//           <h1 className="w-[284px] top-[42px] left-24 text-[33px] text-[#C78E2C] font-semibold">
//             Profile
//           </h1>
//           <div className="text-2xl flex gap-15 pt-5 pl-3">
//             <Link
//               to="/profile"
//               className="font-medium text-[#C78E2C] text-[17px]"
//             >
//               Info
//             </Link>
//             <Link
//               to="/profile/notification"
//               className="font-medium text-[#C78E2C] text-[17px]"
//             >
//               Notification
//             </Link>
//             <Link
//               to="/profile/privacy"
//               className="font-medium text-[#C78E2C] text-[17px]"
//             >
//               Privacy
//             </Link>
//             <Link
//               to="/profile/my-orders"
//               className="font-medium text-[#C78E2C] text-[17px]"
//             >
//               Orders
//             </Link>
//           </div>
//         </div>

//         {/* Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-[32%_68%] bg-[#2B1B17]">
//           {/* Profile Sidebar */}
//           <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6">
//             <div className="text-2xl font-semibold text-[#fdcf8e] mb-6">
//               Profile
//             </div>
//             <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4">
//               <img
//                 src="/profile_avatar.png"
//                 alt="Profile Avatar"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="text-xl text-[#E8D9C6] mb-6">Obisidian Sipper</div>
//             <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
//               CHANGE AVATAR
//             </button>
//           </div>

//           {/* My Orders Section */}
//           <div className="border-l-[2px] bg-[#2B1B17]">
//             <div className="text-xl text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
//               My Orders
//             </div>

//             {loading ? (
//               <div className="text-center p-6 text-[#E8D9C6]">
//                 Loading your orders...
//               </div>
//             ) : orders.length === 0 ? (
//               <div className="text-center p-6 rounded-xl text-[#E8D9C6]">
//                 <p className="text-xl">You don’t have any orders yet.</p>
//                 <button
//                   onClick={() => navigate("/")}
//                   className="mt-6 bg-[#c58c4ce6] text-black px-6 py-3 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
//                 >
//                   Shop Now
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-8 text-[#E8D9C6] p-6">
//                 {orders.map((order) => (
//                   <div
//                     key={order._id}
//                     className="bg-[#2B1B17] shadow-md rounded-2xl p-6"
//                   >
//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//                       <div>
//                         <p className="text-lg">
//                           <strong>Date:</strong>{" "}
//                           {new Date(order.createdAt).toLocaleDateString()}
//                         </p>
//                         <p className="text-lg">
//                           <strong>Order Number:</strong> {order.orderId}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() =>
//                           navigate("/profile/notification", {
//                             state: { orderId: order.orderId },
//                           })
//                         }
//                         className="mt-4 sm:mt-0 bg-[#c58c4ce6] text-black px-5 py-2 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
//                       >
//                         Track Order
//                       </button>
//                     </div>

//                     {/* Basket Items */}
//                     <div className="border-t border-b divide-y divide-[#403B36]">
//                       {order.basket.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex justify-between items-center py-3"
//                         >
//                           <div>
//                             <h3 className="font-semibold">{item.name}</h3>
//                             <p className="text-sm">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="font-semibold">
//                             ฿{item.price * item.quantity}.00
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Summary */}
//                     <div className="mt-4 text-md space-y-1">
//                       <div className="flex justify-between">
//                         <span>Subtotal</span>
//                         <span>฿{order.subtotal}.00</span>
//                       </div>
//                       {order.shipping > 0 && (
//                         <div className="flex justify-between">
//                           <span>Shipping</span>
//                           <span>฿{order.shipping}.00</span>
//                         </div>
//                       )}
//                       <div className="flex justify-between font-bold pt-2 border-t mt-4 text-xl">
//                         <span>Total</span>
//                         <span>฿{order.total}.00</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
