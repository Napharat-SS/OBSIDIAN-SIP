// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function MyOrders() {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch orders จาก backend
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://localhost:3030/api/orders", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             // 👇 เพิ่ม Bearer token ถ้าใช้ JWT auth
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await res.json();

//         if (!data.error) {
//           setOrders(data.orders || []);
//         } else {
//           console.error("Fetch orders error:", data.message);
//         }
//       } catch (err) {
//         console.error("Server error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-[#0f0f10] min-h-screen flex items-center justify-center text-gray-300 text-2xl">
//         Loading your orders...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0f0f10] min-h-screen px-4 py-10 text-gray-300">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8">My Orders</h1>

//         {orders.length === 0 ? (
//           <div className="text-center bg-[#341f01] p-6 rounded-xl">
//             <p className="text-xl">You don’t have any orders yet.</p>
//             <button
//               onClick={() => navigate("/")}
//               className="mt-6 bg-[#c58c4ce6] text-black px-6 py-3 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
//             >
//               Shop Now
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-8">
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="bg-[#341f01] shadow-md rounded-2xl p-6"
//               >
//                 {/* Header: วันที่ + Order Number */}
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//                   <div>
//                     <p className="text-lg">
//                       <strong>Date:</strong>{" "}
//                       {new Date(order.createdAt).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       })}
//                     </p>
//                     <p className="text-lg">
//                       <strong>Order Number:</strong> {order.orderNumber}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() =>
//                       navigate("/profile/notification", {
//                         state: { orderId: order._id },
//                       })
//                     }
//                     className="mt-4 sm:mt-0 bg-[#c58c4ce6] text-black px-5 py-2 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
//                   >
//                     Track Order
//                   </button>
//                 </div>

//                 {/* Basket Items */}
//                 <div className="border-t border-b divide-y">
//                   {order.items.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-between items-center py-3"
//                     >
//                       <div>
//                         <h3 className="font-semibold">{item.name}</h3>
//                         <p className="text-sm">Qty: {item.quantity}</p>
//                       </div>
//                       <div className="font-semibold">
//                         ฿{item.price * item.quantity}.00
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Summary */}
//                 <div className="mt-4 text-md space-y-1">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>฿{order.subtotal}.00</span>
//                   </div>
//                   {order.deliveryFee > 0 && (
//                     <div className="flex justify-between">
//                       <span>Shipping</span>
//                       <span>฿{order.deliveryFee}.00</span>
//                     </div>
//                   )}
//                   <div className="flex justify-between font-bold pt-2 border-t mt-4 text-xl">
//                     <span>Total</span>
//                     <span>฿{order.total}.00</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const navigate = useNavigate();

  // 🔹 Mock Data: ภายหลังจะดึงมาจาก backend /orders ของ user
  const orders = [
    {
      orderId: "000-123456789",
      date: "September 1, 2025",
      basket: [
        { id: 1, name: "Cappuccino", quantity: 2, price: 80 },
        { id: 2, name: "Croissant", quantity: 1, price: 65 },
      ],
      subtotal: 225,
      shipping: 20,
      total: 245,
    },
    {
      orderId: "000-987654321",
      date: "September 5, 2025",
      basket: [{ id: 3, name: "Latte", quantity: 1, price: 90 }],
      subtotal: 90,
      shipping: 0,
      total: 90,
    },
  ];

  return (
    <div className="bg-[#0f0f10] min-h-screen px-4 py-10 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center bg-[#341f01] p-6 rounded-xl">
            <p className="text-xl">You don’t have any orders yet.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-[#c58c4ce6] text-black px-6 py-3 rounded-xl hover:bg-[#ddb07ee6] transition-colors duration-300 font-medium"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order.orderId}
                className="bg-[#341f01] shadow-md rounded-2xl p-6"
              >
                {/* Header: วันที่ + Order Number */}
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
                    Track Order
                  </button>
                </div>

                {/* Basket Items */}
                <div className="border-t border-b divide-y">
                  {order.basket.map((item) => (
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
                  {order.shipping > 0 && (
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>฿{order.shipping}.00</span>
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
  );
}