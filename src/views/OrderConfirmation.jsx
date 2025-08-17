import { useLocation, useNavigate } from "react-router-dom";

// สร้าง Component ชื่อ OrderConfirmation เป็น function
export const OrderConfirmation = () => {
  const navigate = useNavigate(); // Hook สำหรับการเปลี่ยนหน้า (navigate)
  const location = useLocation(); // Hook สำหรับเข้าถึง object ที่เก็บ state จาก Checkout Page

  // ดึงข้อมูลคำสั่งซื้อที่ส่งมาจากหน้า Checkout ออกมา
  // 'location.state' คือ object ที่เก็บข้อมูลที่เราส่งมา
  // '|| {}' ใช้เพื่อป้องกัน error ในกรณีที่เข้าหน้านี้โดยตรงโดยที่ไม่มีข้อมูล
  const { basket, subtotal, shipping, total, customer, address, note } =
    location.state || {};

  // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม "Track Your Order"
  const handleTrackOrder = () => {
    // กดแล้ว จะไปหน้า User Profile เพื่อให้ User ติดตามสถานะคำสั่งซื้อ
    navigate("/profile/notification");
  };

  // Function to generate a random order number (สร้างหมายเลขคำสั่งซื้อแบบสุ่ม)
  const generateOrderNumber = () => {
    // สร้างตัวเลขสุ่ม 9 หลักต่อท้ายเลข '000-'
    return `000-${Math.floor(100000000 + Math.random() * 900000000)}`;
  };

  // Function to get the current date (สำหรับดึงวันที่ปัจจุบัน)
  const getOrderDate = () => {
    const date = new Date(); // สร้าง object Date
    const options = { year: "numeric", month: "long", day: "numeric" }; // กำหนด date format
    return date.toLocaleDateString("en-US", options); // แปลงวันที่ให้เป็น string ตาม format ที่กำหนด
  };

  // ตรวจสอบว่ามีค่าจัดส่งหรือไม่ เพื่อใช้ในการแสดงผล
  const isDelivery = shipping > 0;

  // ส่วนนี้จะแสดงเมื่อไม่มีข้อมูลคำสั่งซื้อ เช่น เข้ามาหน้านี้โดยตรง
  if (!location.state) {
    return (
      <div className="bg-[url('/bg-coffee-cookie.jpg')] bg-cover bg-no-repeat bg-center min-h-screen px-4 py-10">
        <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-neutral-300 bg-opacity-70">
          <h1 className="text-4xl font-bold">Error!</h1>
          <p className="mt-4">
            No order data found. Please go back to the checkout page.
          </p>
          {/* // สร้างปุ่มไว้ ให้ User กดแล้วกลับไปหน้า checkout */}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-[#E6D9C2] text-[#3F3C38] px-6 py-3 rounded-xl hover:bg-yellow-700 hover:text-white transition-all"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    );
  }

  // --- ส่วนของ JSX (หน้าตาของ Component) ---
  return (
    // Container หลักของหน้าจอ
    <div className="bg-[url('/bg-coffee-cookie.jpg')] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen px-4 py-10 text-[#3F3C38]">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Information Section on the Left side */}
          <div className="bg-neutral-200 shadow-md rounded-2xl p-6 relative">
            <h1 className="text-4xl font-bold mb-4">
              Thank you for your purchase!
            </h1>
            <p className="pt-4 pb-7 mb-6 text-sm text-neutral-500 text-xl">
              Your order will be processed based on the selected order type and
              your specified time. You will receive an notification once it is
              ready or on its way.
            </p>

            {/* Customer Information ที่ดึงค่ามาจากหน้า Checkout */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold mb-2">Billing address</h2>
              <p className="text-xl">
                <strong>Name:</strong> {customer?.firstName} {customer?.lastName}{/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
              </p>
              <p className="text-xl">
                {/* แสดงที่อยู่เฉพาะเมื่อมีค่าจัดส่ง */}
                <strong>Address:</strong> {isDelivery ? address : "N/A"}
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> {customer?.phoneNumber} {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
              </p>
              <p className="text-xl">
                <strong>Email:</strong> {customer?.email} {/* เพิ่ม ?. เพื่อป้องกัน error ถ้า customer เป็น undefined หรือ null */}
              </p>
              <p className="text-l mt-4">
                <strong>Note:</strong> {note || "N/A"} {/* เพิ่ม || 'N/A' เพื่อแสดง 'N/A' ถ้า note ไม่มีค่า */}
              </p>
            </div>

            {/* ปุ่มสำหรับกดเพื่อดูสถานะคำสั่งซื้อ ที่หน้า User Profile */}
            <button
              onClick={handleTrackOrder}
              className="w-full sm:w-auto bg-[#3F3C38] text-[#FFFFFF] px-6 py-3 rounded-xl hover:bg-[#E6D9C2] hover:text-[#000000] hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
            >
              Track Your Order
            </button>
          </div>

          {/* Receipt Section on the Right side: Order Summary */}
          <div className="bg-neutral-200 shadow-md rounded-2xl p-6 relative">
            <h2 className="text-2xl font-bold mb-7">Order Summary</h2>

            {/* รายละเอียดการสั่งซื้อ (วันที่สั่งซื้อ, เลขที่สั่งซื้อ, วิธีชำระเงิน(ถ้ามี)) */}
            <div className="grid grid-cols-3 text-sm text-[#3F3C38] mb-4">
              <div>
                <strong>Date</strong>
                <br />
                {getOrderDate()} {/* เรียกใช้ฟังก์ชันแสดงวันที่ */}
              </div>
              <div>
                <strong>Order Number</strong>
                <br />
                {/* เรียกใช้ฟังก์ชันสร้างเลขที่คำสั่งซื้อ */}
                {generateOrderNumber()}{" "}
              </div>
              {/* ยังไม่แน่ใจว่าจะใส่ไหม เลยตั้งเป็น static mobile banking ไว้ก่อน */}
              <div>
                <strong>Payment Method</strong>
                <br />
                Mobile Banking
              </div>
            </div>

            {/* Product Lists แสดงรายการสินค้าในตะกร้า ที่ดึงค่ามาจากหน้า Checkout */}
            <div className="border-t border-b divide-y">
              {basket.map(
                (
                  item // วนลูปแสดงสินค้าแต่ละชิ้นใน basket
                ) => (
                  <div key={item.id} className="flex items-center py-4 gap-4">
                    <img
                      // ใช้ URL ของรูปภาพจากข้อมูลสินค้าจริงที่ส่งมา
                      // ดึงค่าจาก property image ของ object item ที่ส่งมาใน basket
                      src={item.image}
                      alt={`${item.name} Image`}
                      className="w-16 h-16 rounded-md object-cover" // ใส่ object-cover เพื่อให้รูปภาพไม่เสียสัดส่วน
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-[#7A7267]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="font-semibold">
                      {item.price * item.quantity}.00฿{" "}
                      {/* ราคารวมของสินค้าแต่ละชิ้น */}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Part สรุปราคา */}
            <div className="mt-4 text-sm text-[#3F3C38] space-y-1">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>฿{subtotal}.00</span>
                {/* แสดงค่าจัดส่งเฉพาะเมื่อ Order Type เป็น Delivery */}
              </div>
              {isDelivery && (
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>฿{shipping}.00</span>
                </div>
              )}

              <div className="flex justify-between font-bold pt-2 border-t">
                <span className="pt-4 text-xl">Order Total</span>
                <span className="pt-4 text-xl">฿{total}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
