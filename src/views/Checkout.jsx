import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

// สร้าง Component ชื่อ Checkout เป็น function
export const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // ✅ รับ basket จากหน้า Addtocart ผ่าน navigate state
  const initialBasket = location.state?.basket || [];

  // --- State หลัก ---
  const [basket, setBasket] = useState(initialBasket);
  const [orderMethod, setOrderMethod] = useState("dinein"); // dinein, pickup, delivery
  const [profileChoice, setProfileChoice] = useState("saved"); // customer info choice
  const [addressChoice, setAddressChoice] = useState("saved"); // delivery address choice

  // ✅ state เดียวเก็บ customer info
  const [customerInfo, setCustomerInfo] = useState({
    firstName: user?.firstname || "",
    lastName: user?.lastname || "",
    phoneNumber: user?.phone || "",
    email: user?.email || "",
  });

  // ✅ state สำหรับ address
  const [deliveryAddress, setDeliveryAddress] = useState(user?.address || "");

  // เวลาและ note
  const [timeNote, setTimeNote] = useState({
    time: "In 15 minutes",
    note: "",
  });

  const deliveryFee = 40;
  const [subtotal, setSubtotal] = useState(0);

  // --- ฟังก์ชัน ---
  const handleRemoveItem = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- useEffect ---
  useEffect(() => {
    if (profileChoice === "saved" && user) {
      setCustomerInfo({
        firstName: user.firstname || "",
        lastName: user.lastname || "",
        phoneNumber: user.phone || "",
        email: user.email || "",
      });
    } else {
      setCustomerInfo({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      });
    }
  }, [profileChoice, user]);

  useEffect(() => {
    if (addressChoice === "saved" && user) {
      setDeliveryAddress(user.address || "");
    } else {
      setDeliveryAddress("");
    }
  }, [addressChoice, user]);

  useEffect(() => {
    const calculatedSubtotal = basket.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
  }, [basket]);

  // --- Confirm Order ---
  const handleConfirm = async (event) => {
    event.preventDefault();

    const finalTotal =
      orderMethod === "delivery" ? subtotal + deliveryFee : subtotal;

    try {
      // ✅ ส่งข้อมูลไป backend
      const response = await api.post("/orders", {
        customerInfo,
        basketItems: basket,
        orderType: orderMethod,
        address: orderMethod === "delivery" ? deliveryAddress : "N/A",
        subtotal,
        deliveryFee: orderMethod === "delivery" ? deliveryFee : 0,
        total: finalTotal,
        note: timeNote.note,
      });

      // ถ้า success → ส่งต่อไป order-confirmation
      navigate("/order-confirmation", {
        state: {
          order: response.data.order, // ✅ ได้ข้อมูล order จาก backend
        },
      });
    } catch (error) {
      console.error(
        "Create order failed:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to create order");
    }
  };

  const finalTotal =
    orderMethod === "delivery" ? subtotal + deliveryFee : subtotal;

  // --- JSX ---
  return (
    <div className="bg-[#0f0f10] pt-12 pb-12">
      <form
        onSubmit={handleConfirm}
        className="border border-gray-200 max-w-4xl mx-auto bg-amber- rounded-2xl p-4 sm:p-6 space-y-6 bg-[#2B1B00]"
      >
        {/* Header */}
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
              {basket.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center text-sm sm:text-base"
                >
                  <div className="flex-grow">
                    {item.name} (x{item.quantity})
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{item.price * item.quantity}฿</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-black transition-colors p-1 rounded"
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="border-t-1 border-black" />

            {orderMethod === "delivery" && (
              <div className="flex justify-between font-medium">
                <span>Delivery Fee</span>
                <span>{deliveryFee}฿</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-base sm:text-lg">
              <span>Subtotal</span>
              <span>{finalTotal}฿</span>
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
                  onChange={(e) => setOrderMethod(e.target.value)}
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
                  onChange={(e) => setOrderMethod(e.target.value)}
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
                  onChange={(e) => setOrderMethod(e.target.value)}
                  className="accent-[#9C9284]"
                />
                Delivery
              </label>
            </div>

            {orderMethod === "delivery" && (
              <div className="ml-6 space-y-0">
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
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
                <label className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-stone-400 hover:text-black">
                  <input
                    type="radio"
                    name="address-choice"
                    value="new"
                    checked={addressChoice === "new"}
                    onChange={(e) => setAddressChoice(e.target.value)}
                    className="accent-[#9C9284]"
                  />
                  <span className="text-sm">Create new address</span>
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
                className="border rounded-lg border-black p-2 text-sm sm:text-base bg-[#341f01] text-gray-300"
                value={timeNote.time}
                onChange={(e) =>
                  setTimeNote({ ...timeNote, time: e.target.value })
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
                  setTimeNote({ ...timeNote, note: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#C18343] text-black text-2xl font-bold w-full p-3 rounded-xl mt-6 hover:bg-[#3E2723] ease-in-out sm:hover:text-2xl hover:font-bold hover:text-gray-300 transition-all"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
