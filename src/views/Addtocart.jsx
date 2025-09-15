// import { FaTrash } from "react-icons/fa6";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
// import { AnimatePresence, motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from "../assets/emptycart.json";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CardContext";

// const Addtocart = () => {
//   const { cartItems, setCartItems } = useCart();

//   // ✅ ฟังก์ชันเพิ่มจำนวนสินค้า
//   const handlePlusQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: (item.quantity || 1) + 1 }
//           : item
//       )
//     );
//   };

//   // ✅ ฟังก์ชันลดจำนวนสินค้า
//   const handleMinusQty = (id) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // ✅ ฟังก์ชันลบสินค้าออกจากตะกร้า
//   const handleRemove = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   // ✅ ฟังก์ชันคำนวณ subtotal
//   const calculateSubtotal = () => {
//     return cartItems.reduce(
//       (sum, item) =>
//         sum + Number(item.price || 0) * Number(item.quantity || 1),
//       0
//     );
//   };

//   return (
//     <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex justify-center items-center text-white">
//       <div className="bg-[#0a0a0a] rounded-3xl p-10 border-1 m-5 ">
//         <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
//           {/* 🛒 กล่องสินค้าฝั่งซ้าย */}
//           <div className="mr-5 mb-3 flex-1">
//             <Link to="/menu" className="font-bold flex pb-3">
//               <IoChevronBackCircleOutline className="w-6 h-6" />
//               &nbsp;&nbsp;Continue Shopping
//             </Link>
//             <hr className="border-[#92908d] pt-5" />
//             <p>shopping cart</p>
//             <p className="pb-5">
//               You have {cartItems.length} items in your basket
//             </p>

//             <AnimatePresence>
//               {cartItems.map((item) => {
//                 const qty = item.quantity || 1;
//                 const price = Number(item.price) || 0;
//                 return (
//                   <motion.div
//                     key={item.id}
//                     className="flex bg-[#615d58] rounded-2xl p-5 mb-5"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="flex justify-between items-center gap-5 w-full">
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="w-20 h-20 rounded-2xl"
//                       />
//                       <h3 className="w-40">{item.name}</h3>

//                       {/* ➖ ปุ่ม - เลข quantity + ➕ */}
//                       <div className="flex justify-between items-center gap-3">
//                         <button
//                           className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-7 h-7 rounded"
//                           onClick={() => handleMinusQty(item.id)}
//                         >
//                           -
//                         </button>
//                         <span className="text-lg font-semibold">{qty}</span>
//                         <button
//                           className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-7 h-7 rounded"
//                           onClick={() => handlePlusQty(item.id)}
//                         >
//                           +
//                         </button>
//                       </div>

//                       <p className="w-30 font-semibold">THB {price * qty}</p>

//                       <button
//                         onClick={() => handleRemove(item.id)}
//                         className="text-[#C18343] hover:text-amber-900 transition-colors duration-200"
//                         aria-label="ลบสินค้า"
//                       >
//                         <FaTrash size={25} />
//                       </button>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>

//           {/* 📦 กล่องสรุปฝั่งขวา */}
//           {cartItems.length === 0 ? (
//             <div>
//               <Lottie
//                 className="p-8 w-120 h-120"
//                 animationData={animationData}
//               />
//             </div>
//           ) : (
//             <div className="bg-[#615d58] rounded-3xl p-5 mr-3 flex-1 mb-5 mt-4">
//               <p className="text-center font-bold pt-5 pb-4">Summary</p>
//               <hr className="border-[#0a0a0a] py-3" />
//               <div className="flex justify-between">
//                 <p>Subtotal</p>
//                 <p>THB {calculateSubtotal()}</p>
//               </div>
//               <div className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out mt-4">
//                 <Link to="/checkout">Checkout</Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addtocart;










import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { AnimatePresence, motion} from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/emptycart.json";
import { useCart } from "../context/CardContext";






const Addtocart = () => {
  const { cartItems, addToCart } = useCart();
  const [cart, setCart] = useState([]);

   // สร้าง state ใหม่ที่มี quantity
  // const [cart, setCart] = useState(
  //   cartItems.map(item => ({ ...item, quantity: item.quantity || 1 }))
  // );

  // sync cartItems → cart ทุกครั้งที่ cartItems เปลี่ยน
  useEffect(() => {
    setCart(cartItems.map(item => ({ ...item, quantity: item.quantity || 1 })));
  }, [cartItems]);



  const handlePlusQty = (id) => {
     setCart(prev=>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const handleMinusQty = (id) => {
    setCart( prev =>
      prev
        .map((item) =>
          item.id === id
           ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

   const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };



return (
  <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex justify-center items-center text-white">
        <div className="bg-[#0a0a0a] rounded-3xl p-10 border-1 m-5 ">
            <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
              
              <div className="mr-5 mb-3 flex-1">
              
                <div className="font-bold flex pb-3">
                  <IoChevronBackCircleOutline className="w-6 h-6"/>
                  &nbsp;&nbsp;Continue Shopping
                  </div>
                <hr className="border-[#92908d] pt-5" />
                <p className="">shopping cart</p>
                <p className="pb-5">You have {cart.length} items in your basket</p>

                
              
                <AnimatePresence>
                  {cart.map((item)=> (
                    
                    <motion.div key={item.id} className="flex bg-[#615d58] rounded-2xl p-5 mb-5  "
                    initial={{ opacity: 0, x: 50 }}      // in
                    animate={{ opacity: 1, x: 0 }}       // normal
                    exit={{ opacity: 0, x: -100 }}       // out
                    transition={{ duration: 0.3 }}
                    >

                  <div className="flex justify-between items-center gap-5 ">
                    <img src={item.img} className="w-20 h-20 rounded-2xl" />
                    <h3 className="w-50">{item.name}</h3>
                    <div className=" flex justify-between gap-4">
                      <button className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6" onClick={() => handleMinusQty(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="bg-[#c58c4ce6] text-black hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out w-6 h-6" onClick={() => handlePlusQty(item.id)} >+</button>
                    </div>
                    <p className="w-30">THB {item.price * item.quantity}</p>
                    <button onClick={() => handleRemove(item.id)} className="text-[#C18343] hover:text-amber-900 transition-colors duration-200"
                    aria-label="ลบสินค้า">
                    <FaTrash size={25} /></button>

                </div>
              </motion.div>
))}
                 </AnimatePresence>
             


                

                  
                 </div>
                 {cart.length === 0 ? (<div><Lottie className="p-8 w-120 h-120" animationData={animationData}/></div>) : (
                  <div className="bg-[#615d58] rounded-3xl  p-5  mr-3 flex-1 mb-5 mt-4 ">
              
                <p className="text-center font-bold pt-5 pb-4">Summary</p>
                <hr className="border-[#0a0a0a] py-3" />
                <div className="flex justify-between ">
                  <p>Subtotal</p>
                  <p>THB {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
                </div>
                <div className="flex justify-between gap-10">
                  <p className="pb-4 ">Total (Tax incl.)</p>
                  <p>THB {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
                </div>
                <div className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white transition text-center duration-700 ease-in-out">
                  <button type="submit">Checkout</button>
                </div>
               
              </div>
                 )}


              

            </div>
          </div>
          </div>
  );
};

export default Addtocart;
