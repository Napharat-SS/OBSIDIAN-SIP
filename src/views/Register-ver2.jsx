import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";

export default function LandingAuth() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("login");

  return (
    <div className="relative">
      {/* ปุ่มเปิด */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-3xl bg-[#c58c4ce6] text-white font-medium shadow-lg hover:bg-[#ddb07ee6] transition"
      >
        Get Started
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-30 left-35 right-10 md:left-3/5 md:right-20 bg-neutral-950 text-white rounded-3xl z-50 shadow-3xl border border-white/50"
            >
              {/* Tabs */}
              <div className="flex justify-center mt-4">
                <div className="flex space-x-4 bg-neutral-800 rounded-xl p-1">
                  <button
                    onClick={() => setTab("login")}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${
                      tab === "login"
                        ? "bg-[#c58c4ce6] text-black"
                        : "text-gray-400 hover:text-white hover:bg-gray-600"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setTab("register")}
                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${
                      tab === "register"
                        ? "bg-[#c58c4ce6] text-black"
                        : "text-gray-400 hover:text-white hover:bg-gray-600"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-center md:max-w-xl gap-8 p-8 max-w-4xl mx-auto ">
                {/* LOGIN */}
                {tab === "login" && (
                  <div className="space-y-4 w-full">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Login
                    </h2>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <Mail className="w-4 h-4 text-yellow-400" /> Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <Lock className="w-4 h-4 text-yellow-400" /> Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <button className="w-full px-6 py-3 rounded-xl bg-[#c58c4ce6] text-black font-medium shadow-lg hover:bg-[#ddb07ee6] transition">
                      Login
                    </button>
                  </div>
                )}

                {/* REGISTER */}
                {tab === "register" && (
                  <div className="space-y-4 w-full">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Register
                    </h2>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <User className="w-4 h-4 text-yellow-400" /> Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <Mail className="w-4 h-4 text-yellow-400" /> Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <Lock className="w-4 h-4 text-yellow-400" /> Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-1 text-white">
                        <Lock className="w-4 h-4 text-yellow-400" /> Confirm
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
                      />
                    </div>
                    <button className="w-full px-6 py-3 rounded-xl bg-[#c58c4ce6] text-black font-medium shadow-lg hover:bg-[#ddb07ee6] transition">
                      Register
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
