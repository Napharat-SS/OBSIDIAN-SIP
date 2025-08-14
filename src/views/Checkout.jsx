import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { coffeeData } from "../mock/coffeeData"; // Import mock data

// สร้าง Component ชื่อ Checkout เป็น function
export const Checkout = () => {
  const navigate = useNavigate();

  // --- ประกาศ State ต่างๆ สำหรับเก็บข้อมูลในหน้า Checkout ---

  // สร้าง state สำหรับตะกร้าสินค้า (basket)
  // โดยใช้ข้อมูลจาก coffeeData มาสร้างเป็นตะกร้าเริ่มต้น และกำหนด quantity ให้ทุกชิ้นเท่ากับ 1
  const [basket, setBasket] = useState(
    coffeeData.map((item) => ({ ...item, quantity: 1 }))
  );
  // สร้าง state สำหรับวิธีรับสินค้า (dinein, pickup, delivery) เริ่มต้นเป็น "dinein"
  const [orderMethod, setOrderMethod] = useState("dinein");
  // สร้าง state สำหรับตัวเลือกที่อยู่จัดส่ง (saved, new) เริ่มต้นเป็น "saved"
  const [addressChoice, setAddressChoice] = useState("saved");
  // สร้าง state สำหรับเก็บที่อยู่จัดส่งใหม่
  const [deliveryAddress, setDeliveryAddress] = useState("");
  // สร้าง state สำหรับเก็บข้อมูลลูกค้า (ชื่อ, เบอร์, อีเมล)
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  // สร้าง state สำหรับเก็บเวลาและหมายเหตุ
  const [timeNote, setTimeNote] = useState({
    time: "In 15 minutes",
    note: "",
  });
  // --- การประกาศค่าคงที่และ State ที่ใช้ในการคำนวณ ---
  const deliveryFee = 40;
  // สร้าง state สำหรับราคารวมของสินค้า (ไม่รวมค่าจัดส่ง)
  const [subtotal, setSubtotal] = useState(0);

  // --- ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงต่างๆ ---

  // ฟังก์ชัน handleQuantityChange: ใช้สำหรับอัปเดตจำนวนสินค้าในตะกร้า
  const handleQuantityChange = (itemId, newQuantity) => {
    setBasket(
      (
        prevBasket // อัปเดต state basket โดยอิงจากค่าเก่า (prevBasket)
      ) =>
        prevBasket.map(
          (
            item // วนลูปในตะกร้าเก่าเพื่อหา item ที่ต้องการแก้ไข
          ) =>
            item.id === itemId
              ? { ...item, quantity: Number(newQuantity) }
              : item
        ) // ถ้า item.id ตรงกับ itemId ที่ส่งมา ให้สร้าง object ใหม่ โดยอัปเดตแค่ quantity: item // ถ้าไม่ตรง ก็คืนค่า item เดิม
    );
  };

  // ฟังก์ชัน สำหรับลบสินค้าออกจากตะกร้า
  const handleRemoveItem = (itemId) => {
    // ใช้ filter เพื่อสร้างตะกร้าใหม่ที่มีเฉพาะ item ที่ id ไม่ตรงกับ itemId ที่ต้องการลบ
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  // useEffect Hook: ใช้สำหรับคำนวณราคารวม (subtotal) ใหม่ทุกครั้งที่ basket เปลี่ยนแปลง
  useEffect(() => {
    const calculatedSubtotal = basket.reduce(
      // วนลูปในตะกร้า (basket) เพื่อคำนวณราคารวมของสินค้าทั้งหมด
      (sum, item) => sum + item.price * item.quantity,
      0
    ); // นำราคารวมปัจจุบัน (sum) มาบวกกับ (ราคา * จำนวน) ของสินค้าแต่ละชิ้น 0 // ค่าเริ่มต้นของ sum คือ 0
    setSubtotal(calculatedSubtotal); // อัปเดต state subtotal ด้วยราคารวมที่คำนวณได้
  }, [basket]); // Dependency array: useEffect จะทำงานใหม่เมื่อค่าใน basket เปลี่ยนแปลงเท่านั้น

  // ฟังก์ชัน handleConfirm: ทำงานเมื่อกดปุ่ม "Place Order"
  const handleConfirm = (event) => {
    event.preventDefault(); // ป้องกันการ reload หน้าเว็บเมื่อฟอร์มถูก submit
    // คำนวณราคาสุทธิ (finalTotal) โดยตรวจสอบว่าถ้าเลือก "delivery" ให้บวกค่าจัดส่งเพิ่ม
    const finalTotal =
      orderMethod === "delivery" ? subtotal + deliveryFee : subtotal;

    // ใช้ navigate เพื่อเปลี่ยนหน้าไปยัง "/OrderConfirmation"
    navigate("/order-confirmation", {
      // ส่งข้อมูลทั้งหมดไปยังหน้า OrderConfirmation ผ่าน state
      state: {
        basket: basket, // ส่งข้อมูล basket ไปทั้งก้อน
        subtotal, // ราคารวมของสินค้า
        shipping: orderMethod === "delivery" ? deliveryFee : 0, // ค่าจัดส่ง (เป็น 0 ถ้าไม่ใช่ delivery)
        total: finalTotal, // ราคาสุทธิทั้งหมด
        customer: customerInfo, // ข้อมูลลูกค้า
        address: orderMethod === "delivery" ? deliveryAddress : "N/A",
        note: timeNote.note, // หมายเหตุจากลูกค้า
      },
    });
  };

  // --- การคำนวณค่าตัวแปรอื่นๆ สำหรับใช้ใน JSX ---

  // ตรวจสอบว่าผู้ใช้เลือก "delivery" และ "new address" หรือไม่
  const isNewAddress = orderMethod === "delivery" && addressChoice === "new";

  // คำนวณราคาสุทธิอีกครั้งสำหรับแสดงผลในหน้า Checkout
  const finalTotal =
    orderMethod === "delivery" ? subtotal + deliveryFee : subtotal;

  // --- ส่วนของ JSX (หน้าตาของ Component) ---
  return (
    // Container หลักของ Component
    <div className="bg-[url('/bg-coffee-cookie.jpg')] bg-cover bg-no-repeat bg-center min-h-screen px-4 py-10">
      {/* ฟอร์มทั้งหมด ที่เมื่อกด Submit จะเรียก handleConfirm */}
      <form
        onSubmit={handleConfirm}
        className="max-w-4xl mx-auto bg-[#fcfbfa] rounded-2xl shadow-lg p-4 sm:p-6 space-y-6"
      >
        {/* แถบหัวข้อ Checkout */}
        <div className="bg-[#472C03] py-4 px-4 rounded-lg space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F2EC] text-center">
            🛒 Checkout
          </h1>
        </div>

        {/* Order Summary Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            🧾 Order Summary
          </h2>
          <div className="bg-[#F5F2EC] p-4 rounded-lg space-y-2">
            <ul className="space-y-1">
              {/* วนลูปแสดงรายการสินค้าแต่ละชิ้นใน basket */}
              {basket.map((item) => (
                <li
                  // {/* key ที่จำเป็นสำหรับ React เพื่อระบุแต่ละ element ที่ไม่ซ้ำกัน */}
                  key={item.id}
                  className="flex justify-between items-center text-sm sm:text-base"
                >
                  <div className="flex-grow">{item.name}</div>
                  <div className="flex items-center gap-2">
                    {/* Quantity dropdown สำหรับเพื่มลดจำนวนสินค้า */}
                    <select
                      // {/* กำหนดค่าที่แสดงใน dropdown ตาม state */}
                      value={item.quantity}
                      onChange={
                        (e) => handleQuantityChange(item.id, e.target.value) // เมื่อเปลี่ยนค่า ให้เรียกฟังก์ชันอัปเดตจำนวน
                      }
                      className="border rounded p-1 text-sm"
                    >
                      {/* วนลูปสร้าง option สำหรับจำนวน 1-10 */}
                      {[...Array(10).keys()].map((q) => (
                        <option key={q + 1} value={q + 1}>
                          {q + 1}
                        </option>
                      ))}
                    </select>
                    {/* แสดงราคารวมของสินค้าชิ้นนั้นๆ */}
                    <span>{item.price * item.quantity}฿</span>

                    {/* ปุ่มลบสินค้าเล็กๆ หากลูกค้าเปลี่ยนใจอยากลบบางรายการออก ก่อน place order */}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-amber-400 transition-colors p-1 rounded"
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <hr />

            {/* แสดงค่าจัดส่งเฉพาะเมื่อเลือก delivery */}
            <div
              className={`flex justify-between font-medium ${
                orderMethod === "delivery" ? "" : "hidden"
              }`}
            >
              <span>Delivery Fee</span>
              <span>{deliveryFee}฿</span>
            </div>

            {/* แสดงราคารวมสุทธิ */}
            <div className="flex justify-between font-bold text-base sm:text-lg">
              <span>Subtotal</span>
              <span>{finalTotal}฿</span>
            </div>
          </div>
        </div>

        {/* Order Type Section ประเภทการสั่งซื้อ */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            📍 Order Type
          </h2>
          <div className="bg-[#F5F2EC] p-4 rounded-lg space-y-2">
            <div className="space-y-1">
              {/* Radio button สำหรับ Dine-in */}
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#E6D9C2]">
                <input
                  type="radio"
                  name="method"
                  value="dinein"
                  checked={orderMethod === "dinein"} // ตรวจสอบว่าถูกเลือกอยู่หรือไม่
                  onChange={(e) => setOrderMethod(e.target.value)} // เมื่อเลือกแล้ว ให้เปลี่ยน state
                  className="accent-[#9C9284]"
                />
                Dine-in
              </label>

              {/* Radio button สำหรับ Pick-up */}
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#E6D9C2]">
                <input
                  type="radio"
                  name="method"
                  value="pickup"
                  checked={orderMethod === "pickup"}
                  onChange={(e) => setOrderMethod(e.target.value)}
                  className="accent-[#9C9284]"
                />
                Pick-up at store
              </label>

              {/* Radio button สำหรับ Delivery */}
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#E6D9C2]">
                <input
                  type="radio"
                  name="method"
                  value="delivery"
                  checked={orderMethod === "delivery"}
                  onChange={(e) => setOrderMethod(e.target.value)}
                  className="accent-[#9C9284]"
                />
                Delivery
              </label>
            </div>

            {/* แสดงตัวเลือกที่อยู่จัดส่งเฉพาะเมื่อ user เลือก Delivery */}
            {orderMethod === "delivery" && (
              <div className="ml-6 space-y-0">
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-[#E6D9C2]">
                  <input
                    type="radio"
                    name="address-choice"
                    value="saved"
                    checked={addressChoice === "saved"}
                    onChange={(e) => setAddressChoice(e.target.value)}
                    className="accent-[#9C9284]"
                  />
                  <span className="text-sm">Use saved address</span>
                </label>
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-[#E6D9C2]">
                  <input
                    type="radio"
                    name="address-choice"
                    value="new"
                    checked={addressChoice === "new"}
                    onChange={(e) => setAddressChoice(e.target.value)}
                    className="accent-[#9C9284]"
                  />
                  <span className="text-sm">Use new address</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Delivery Address Field จะแสดงเมื่อ User เลือก Delivery และ New Address */}
        {isNewAddress && (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              🏠 Delivery Address
            </h2>
            <div className="bg-[#F5F2EC] p-4 rounded-lg">
              <textarea
                className="w-full border rounded-lg p-2 text-sm sm:text-base"
                placeholder="Delivery Address (if applicable)"
                value={deliveryAddress} // กำหนดค่าใน textarea ตาม state
                onChange={(e) => setDeliveryAddress(e.target.value)} // เมื่อ user พิมพ์มา ให้เปลี่ยน state
              ></textarea>
            </div>
          </div>
        )}

        {/* Customer Information Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            👤 Customer Information
          </h2>
          <div className="bg-[#F5F2EC] p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Input สำหรับชื่อเต็ม */}
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-lg p-2 text-sm sm:text-base"
                value={customerInfo.fullName}
                onChange={
                  (e) =>
                    setCustomerInfo({
                      ...customerInfo, //ใช้ Spread Operator (...) เพื่อ คัดลอก Properties ทั้งหมดจาก Object customerInfo เดิมมาสร้างเป็น Object ใหม่
                      fullName: e.target.value,
                    }) // อัปเดตแค่ fullName
                }
              />

              {/* Input สำหรับเบอร์โทรศัพท์ */}
              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-lg p-2 text-sm sm:text-base"
                value={customerInfo.phoneNumber}
                onChange={(e) =>
                  setCustomerInfo({
                    ...customerInfo,
                    phoneNumber: e.target.value,
                  })
                }
              />

              {/* Input สำหรับอีเมล */}
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-2 md:col-span-2 text-sm sm:text-base"
                value={customerInfo.email}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, email: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Time & Note Section เลือกเวลาและใส่หมายเหตุ */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            🕒 Time & Note
          </h2>
          <div className="bg-[#F5F2EC] p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dropdown สำหรับเลือกเวลา */}
              <select
                className="border rounded-lg p-2 text-sm sm:text-base"
                value={timeNote.time}
                onChange={(e) =>
                  setTimeNote({ ...timeNote, time: e.target.value }) //ใช้ Spread Operator เพื่อคัดลอก Properties ทั้งหมดจาก Object timeNote เดิมมาสร้างเป็น Object ใหม่
                }
              >
                <option>In 15 minutes</option>
                <option>In 30 minutes</option>
                <option>In 1 hour</option>
                <option>Custom Time</option>
              </select>

              {/* Input สำหรับหมายเหตุ */}
              <input
                type="text"
                placeholder="Note Ex. Pick up at 3 PM."
                className="border rounded-lg p-2 text-sm sm:text-base"
                value={timeNote.note}
                onChange={(e) =>
                  setTimeNote({ ...timeNote, note: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* ปุ่มสำหรับกดยืนยันคำสั่งซื้อ */}
        <button
          type="submit" // กำหนดให้เป็นปุ่ม submit ของฟอร์ม
          className="w-full sm:w-auto bg-[#472C03] text-[#FFFFFF] px-6 py-3 rounded-xl hover:bg-[#E6D9C2] hover:text-[#000000] hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
};

// Notes - Pending for Discussion
// 1. Checkout.jsx - FYI เมื่อ user กดเลือก saved address แล้วจะไปดึงข้อมูลลูกค้าจากหน้า user profile มาอัติโนมัติ ต้องมี user data ก่อน และจะทำภายหลัง - Connect with Earth
// 2. Checkout.jsx - FYI สร้าง ตัวแปร basket ไว้แล้ว รับข้อมูล basket ทั้งก้อน จากหน้า basket ของพี่ตี - connect with P'tee
// 3. Checkout.jsx - FYI add function delete มา เพื่อลบรายการสินค้าออก หากลูกค้าเปลี่ยนใจไม่เอารายการนี้แล้ว - all ควรเอาออกไหม หรือว่าเอาไว้ดี ถ้าไม่มี function delete ก็คือเมื่อ user กดปุ่ม Go to checkout จากหน้าพี่ตี มาหน้านี้แล้ว ก็สามารถเพิ่มลดจำนวนสินค้าได้อย่างเดียว ลบรายการสินค้าออกไม่ได้
// 4. OrderConfirmation.jsx - FYI สร้าง Property ชื่อ Image ไว้แล้ว เพื่่อรับค่าของ basket ทั้งก้อน ที่ส่งมาจากหน้า Checkout
// 5. OrderConfirmation.jsx - FYI สร้างปุ่ม Track Your Order กดแล้วจะ link ไปที่หน้า User Profile เพื่อดูสถานะคำสั่งซื้อ รอใส่ path เพ่ื่อ navigate - Connect with Earth
// 6. OrderConfirmation.jsx - Payment Method ยังไม่แน่ใจว่าจะใส่ไหม เลยตั้งเป็น static ว่า mobile banking ไว้ก่อน จะเอาไว้หรือให้ตัดออกดี - all
// 7. Both pages - Background Image เอารูปไหนดี หรือเอาเป็นพื้นหลังสี base เปล่าๆ - all
