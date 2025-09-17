import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import instance ของ axios/api ที่เตรียมไว้
import api from "../services/api";
import { useCart } from "../context/CardContext";

// สร้าง Component ชื่อ Checkout เป็น function
export const Checkout = () => {
  const navigate = useNavigate(); // hook ใช้สำหรับเปลี่ยนหน้า
  const location = useLocation(); // hook ใช้สำหรับดึงข้อมูลที่ถูกส่งผ่าน state ตอน navigate
  const { user } = useAuth(); // ดึงข้อมูล user จาก AuthContext
  const {clearCart} = useCart(); // ดึงฟังก์ชัน Clear ตะกร้าจาก CartContext

  // รับ basket จากหน้า Addtocart ผ่าน navigate state
  const initialBasket = location.state?.basket || [];
  // ถ้ามี basket จาก state ก็ใช้ ถ้าไม่มีก็เป็น []

  // --- State หลัก ---
  const [basket, setBasket] = useState(initialBasket); // state เก็บตะกร้าสินค้า
  // state เก็บวิธีการสั่ง: dinein, pickup, delivery
  const [orderMethod, setOrderMethod] = useState("dinein");
  // state เก็บการเลือกข้อมูลลูกค้า: saved หรือ new
  const [profileChoice, setProfileChoice] = useState("saved");
  // state เก็บการเลือกที่อยู่: saved หรือ new
  const [addressChoice, setAddressChoice] = useState("saved");

  // Set state เดียวเก็บ customer info
  const [customerInfo, setCustomerInfo] = useState({
    firstName: user?.firstname || "", // ใช้ชื่อจาก user schema ถ้ามี ไม่งั้นเป็น ""
    lastName: user?.lastname || "",
    phoneNumber: user?.phone || "",
    email: user?.email || "",
  });

  // state สำหรับ address
  const [deliveryAddress, setDeliveryAddress] = useState(user?.address || "");

  // Time and Notes
  const [timeNote, setTimeNote] = useState({
    time: "In 15 minutes", // ค่า default เวลาคือ "อีก 15 นาที"
    note: "", // ค่า note เริ่มต้นว่าง
  });

  const deliveryFee = 40; // ค่าจัดส่ง fix 40 บาท
  // state เก็บยอดรวม (ไม่รวมค่าจัดส่ง)
  const [subtotal, setSubtotal] = useState(0);

  // Function ลบสินค้าออกจาก basket 
  const handleRemoveItem = (itemId) => {
    // filter เอาที่ id ไม่ตรง (ลบ item ที่มี id ตรงกับ itemId ออกจาก basket)
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId)); 
  };

  // Function เปลี่ยนค่า customer info
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target; // ดึง name และ value จาก input
    setCustomerInfo((prev) => ({ // Update state
      ...prev,
      [name]: value,
    }));
  };

  // useEffect
  useEffect(() => { // ทำงานเมื่อ profileChoice หรือ user เปลี่ยน
    if (profileChoice === "saved" && user) { // ถ้าเลือก saved
      setCustomerInfo({ // set ค่าเป็นข้อมูล user
        firstName: user.firstname || "",
        lastName: user.lastname || "",
        phoneNumber: user.phone || "",
        email: user.email || "",
      });
    } else { // ถ้าเลือก new
      setCustomerInfo({ // set ค่าเป็นว่าง
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      });
    }
  }, [profileChoice, user]); // dependencies

  useEffect(() => { // เมื่อ addressChoice หรือ user เปลี่ยน
    if (addressChoice === "saved" && user) { // ถ้าเลือก saved
      setDeliveryAddress(user.address || ""); // ใช้ address จาก user schema
    } else {
      setDeliveryAddress(""); // ถ้า เลือก new ให้ set ค่าเป็นว่าง
    }
  }, [addressChoice, user]);

  useEffect(() => { // คำนวณ subtotal ใหม่เมื่อ basket เปลี่ยน
    const calculatedSubtotal = basket.reduce( // รวมราคา (price * quantity)
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal); // update subtotal
  }, [basket]);

  // Function to confirm order ---
  const handleConfirm = async (event) => {
    event.preventDefault(); // ป้องกัน refresh form

    const finalTotal =
      orderMethod === "delivery" ? subtotal + deliveryFee : subtotal; // คำนวณ total

    try {
      // ส่งข้อมูลไป backend
      const response = await api.post("/orders", { // POST ไปยัง path /orders
        customerInfo,
        basketItems: basket,
        orderType: orderMethod,
        // ถ้าเลือก delivery ใช้ address ถ้าไม่ก็เป็น "N/A"
        address: orderMethod === "delivery" ? deliveryAddress : "N/A",
        subtotal, // ยอดรวมก่อนบวกค่าจัดส่ง
        deliveryFee: orderMethod === "delivery" ? deliveryFee : 0, // ค่าจัดส่ง = 0 ถ้าไม่ได้เลือก delivery)
        total: finalTotal,
        note: timeNote.note,
      });

      clearCart(); //Clear ตระกร้าหลังกด place order
      // ถ้า success → ส่งต่อไป order-confirmation
      navigate("/order-confirmation", {
        state: {
          order: response.data.order, // ส่ง order data ไปหน้า order-confirmation
        },
      });
    } catch (error) {
      console.error(
        "Create order failed:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to create order"); // ข้อความแจ้งเตือน error
    }
  };

  const finalTotal =
    // คำนวณ total อีกครั้งเพื่อใช้ใน render
    orderMethod === "delivery" ? subtotal + deliveryFee : subtotal;


  // --- JSX แสดงผล ---
  return (
    <div className="bg-[#0f0f10] pt-12 pb-12">
      <form
        onSubmit={handleConfirm} // เมื่อกด Place Order จะเรียก function handleConfirm
        className="border border-gray-200 max-w-4xl mx-auto bg-amber- rounded-2xl p-4 sm:p-6 space-y-6 bg-[#2B1B00]"
      >
        {/* Header Checkout */}
        <div className="bg-[#341f01] py-4 px-4 rounded-lg space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 text-center">
            🛒 Checkout
          </h1>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-300">
            🧾 Order Summary
          </h2>
          <div className="bg-[#341f01] p-4 rounded-lg space-y-2 text-gray-300">
            <ul className="space-y-1">
              {basket.map((item) => ( // วน loop แสดงสินค้าใน basket
                <li
                  key={item.id}
                  className="flex justify-between items-center text-sm sm:text-base"
                >
                  <div className="flex-grow">
                    {item.name} (x{item.quantity}) {/* แสดงชื่อและจำนวนของสินค้า */}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{item.price * item.quantity}฿</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)} // ลบสินค้า
                      className="text-gray-400 hover:text-black transition-colors p-1 rounded cursor-pointer"
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="border-t-1 border-black" />

            {orderMethod === "delivery" && ( // ถ้าเป็น delivery แสดงค่าจัดส่ง
              <div className="flex justify-between font-medium">
                <span>Delivery Fee</span>
                <span>{deliveryFee}฿</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-base sm:text-lg">
              <span>Subtotal</span>
              <span>{finalTotal}฿</span> {/* ราคารวมทั้งหมด */}
            </div>
          </div>
        </div>

        {/* Order Type */}
        <div>
          <h2 className="text-lg mt-4 sm:text-xl font-semibold mb-2 text-gray-300">
            📍 Order Type
          </h2>
          <div className="bg-[#341f01] text-gray-300 p-4 rounded-lg space-y-2">
            <div className="space-y-1">
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-stone-400 text-gray-300 hover:text-black">
                <input
                  type="radio"
                  name="method"
                  value="dinein"
                  checked={orderMethod === "dinein"}
                  onChange={(e) => setOrderMethod(e.target.value)} // เปลี่ยนค่า Order Type เป็น Dine in
                  className="accent-[#9C9284]"
                />
                Dine-in
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                <input
                  type="radio"
                  name="method"
                  value="pickup"
                  checked={orderMethod === "pickup"}
                  onChange={(e) => setOrderMethod(e.target.value)} // เปลี่ยนค่า Order Type เป็น pickup
                  className="accent-[#9C9284]"
                />
                Pick-up at store
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                <input
                  type="radio"
                  name="method"
                  value="delivery"
                  checked={orderMethod === "delivery"}
                  onChange={(e) => setOrderMethod(e.target.value)} // เปลี่ยนค่า Order Type เป็น Delivery
                  className="accent-[#9C9284]"
                />
                Delivery
              </label>
            </div>

            {orderMethod === "delivery" && ( // ถ้าเลือก delivery
              <div className="ml-6 space-y-0">
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                  <input
                    type="radio"
                    name="address-choice"
                    value="saved"
                    checked={addressChoice === "saved"}
                    onChange={(e) => setAddressChoice(e.target.value)} // ถ้าเลือก saved address
                    className="accent-[#9C9284]"
                  />
                  <span className="text-sm">Use saved address</span> {/* ใช้ที่อยู่ที่บันทึกไว้ */}
                </label>
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                  <input
                    type="radio"
                    name="address-choice"
                    value="new"
                    checked={addressChoice === "new"}
                    onChange={(e) => setAddressChoice(e.target.value)} // ถ้าเลือก create new address
                    className="accent-[#9C9284]"
                  />
                  <span className="text-sm">Create new address</span> {/* กรอกที่อยู่ใหม่ */}
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Customer Info */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-300">
            👤 Customer Information
          </h2>
          <div className="bg-[#341f01] text-gray-300 p-4 rounded-lg">
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                <input
                  type="radio"
                  name="profile-choice"
                  value="saved"
                  checked={profileChoice === "saved"}
                  onChange={(e) => setProfileChoice(e.target.value)}
                  className="accent-[#9C9284]"
                />
                Use saved details
              </label>
              <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                <input
                  type="radio"
                  name="profile-choice"
                  value="new"
                  checked={profileChoice === "new"}
                  onChange={(e) => setProfileChoice(e.target.value)}
                  className="accent-[#9C9284]"
                />
                Enter new details
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border rounded-lg border-black p-2 text-sm sm:text-base"
                value={customerInfo.firstName}
                onChange={handleCustomerInfoChange}
                // ถ้าเลือก saved details จะดึง data ของ user มา auto และไม่สามารถแก้ไข field นี้ได้
                readOnly={profileChoice === "saved"} 
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border rounded-lg border-black p-2 text-sm sm:text-base"
                value={customerInfo.lastName}
                onChange={handleCustomerInfoChange}
                readOnly={profileChoice === "saved"}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="border rounded-lg border-black p-2 text-sm sm:text-base"
                value={customerInfo.phoneNumber}
                onChange={handleCustomerInfoChange}
                readOnly={profileChoice === "saved"}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border rounded-lg border-black p-2 text-sm sm:text-base"
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
                readOnly={profileChoice === "saved"}
              />
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        {orderMethod === "delivery" && (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-300">
              🏠 Delivery Address
            </h2>
            <div className="bg-[#341f01] text-gray-300 p-4 rounded-lg">
              <textarea
                className="w-full border rounded-lg border-black p-2 text-sm sm:text-base"
                placeholder="Delivery Address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                // ถ้าเลือก saved address จะดึง data ของ user มา auto และไม่สามารถแก้ไข field นี้ได้
                readOnly={addressChoice === "saved"}
              />
            </div>
          </div>
        )}

        {/* Time & Note */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-300">
            🕒 Time & Note
          </h2>
          <div className="bg-[#341f01] text-gray-300 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="border rounded-lg border-black p-2 text-sm sm:text-base bg-[#341f01] text-gray-300 cursor-pointer"
                value={timeNote.time}
                onChange={(e) =>
                  setTimeNote({ ...timeNote, time: e.target.value }) // เปลี่ยนค่าเวลา
                }
              >
                <option>Now</option>
                <option>In 15 minutes</option>
                <option>In 1 hour</option>
                <option>Custom Time</option>
              </select>
              <input
                type="text"
                placeholder="Note Ex. Pick up at 3 PM."
                className="border rounded-lg border-black p-2 text-sm sm:text-base"
                value={timeNote.note}
                onChange={(e) =>
                  setTimeNote({ ...timeNote, note: e.target.value }) // เปลี่ยนค่า note
                }
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#C18343] text-black text-2xl font-bold w-full p-3 rounded-xl mt-6 hover:bg-[#3E2723] ease-in-out sm:hover:text-2xl hover:font-bold hover:text-gray-300 transition-all cursor-pointer"
        >
          Place Order {/* ปุ่มยืนยันการสั่งซื้อ */}
        </button>
      </form>
    </div>
  );
};
