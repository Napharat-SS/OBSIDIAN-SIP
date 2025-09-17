import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const OrderConfirmation = () => {
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนเส้นทางไปยังหน้าอื่น
  const location = useLocation(); // ใช้สำหรับดึงค่า state ที่ถูกส่งมาจาก navigate
  
  // ดึง order จาก navigate state (ถ้าไม่มีจะได้ค่า undefined)
  const order = location.state?.order;

  // ถ้าไม่มี order → ให้แสดงหน้า Error และปุ่มเพื่อกดกลับไป Checkout
  if (!order) {
    return (
      <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen px-4 py-10">
        <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-stone-300 bg-opacity-70">
          <h1 className="text-4xl font-bold">Error!</h1>
          <p className="mt-4">No order data found.</p>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-[#3F3C38] text-[#FFFFFF] px-6 py-3 rounded-xl hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    );
  }

  // เช็คว่าเป็น order แบบ Delivery ไหม (มีค่าส่งหรือไม่)
  const isDelivery = order.deliveryFee > 0;

  return (
    <div className="bg-[#0f0f10] pt-40 min-h-screen px-4 py-10 text-gray-300">
      {/* layout จะแบ่งเป็น 2 ฝั่ง (Customer Info และ Order Summary) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT: Customer Info */}
        <div className="bg-[#341f01] shadow-md rounded-2xl p-6">
          <h1 className="text-4xl font-bold mb-4">
            Thank you for your purchase!
          </h1>
          <p className="pt-4 pb-7 mb-6 text-xl">
            Your order will be processed based on the selected order type and
            your specified time.
          </p>

          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-2">Billing address</h2>
            <p className="text-xl">
              <strong>Name:</strong> {order.customerInfo.firstName}{" "}
              {order.customerInfo.lastName}
            </p>
            <p className="text-xl">
              {/* ถ้าเป็น delivery จะแสดงที่อยู่ ถ้าไม่ใช่ delivery จะแสดง N/A */}
              <strong>Address:</strong> {isDelivery ? order.address : "N/A"}
            </p>
            <p className="text-xl">
              <strong>Phone:</strong> {order.customerInfo.phoneNumber}
            </p>
            <p className="text-xl">
              <strong>Email:</strong> {order.customerInfo.email}
            </p>
            <p className="mt-4 text-lg">
              <strong>Note:</strong> {order.note || "N/A"} {/* Note หรือถ้าไม่มี Note พิมพ์มา จะแสดง N/A */}
            </p>
          </div>

          <button {/* ปุ่มเพื่อ link ไปหน้า My Orders ใน Profile Page เพื่อ Track Order status */}
            onClick={() => navigate("/profile/my-orders")}
            className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-2xl font-medium cursor-pointer"
          >
            Track Your Order
          </button>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-[#341f01] shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-7">Order Summary</h2>

          <div className="grid grid-cols-3 text-sm mb-4">
            <div>
              <strong>Date</strong> <br />
              {/* แสดงวันที่ปัจจุบัน */}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div>
              <strong>Order Number</strong> <br />
              {order.orderNumber || "#TEMP12345"} {/* แสดงเลข order ถ้าไม่มีใช้ TEMP */}
            </div>
            <div>
              <strong>Payment Method</strong> <br />
              Mobile Banking {/* วิธีจ่ายเงิน (fix ไว้) */}
            </div>
          </div>

          <div className="border-t border-b divide-y">
            {/* วน loop โดยใช้ map เพื่อเอาสินค้าแต่ละชิ้นจาก basketItems มาแสดง โดยที่ index คือหมายเลขลำดับสินค้า (0,1,2,...) ใช้เป็น key ชั่วคราว */}
            {order.basketItems.map((item, index) => (
              <div key={index} className="flex items-center py-4">
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3> {/* ชื่อสินค้า */}
                  <p className="text-sm">Qty: {item.quantity}</p> {/* จำนวนสินค้า */}
                </div>
                <div className="font-semibold">
                  {item.price * item.quantity}฿ {/* คำนวณราคาต่อ item */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-1 text-gray-300">
            <div className="flex justify-between">
              <span>
                <strong>Sub Total</strong>
              </span>
              <span>
                <strong>฿{order.subtotal}</strong> {/* ยอดรวมก่อนบวกค่าส่ง */}
              </span>
            </div>
            {isDelivery && (
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>฿{order.deliveryFee}</span> {/* ค่าขนส่ง */}
              </div>
            )}
            <div className="flex justify-between font-bold pt-2 border-t mt-8">
              <span className="pt-4 text-xl">Order Total</span>
              <span className="pt-4 text-xl">฿{order.total}</span> {/* ยอดรวมทั้งหมด */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
