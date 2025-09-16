import { FaTrash } from "react-icons/fa6";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/emptycart.json";
import { useCart } from "../context/CardContext";

const Addtocart = () => {
  const { cartItems, addToCart, decreaseQty, removeFromCart } =
    useCart();

  const navigate = useNavigate();

  const handlePlusQty = (item) => {
    addToCart({ ...item, quantity: 1 }); // ใช้ addToCart เพิ่มจำนวน
  };

  const handleMinusQty = (item) => {
    decreaseQty(item.id); // ✅ ลดทีละ 1
  };

  const handleRemove = (id) => {
    removeFromCart(id); // ลบทั้ง item ออก
  };

  // สร้าง function สำหรับการนำทางไปยังหน้า Checkout
  const handleCheckout = () => {
    // ใช้ navigate เพื่อเปลี่ยนเส้นทางไปยังหน้า /checkout
    navigate("/checkout", { state: { basket: cartItems } });
  };

  return (
    <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex justify-center items-center text-white">
      <div className="bg-[#0a0a0a] rounded-3xl p-10 border-1 m-5 ">
        <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
          <div className="mr-5 mb-3 flex-1">
            <button
              className="font-bold flex pb-3 cursor-pointer"
              onClick={() => navigate("/menu")}
            >
              <IoChevronBackCircleOutline className="w-6 h-6" />
              &nbsp;&nbsp;Continue Shopping
            </button>
            <hr className="border-[#92908d] pt-5" />
            <p className="">shopping cart</p>
            <p className="pb-5">You have {cartItems.length} items in your basket</p>

            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex bg-[#615d58] rounded-2xl p-5 mb-5  "
                  initial={{ opacity: 0, x: 50 }} // in
                  animate={{ opacity: 1, x: 0 }} // normal
                  exit={{ opacity: 0, x: -100 }} // out
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center gap-5 ">
                    <img src={item.img} className="w-20 h-20 rounded-2xl" />
                    <h3 className="w-[200px]">{item.name}</h3>
                    <div className=" flex justify-between gap-4">
                      <button
                        className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6"
                        onClick={() => handleMinusQty(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6"
                        onClick={() => handlePlusQty(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="w-30">THB {item.price * item.quantity}</p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-[#C18343] hover:text-amber-900 transition-colors duration-200"
                      aria-label="ลบสินค้า"
                    >
                      <FaTrash size={25} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {cartItems.length === 0 ? (
            <div>
              <Lottie
                className="p-8 w-120 h-120"
                animationData={animationData}
              />
            </div>
          ) : (
            <div className="bg-[#615d58] rounded-3xl  p-5  mr-3 flex-1 mb-5 mt-4 ">
              <p className="text-center font-bold pt-5 pb-4">Summary</p>
              <hr className="border-[#0a0a0a] py-3" />
              <div className="flex justify-between ">
                <p>Subtotal</p>
                <p>
                  THB{" "}
                  {cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="pb-4 ">Total (Tax incl.)</p>
                <p>
                  THB{" "}
                  {cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
