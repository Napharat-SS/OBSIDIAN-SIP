import React, { useState } from 'react'
import { Form } from 'react-router-dom';
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";

export default function RegisterForm() {

  const [password, setPassword] = useState("");

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

  return (
    <div
      className="bg-[url('/bg-register.jpg')] bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <div className="bg-[#F8F6F2] p-4 rounded-xl shadow-lg w-full max-w-lg md:p-6">
        <h2 className="text-4xl font-bold mb-6 text-[#3F3C38]">Register</h2>
        <Form className="gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <div>
              <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
                Firstname
              </label>
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
              <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
                Lastname
              </label>
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
            <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              type="email"
              id="email"
              name="email"
              placeholder="xxxx@email.com"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="Sub-district"
            />
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="District/ City"
            />
          </div>
          <div className="">
            <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
              Telephone
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
              placeholder="0XX-XXX-XXXX"
            />
          </div>
          <div className="flex flex-col mb-2">
            <div>
              <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                placeholder="Enter your username"
                id="username"
                name="username"
              />
            </div>
            <div className="">
              <label className="block text-[#3F3C38] mb-1 text-2xl font-semibold">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value )}
                required
              />
            </div>
            <div>
              <RuleItem condition={rules.hasUpper} text="At least one uppercase letter (A-Z)" />
              <RuleItem condition={rules.hasLower} text="At least one uppercase letter (a-z)" />
              <RuleItem condition={rules.hasNumber} text="At least one uppercase letter (0-9)" />
              <RuleItem condition={rules.hasLength} text="Minimum length of 8 characters" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4A475] text-white text-2xl fontbold py-2 rounded hover:bg-yellow-600 transition-colors"
            disabled= {
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
        </Form>
        <p className="mt-4 text-center text-[#3F3C38] text-xl font-small">
          Already registered?{" "}
          <a href="#" className="text-[#A69C8E] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
