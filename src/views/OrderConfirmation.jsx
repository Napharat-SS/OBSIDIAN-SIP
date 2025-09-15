import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// สร้าง Component ชื่อ OrderConfirmation เป็น function
export const OrderConfirmation = () => {
  const navigate = useNavigate(); // Hook สำหรับการเปลี่ยนหน้า (navigate)
  const location = useLocation(); // Hook สำหรับเข้าถึง object ที่เก็บ state จาก Checkout Page

  // ดึงข้อมูล order ที่ส่งมาจาก Checkout (response จาก backend)
  const { order } = location.state || {};

  // ส่วนนี้จะแสดงเมื่อไม่มีข้อมูลคำสั่งซื้อ เช่น เข้ามาหน้านี้โดยตรง
  if (!order) {
    return (
      <div className="bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_4px_6px_rgba(0,0,0,0.6)] bg-cover bg-no-repeat bg-center min-h-screen px-4 py-10">
        <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-stone-300 bg-opacity-70">
          <h1 className="text-4xl font-bold">Error!</h1>
          <p className="mt-4">
            No order data found. Please go back to the checkout page.
          </p>
          {/* // สร้างปุ่มไว้ ให้ User กดแล้วกลับไปหน้า checkout */}
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

  // Function to get the order date (ใช้ createdAt จาก backend ถ้ามี)
  const getOrderDate = () => {
    if (order.createdAt) {
      const date = new Date(order.createdAt);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }
    return "N/A";
  };

  // ตรวจสอบว่ามีค่าจัดส่งหรือไม่ เพื่อใช้ในการแสดงผล
  const isDelivery = order.deliveryFee > 0;

  // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม "Track Your Order"
  const handleTrackOrder = () => {
    // กดแล้ว จะไปหน้า Profile My Orders เพื่อให้ User เห็นสรุปรายการและติดตามสถานะคำสั่งซื้อ
    navigate("/profile/my-orders");
  };

  // --- ส่วนของ JSX (หน้าตาของ Component) ---
  return (
    // Container หลักของหน้าจอ
    <div className="bg-[#0f0f10] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen px-4 py-10 text-gray-300">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Information Section on the Left side */}
          <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative text-gray-300">
            <h1 className="text-4xl font-bold mb-4">
              Thank you for your purchase!
            </h1>
            <p className="pt-4 pb-7 mb-6 text-sm text-gray-300 text-xl">
              Your order will be processed based on the selected order type and
              your specified time. You will receive a notification once it is
              ready or on its way.
            </p>

            {/* Customer Information ที่ดึงค่ามาจาก backend */}
            <div className="mb-6">
              <h2 className="text-3xl text-gray-300 font-semibold mb-2">
                Billing address
              </h2>
              <p className="text-xl">
                <strong>Name:</strong>{" "}
                {order.customerInfo?.firstName} {order.customerInfo?.lastName}
              </p>
              <p className="text-xl">
                <strong>Address:</strong> {isDelivery ? order.address : "N/A"}
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> {order.customerInfo?.phoneNumber}
              </p>
              <p className="text-xl">
                <strong>Email:</strong> {order.customerInfo?.email}
              </p>
              <p className="text-l mt-4">
                <strong>Note:</strong> {order.note || "N/A"}
              </p>
            </div>

            {/* ปุ่มสำหรับกดเพื่อดูสถานะคำสั่งซื้อ ที่หน้า My Orders ที่ Profile */}
            <button
              onClick={handleTrackOrder}
              className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-2xl font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Track Your Order
            </button>
          </div>

          {/* Receipt Section on the Right side: Order Summary */}
          <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative">
            <h2 className="text-2xl text-gray-300 font-bold mb-7">
              Order Summary
            </h2>

            {/* รายละเอียดการสั่งซื้อ (วันที่สั่งซื้อ, เลขที่สั่งซื้อ, วิธีชำระเงิน(ถ้ามี)) */}
            <div className="grid grid-cols-3 text-sm text-gray-300 mb-4">
              <div>
                <strong>Date</strong>
                <br />
                {getOrderDate()}
              </div>
              <div>
                <strong>Order Number</strong>
                <br />
                {order._id}
              </div>
              <div>
                <strong>Payment Method</strong>
                <br />
                Mobile Banking
              </div>
            </div>

            {/* Product Lists แสดงรายการสินค้าในตะกร้า จาก backend */}
            <div className="border-t border-b divide-y">
              {order.basketItems.map((item) => (
                <div key={item.productId} className="flex items-center py-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-300">{item.name}</h3>
                    <p className="text-sm text-gray-300">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-gray-300">
                    {item.price * item.quantity}.00฿
                  </div>
                </div>
              ))}
            </div>

            {/* Part สรุปราคา */}
            <div className="mt-4 text-md text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>
                  <strong>Sub Total</strong>
                </span>
                <span>
                  <strong>฿{order.subtotal}.00</strong>
                </span>
              </div>

              {isDelivery && (
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>฿{order.deliveryFee}.00</span>
                </div>
              )}

              <div className="flex justify-between font-bold pt-2 border-t mt-8">
                <span className="pt-4 text-xl">Order Total</span>
                <span className="pt-4 text-xl">฿{order.total}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// // สร้าง Component ชื่อ OrderConfirmation เป็น function
// export const OrderConfirmation = () => {
//   const navigate = useNavigate(); // Hook สำหรับการเปลี่ยนหน้า (navigate)
//   const location = useLocation(); // Hook สำหรับเข้าถึง object ที่เก็บ state จาก Checkout Page

//   // Function to generate a random order number (สร้างหมายเลขคำสั่งซื้อแบบสุ่ม)
//   const generateOrderNumber = () => {
//     // สร้างตัวเลขสุ่ม 9 หลักต่อท้ายเลข 'ORD-'
//     return `ORD-${Math.floor(100000000 + Math.random() * 900000000)}`;
//   };

//   // Function to get the current date (สำหรับดึงวันที่ปัจจุบัน)
//   const getOrderDate = () => {
//     const date = new Date(); // สร้าง object Date
//     const options = { year: "numeric", month: "long", day: "numeric" }; // กำหนด date format
//     return date.toLocaleDateString("en-US", options); // แปลงวันที่ให้เป็น string ตาม format ที่กำหนด
//   };

//   // เก็บหมายเลขคำสั่งซื้อไว้ในตัวแปร
//   const orderId = generateOrderNumber();

//   // ดึงข้อมูลคำสั่งซื้อที่ส่งมาจากหน้า Checkout ออกมา
//   // 'location.state' คือ object ที่เก็บข้อมูลที่เราส่งมา
//   // '|| {}' ใช้เพื่อป้องกัน error ในกรณีที่เข้าหน้านี้โดยตรงโดยที่ไม่มีข้อมูล
//   const { basketItems, subtotal, deliveryFee, total, customerInfo, address, note } =
//     location.state || {};

//   // ตรวจสอบว่ามีค่าจัดส่งหรือไม่ เพื่อใช้ในการแสดงผล
//   const isDelivery = deliveryFee > 0;

//   // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม "Track Your Order"
//   const handleTrackOrder = () => {
//     const orderData = {
//       orderId: orderId,
//       date: getOrderDate(),
//       basketItems,
//       subtotal,
//       deliveryFee,
//       total,
//     };
//     // กดแล้ว จะไปหน้า Profile My Orders เพื่อให้ User เห็นสรุปรายการและติดตามสถานะคำสั่งซื้อ
//     navigate("/profile/my-orders", { state: orderData });
//   };

//   // ส่วนนี้จะแสดงเมื่อไม่มีข้อมูลคำสั่งซื้อ เช่น เข้ามาหน้านี้โดยตรง
//   if (!location.state) {
//     return (
//       <div className="bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_4px_6px_rgba(0,0,0,0.6)] bg-cover bg-no-repeat bg-center min-h-screen px-4 py-10">
//         <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-stone-300 bg-opacity-70">
//           <h1 className="text-4xl font-bold">Error!</h1>
//           <p className="mt-4">
//             No order data found. Please go back to the checkout page.
//           </p>
//           {/* // สร้างปุ่มไว้ ให้ User กดแล้วกลับไปหน้า checkout */}
//           <button
//             onClick={() => navigate("/checkout")}
//             className="mt-6 bg-[#3F3C38] text-[#FFFFFF] px-6 py-3 rounded-xl hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
//           >
//             Go to Checkout
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --- ส่วนของ JSX (หน้าตาของ Component) ---
//   return (
//     // Container หลักของหน้าจอ bg-[url('/Journeyimg/J3.png')]
//     <div className="bg-[#0f0f10] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen px-4 py-10 text-gray-300">
//       <div className="min-h-screen">
//         <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Information Section on the Left side */}
//           <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative text-gray-300">
//             <h1 className="text-4xl font-bold mb-4">
//               Thank you for your purchase!
//             </h1>
//             <p className="pt-4 pb-7 mb-6 text-sm text-gray-300 text-xl">
//               Your order will be processed based on the selected order type and
//               your specified time. You will receive an notification once it is
//               ready or on its way.
//             </p>

//             {/* Customer Information ที่ดึงค่ามาจากหน้า Checkout */}
//             <div className="mb-6">
//               <h2 className="text-3xl text-gray-300 font-semibold mb-2">
//                 Billing address
//               </h2>
//               <p className="text-xl">
//                 <strong>Name:</strong> {customerInfo?.firstName}{" "}
//                 {customerInfo?.lastName}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-xl">
//                 {/* แสดงที่อยู่เฉพาะเมื่อมีค่าจัดส่ง */}
//                 <strong>Address:</strong> {isDelivery ? address : "N/A"}
//               </p>
//               <p className="text-xl">
//                 <strong>Phone:</strong> {customerInfo?.phoneNumber}{" "}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-xl">
//                 <strong>Email:</strong> {customerInfo?.email}{" "}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-l mt-4">
//                 <strong>Note:</strong> {note || "N/A"}{" "}
//                 {/* เพิ่ม || 'N/A' เพื่อแสดง 'N/A' ถ้า note ไม่มีค่า */}
//               </p>
//             </div>

//             {/* ปุ่มสำหรับกดเพื่อดูสถานะคำสั่งซื้อ ที่หน้า My Orders ที่ Profile */}
//             <button
//               onClick={handleTrackOrder}
//               className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-2xl font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Track Your Order
//             </button>
//           </div>

//           {/* Receipt Section on the Right side: Order Summary */}
//           <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative">
//             <h2 className="text-2xl text-gray-300 font-bold mb-7">
//               Order Summary
//             </h2>

//             {/* รายละเอียดการสั่งซื้อ (วันที่สั่งซื้อ, เลขที่สั่งซื้อ, วิธีชำระเงิน(ถ้ามี)) */}
//             <div className="grid grid-cols-3 text-sm text-gray-300 mb-4">
//               <div>
//                 <strong>Date</strong>
//                 <br />
//                 {getOrderDate()} {/* เรียกใช้ฟังก์ชันแสดงวันที่ */}
//               </div>
//               <div>
//                 <strong>Order Number</strong>
//                 <br />
//                 {/* เรียกใช้ฟังก์ชันสร้างเลขที่คำสั่งซื้อ */}
//                 {orderId}
//               </div>
//               {/* ยังไม่แน่ใจว่าจะใส่ไหม เลยตั้งเป็น static mobile banking ไว้ก่อน */}
//               <div>
//                 <strong>Payment Method</strong>
//                 <br />
//                 Mobile Banking
//               </div>
//             </div>

//             {/* Product Lists แสดงรายการสินค้าในตะกร้า ที่ดึงค่ามาจากหน้า Checkout */}
//             <div className="border-t border-b divide-y">
//               {basketItems.map(
//                 (
//                   item // วนลูปแสดงสินค้าแต่ละชิ้นใน basket
//                 ) => (
//                   <div key={item.id} className="flex items-center py-4">
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-300">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-gray-300">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <div className="font-semibold text-gray-300">
//                       {item.price * item.quantity}.00฿{" "}
//                       {/* ราคารวมของสินค้าแต่ละชิ้น */}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* Part สรุปราคา */}
//             <div className="mt-4 text-md text-gray-300 space-y-1">
//               <div className="flex justify-between">
//                 <span>
//                   <strong>Sub Total</strong>
//                 </span>
//                 <span>
//                   <strong>฿{subtotal}.00</strong>
//                 </span>
//               </div>

//               {/* แสดงค่าจัดส่งเฉพาะเมื่อ Order Type เป็น Delivery */}
//               {isDelivery && (
//                 <div className="flex justify-between">
//                   <span>Delivery Fee</span>
//                   <span>฿{deliveryFee}.00</span>
//                 </div>
//               )}

//               <div className="flex justify-between font-bold pt-2 border-t mt-8">
//                 <span className="pt-4 text-xl">Order Total</span>
//                 <span className="pt-4 text-xl">฿{total}.00</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// // สร้าง Component ชื่อ OrderConfirmation เป็น function
// export const OrderConfirmation = () => {
//   const navigate = useNavigate(); // Hook สำหรับการเปลี่ยนหน้า (navigate)
//   const location = useLocation(); // Hook สำหรับเข้าถึง object ที่เก็บ state จาก Checkout Page

//   // Support both: location.state = { order: {...} } OR location.state = orderObject directly
//   const order = location.state?.order ?? location.state ?? null;

//   // Function to get the order date (ใช้ createdAt ถ้ามี, otherwise current date)
//   const formatDate = (isoOrUndefined) => {
//     const date = isoOrUndefined ? new Date(isoOrUndefined) : new Date();
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return date.toLocaleDateString("en-US", options);
//   };

//   // ดึงข้อมูลคำสั่งซื้อที่ส่งมาจากหน้า Checkout ออกมา
//   // 'location.state' คือ object ที่เก็บข้อมูลที่เราส่งมา
//   // '|| {}' ใช้เพื่อป้องกัน error ในกรณีที่เข้าหน้านี้โดยตรงโดยที่ไม่มีข้อมูล

//   // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม "Track Your Order"

//   // ส่วนนี้จะแสดงเมื่อไม่มีข้อมูลคำสั่งซื้อ เช่น เข้ามาหน้านี้โดยตรง
//   if (!order) {
//     return (
//       <div className="bg-gradient-to-r from-[#000000] to-[#341f01] shadow-[0_4px_6px_rgba(0,0,0,0.6)] bg-cover bg-no-repeat bg-center min-h-screen px-4 py-10">
//         <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-stone-300 bg-opacity-70">
//           <h1 className="text-4xl font-bold">Error!</h1>
//           <p className="mt-4">
//             No order data found. Please go back to the checkout page.
//           </p>
//           {/* // สร้างปุ่มไว้ ให้ User กดแล้วกลับไปหน้า checkout */}
//           <button
//             onClick={() => navigate("/checkout")}
//             className="mt-6 bg-[#3F3C38] text-[#FFFFFF] px-6 py-3 rounded-xl hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
//           >
//             Go to Checkout
//           </button>
//         </div>
//       </div>
//     );
//   }
//   // safe accessors
//   const customerInfo = order.customerInfo ?? {};
//   const basketItems = Array.isArray(order.basketItems) ? order.basketItems : [];
//   const subtotal = order.subtotal ?? 0;
//   const deliveryFee = order.deliveryFee ?? 0;
//   const total = order.total ?? subtotal + deliveryFee;
//   const note = order.note ?? "";
//   const address = order.address ?? "N/A";
//   const orderNumber = order.orderNumber ?? "";
//   const displayDate = order.createdAt
//     ? formatDate(order.createdAt)
//     : formatDate();

//   // ตรวจสอบว่ามีค่าจัดส่งหรือไม่ เพื่อใช้ในการแสดงผล
//   const isDelivery = deliveryFee > 0;

//   const handleTrackOrder = () => {
//     // ส่งทั้ง order object ไปหน้า My Orders (Profile)
//     navigate("/profile/my-orders", { state: order });
//   };

//   // --- ส่วนของ JSX (หน้าตาของ Component) ---
//   return (
//     // Container หลักของหน้าจอ bg-[url('/Journeyimg/J3.png')]
//     <div className="bg-[#0f0f10] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen px-4 py-10 text-gray-300">
//       <div className="min-h-screen">
//         <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Information Section on the Left side */}
//           <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative text-gray-300">
//             <h1 className="text-4xl font-bold mb-4">
//               Thank you for your purchase!
//             </h1>
//             <p className="pt-4 pb-7 mb-6 text-sm text-gray-300 text-xl">
//               Your order will be processed based on the selected order type and
//               your specified time. You will receive an notification once it is
//               ready or on its way.
//             </p>

//             {/* Customer Information ที่ดึงค่ามาจากหน้า Checkout */}
//             <div className="mb-6">
//               <h2 className="text-3xl text-gray-300 font-semibold mb-2">
//                 Billing address
//               </h2>
//               <p className="text-xl">
//                 <strong>Name:</strong> {customerInfo?.firstName}{" "}
//                 {customerInfo?.lastName}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-xl">
//                 {/* แสดงที่อยู่เฉพาะเมื่อมีค่าจัดส่ง */}
//                 <strong>Address:</strong> {isDelivery ? address : "N/A"}
//               </p>
//               <p className="text-xl">
//                 <strong>Phone:</strong> {customerInfo?.phoneNumber}{" "}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-xl">
//                 <strong>Email:</strong> {customerInfo?.email}{" "}
//                 {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
//               </p>
//               <p className="text-l mt-4">
//                 <strong>Note:</strong> {note || "N/A"}{" "}
//                 {/* เพิ่ม || 'N/A' เพื่อแสดง 'N/A' ถ้า note ไม่มีค่า */}
//               </p>
//             </div>

//             {/* ปุ่มสำหรับกดเพื่อดูสถานะคำสั่งซื้อ ที่หน้า My Orders ที่ Profile */}
//             <button
//               onClick={handleTrackOrder}
//               className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-2xl font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Track Your Order
//             </button>
//           </div>

//           {/* Receipt Section on the Right side: Order Summary */}
//           <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative">
//             <h2 className="text-2xl text-gray-300 font-bold mb-7">
//               Order Summary
//             </h2>

//             {/* รายละเอียดการสั่งซื้อ (วันที่สั่งซื้อ, เลขที่สั่งซื้อ, วิธีชำระเงิน(ถ้ามี)) */}
//             <div className="grid grid-cols-3 text-sm text-gray-300 mb-4">
//               <div>
//                 <strong>Date</strong>
//                 <br />
//                 {getOrderDate()} {/* เรียกใช้ฟังก์ชันแสดงวันที่ */}
//               </div>
//               <div>
//                 <strong>Order Number</strong>
//                 <br />
//                 {/* เรียกใช้ฟังก์ชันสร้างเลขที่คำสั่งซื้อ */}
//                 {order?.orderNumber}
//               </div>
//               {/* ยังไม่แน่ใจว่าจะใส่ไหม เลยตั้งเป็น static mobile banking ไว้ก่อน */}
//               <div>
//                 <strong>Payment Method</strong>
//                 <br />
//                 Mobile Banking
//               </div>
//             </div>

//             {/* Product Lists แสดงรายการสินค้าในตะกร้า ที่ดึงค่ามาจากหน้า Checkout */}
//             <div className="border-t border-b divide-y">
//               {basketItems.map(
//                 (
//                   item // วนลูปแสดงสินค้าแต่ละชิ้นใน basket
//                 ) => (
//                   <div key={item.id} className="flex items-center py-4">
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-300">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-gray-300">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <div className="font-semibold text-gray-300">
//                       {item.price * item.quantity}.00฿{" "}
//                       {/* ราคารวมของสินค้าแต่ละชิ้น */}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* Part สรุปราคา */}
//             <div className="mt-4 text-md text-gray-300 space-y-1">
//               <div className="flex justify-between">
//                 <span>
//                   <strong>Sub Total</strong>
//                 </span>
//                 <span>
//                   <strong>฿{subtotal}.00</strong>
//                 </span>
//               </div>

//               {/* แสดงค่าจัดส่งเฉพาะเมื่อ Order Type เป็น Delivery */}
//               {isDelivery && (
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>฿{deliveryFee}.00</span>
//                 </div>
//               )}

//               <div className="flex justify-between font-bold pt-2 border-t mt-8">
//                 <span className="pt-4 text-xl">Order Total</span>
//                 <span className="pt-4 text-xl">฿{total}.00</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
