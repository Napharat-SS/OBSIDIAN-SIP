import React from "react";
import { Link } from "react-router-dom";

export default function Profile_delete() {
  const handleClick = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      console.log("Deleting profile...");
      // delete logic here
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen flex items-center justify-center">
      <div className="bg-neutral-900 p-8 rounded-xl shadow-lg w-full text-[#3F3C38] md:w-3/7 px-10 py-15">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          DELETE PROFILE!!!
        </h2>
        <p className="text-center text-white mb-6 text-lg">
          Please be inform that this process cannot be reversed.
          <br />
          Please confirm your email address and password again.
        </p>
        <form>
          <div className="mb-4">
            <label
              for="email"
              className="block text-white text-lg font-semibold mb-1"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="XXXX@gmail.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
            />
            <label
              for="password"
              className="block text-white text-lg font-semibold mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="******"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
            />
          </div>
          <div className="flex justify-center gap-10">
            <Link
              to="/profile"
              className="w-3/5 bg-[#A69C8E] text-white text-center text-lg font-bold py-2 rounded hover:bg-[#716a60] transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-full bg-[#D4A475] text-white text-lg py-2 rounded hover:bg-yellow-600 transition font-semibold"
              onClick={handleClick}
            >
              DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
