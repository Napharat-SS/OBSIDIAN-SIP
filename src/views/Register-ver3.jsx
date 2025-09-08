// import { Link } from "react-router-dom";
// import animationData from "../assets/HotCoffeeanimation.json";
// import Lottie from "lottie-react";
// import { IoMdContact } from "react-icons/io";





// const LogReg = () => {
//   return (
//     <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex max-sm:flex-col md:flex-row items-center justify-center ">

//         <div className="rounded-tl-3xl rounded-bl-3xl max-sm:rounded-bl-full max-sm:rounded-tl-full max-sm:rounded-br-full  bg-black w-120 h-120 shadow-md max-sm:w-50 max-sm:h-50">
//           <Lottie className="p-8" />
//         </div>

//         <div className="bg-black rounded-tr-full">
//         <div className=" bg-[#615d58] pb-7 p-15 w-120 h-120 rounded-tr-full rounded-tl-full rounded-br-full">
//           <div className="">
//              <div className="flex justify-center content-center">
//               <IoMdContact className="w-20 h-20" />
//              </div>

//             <input
//               className="bg-white text-sm rounded-xl py-3 px-4 mt-2 w-full"
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Username"
//               required
//             />
//           </div>

//           <div>
//             <input
//               className="bg-white text-sm rounded-xl py-3 px-4 mt-4 w-full"
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password*"
//               required
//             />
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <label className="flex items-center text-sm">
//               <input
//                 className="form-checkbox mr-2"
//                 type="checkbox"
//                 name="remember"
//               />
//               Remember me
//             </label>
//             <Link
//               to="/forgotpassword"
//               className="text-sm text-blue-500 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white w-full p-3 mt-6 transition duration-700 ease-in-out"
//             type="submit"
//           >
//             Login
//           </button>

//           <p className="text-sm text-center mt-4">
//             Don't have an account?
//             <Link to="/register" className="text-blue-400 hover:underline">
//               &nbsp;Register
//             </Link>
//           </p>
// </div>
//      </div>
//     </div>
//   );
// };

// export default LogReg;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Lock, User } from "lucide-react";

// export default function LogReg() {
//   const [active, setActive] = useState("login");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#2b1a12] to-[#1a120b] p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
//         {/* LOGIN */}
//         <motion.div
//           onClick={() => setActive("login")}
//           animate={{
//             scale: active === "login" ? 1.05 : 1,
//             opacity: active === "login" ? 1 : 0.6,
//             boxShadow:
//               active === "login"
//                 ? "0 0 20px rgba(255,255,255,0.4)"
//                 : "0 0 5px rgba(0,0,0,0.3)",
//           }}
//           className={`cursor-pointer rounded-2xl border border-white/40 p-8 transition relative
//             ${active === "login" ? "bg-neutral-900" : "bg-neutral-800"}
//           `}
//         >
//           <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
//             Login
//           </h2>
//           <div className="space-y-4">
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <Mail className="w-4 h-4 text-yellow-400" /> Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <Lock className="w-4 h-4 text-yellow-400" /> Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <button className="w-full px-6 py-3 rounded-3xl bg-[#c58c4ce6] text-white font-medium shadow-lg hover:bg-[#ddb07ee6] transition">
//               Login
//             </button>
//           </div>
//         </motion.div>

//         {/* REGISTER */}
//         <motion.div
//           onClick={() => setActive("register")}
//           animate={{
//             scale: active === "register" ? 1.05 : 1,
//             opacity: active === "register" ? 1 : 0.6,
//             boxShadow:
//               active === "register"
//                 ? "0 0 20px rgba(255,255,255,0.4)"
//                 : "0 0 5px rgba(0,0,0,0.3)",
//           }}
//           className={`cursor-pointer rounded-2xl border border-white/40 p-8 transition relative
//             ${active === "register" ? "bg-neutral-900" : "bg-neutral-800"}
//           `}
//         >
//           <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
//             Register
//           </h2>
//           <div className="space-y-4">
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <User className="w-4 h-4 text-yellow-400" /> Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <Mail className="w-4 h-4 text-yellow-400" /> Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <Lock className="w-4 h-4 text-yellow-400" /> Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <div>
//               <label className="flex items-center gap-2 text-sm mb-1 text-white">
//                 <Lock className="w-4 h-4 text-yellow-400" /> Confirm Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
//               />
//             </div>
//             <button className="w-full px-6 py-3 rounded-3xl bg-[#c58c4ce6] text-white font-medium shadow-lg hover:bg-[#ddb07ee6] transition">
//               Register
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
