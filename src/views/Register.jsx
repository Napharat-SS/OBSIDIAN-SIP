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
        <XCircleIcon className="w-5 h-5 text-red-700" />
      )}
      <span className={condition ? "text-green-600" : "text-red-700"}>
        {text}
      </span>
    </div>
  );

  const match = password && confirmPassword && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!match) {
      alert("Your passwords do not match");
      return;
    }
    alert("Successfully registered as a member!");
  };

  const navigate  = useNavigate();

  return (
    <div className="bg-neutral-950 min-h-screen flex items-center justify-center">
      <div className="bg-neutral-900 text-white p-8 mx-6 rounded-2xl shadow-xl border border-neutral-700 w-full max-w-md md:px-10 md:my-10 md:mx-5 md:max-w-xl">
        <h2 className="text-4xl font-bold mb-6 ">Register</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <div className="relative py-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Firstname
              </label> */}
              <input
                className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
                type="text"
                id="firstname"
                name="firstname"
                placeholder=" "
                required
              />
              <label
                htmlFor="firstname"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
              >
                Firstname
              </label>
            </div>
            <div className="relative py-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Lastname
              </label> */}
              <input
                className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" "
                required
              />
              <label
                htmlFor="lastname"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
              >
                Lastname
              </label>
            </div>
          </div>
          <div className="relative py-3">
            <input
              className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
            >
              Email
            </label>
          </div>

          {/* address
          <div className="mb-2">
            <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
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
          </div> */}

          <div className="relative py-2">
            {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
              Telephone
            </label> */}
            <input
              type="text"
              className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Phone"
              className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
              peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
              peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
            >
              Phone
            </label>
          </div>
          <div>
            <div className="relative py-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Username
              </label> */}
              <input
                type="text"
                className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
                placeholder=" "
                required
                id="username"
                name="username"
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
              >
                Enter your username
              </label>
            </div>
            <div className="relative py-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Password
              </label> */}
              <input
                type="password"
                className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
                placeholder=" "
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
              >
                Enter your password
              </label>
            </div>
            <div className="flex gap-4 py-2 mb-2">
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
            <div className=" relative py-2">
              {/* <label className="block text-[#3F3C38] mb-1 text-xl font-semibold">
                Confirm Password
              </label> */}
              <input
                type="password"
                className="w-full bg-transparent border-b border-neutral-600 focus:border-white outline-none py-2 peer"
                placeholder=" "
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 
                peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#c58c4ce6]
                peer-valid:top-0 peer-valid:text-xs peer-valid:text-[#c58c4ce6]"
              >
                Confirm your password
              </label>

              {confirmPassword && (
                <p
                  className={`mt-1 text-sm ${
                    match ? "text-green-600" : "text-red-700"
                  }`}
                >
                  {match
                    ? "Passwords match✔️"
                    : "Your passwords do not match❌"}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-8 gap-4">
            <button
              type="button"
              className="w-1/2 px-6 py-3 rounded-xl border border-[#c58c4ce6] text-[#c58c4ce6] font-medium shadow-lg hover:text-white hover:bg-gray-600 transition"
              onClick={() => navigate("/login")}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 px-6 py-3 rounded-xl bg-[#c58c4ce6] text-black font-medium shadow-lg hover:bg-[#ddb07ee6] transition"
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
        <p className="mt-4 text-center text-[#c4bdb5] text-lg">
          Already registered?{" "}
          <Link to="/login" className="text-white font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
