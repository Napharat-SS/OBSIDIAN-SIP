import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ForgotPassword = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user === null) {
    navigate("/login");
  }

  return (
    <div class="bg-neutral-950 bg-opacity-50 bg-cover bg-center flex items-center justify-center min-h-screen">
      <div class="bg-neutral-900 p-8 rounded-xl shadow-lg w-full text-white md:w-2/7 px-10 py-15">
        <h2 class="text-4xl font-bold text-center mb-4">Reset Your Password</h2>
        <p class="text-center mb-6 text-xl">
          Forgot your password?
          <br />
          No worries, then let's submit password reset.
          <br />
          It will be send to your email.
        </p>
        <form>
          <div class="mb-4">
            <label
              for="email"
              class="block text-2xl font-semibold mb-1 placeholder:text-gray-400 pb-2"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="XXXX@gmail.com"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="button"
              className="w-1/2 px-6 py-3 rounded-xl border border-[#c58c4ce6] text-[#c58c4ce6] font-medium shadow-lg hover:text-white hover:bg-gray-600 transition"
              onClick={() => navigate("/menu")}
            >
              Back
            </button>
            <button
              type="submit"
              class="w-1/2 px-6 py-3 rounded-xl bg-[#c58c4ce6] text-black font-medium shadow-lg hover:bg-[#ddb07ee6] transition"
              onClick={() => navigate("/menu")}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
