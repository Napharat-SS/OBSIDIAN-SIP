import React from 'react'

const ForgotPassword = () => {
  return (
    <div class="bg-[url('/bg-register.jpg')] bg-opacity-50 bg-cover bg-center flex items-center justify-center min-h-screen">
      <div class="bg-[#F8F6F2] p-8 rounded-xl shadow-lg w-full text-[#3F3C38] md:w-2/7 px-10 py-15">
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
            <label for="email" class="block text-2xl font-semibold mb-1">
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
              className="w-3/5 bg-[#A69C8E] text-white text-xl fontbold py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              class="w-full bg-[#D4A475] text-white text-xl py-2 rounded hover:bg-yellow-600 transition font-semibold"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword