import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";

export const RegisterForm =() => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const rules = {
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasLength: password.length >= 8,
  };

  const RuleItem = ({ condition, text }) => (
    <div className="flex items-center gap-2 text-sm">
      {condition ? (
        <CheckCircleIcon className="w-5 h-5 text-green-500" />
      ) : (
        <XCircleIcon className="w-5 h-5 text-red-500" />
      )}
      <span className={condition ? "text-green-600" : "text-red-600"}>
        {text}
      </span>
    </div>
  );

  const match = password && confirmPassword && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!match) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    alert("สมัครสมาชิกสำเร็จ!");
  };

  const navigate  = useNavigate();

  return (
    <div className="bg-[url('/bg-register.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-[#F8F6F2] p-8 mx-6 rounded-xl shadow-lg w-full max-w-xl md:px-10 md:my-10 md:mx-5 md:max-w-xl">
        <h2 className="text-4xl font-bold mb-6 text-[#3F3C38]">Register</h2>
        <Form onSubmit={handleSubmit} className="gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <div>
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Firstname
              </label> */}
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                required
              />
            </div>
            <div>
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Lastname
              </label> */}
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
              Email
            </label> */}
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-2">
            {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
              Address
            </label> */}
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="District"
            />
            <input
              type="text"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="City"
            />
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="Zip Code"
            />
          </div>
          <div className="mb-2">
            {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
              Telephone
            </label> */}
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <div className="mb-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Username
              </label> */}
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                placeholder="Enter your username"
                required
                id="username"
                name="username"
              />
            </div>
            <div>
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Password
              </label> */}
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-4 py-2">
              <div>
                <RuleItem
                  condition={rules.hasUpper}
                  text="At least one uppercase letter (A-Z)"
                />
                <RuleItem
                  condition={rules.hasLower}
                  text="At least one uppercase letter (a-z)"
                />
              </div>
              <div>
                <RuleItem
                  condition={rules.hasNumber}
                  text="At least one uppercase letter (0-9)"
                />
                <RuleItem
                  condition={rules.hasLength}
                  text="Minimum length of 8 characters"
                />
              </div>
            </div>
            <div className="mb-4">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Confirm Password
              </label> */}
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                placeholder="Confirm your password"
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPassword && (
                <p
                  className={`mt-1 text-sm ${
                    match ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {match ? "รหัสผ่านตรงกัน✔️" : "รหัสผ่านไม่ตรงกัน❌"}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center gap-10">
            <button
              type="button"
              className="w-3/5 bg-[#A69C8E] text-white text-2xl fontbold py-2 rounded hover:bg-[#716a60] transition-colors"
              onClick={() => navigate("/login")}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full bg-[#D4A475] text-white text-2xl fontbold py-2 rounded hover:bg-yellow-600 transition-colors"
              disabled={
                !(
                  rules.hasUpper &&
                  rules.hasLower &&
                  rules.hasNumber &&
                  rules.hasLength
                )
              }
            >
              Register
            </button>
          </div>
        </Form>
        <p className="mt-4 text-center text-[#3F3C38] text-lg">
          Already registered?{" "}
          <Link to="/login" className="text-[#A69C8E] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
