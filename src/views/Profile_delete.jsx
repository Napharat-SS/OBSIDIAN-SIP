import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Profile_delete() {
  const { user, logout } = useAuth();
  const [deleteEmail, setDeleteEmail] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    try {
      if (confirmDelete && deleteEmail === user.email) {
        await api.delete("/user/delete");
        console.log("Deleting profile...");
        logout();
        navigate("/");
      }
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  const handleChange = (e) => {
    setDeleteEmail(e.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen flex items-center justify-center">
      <div className="bg-neutral-900 p-8 rounded-xl shadow-lg w-full text-[#3F3C38] md:w-3/7 px-10 py-15">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          DELETE PROFILE
        </h2>
        <p className="text-center text-white mb-6 text-lg">
          Please be inform that this process cannot be reversed.
          <br />
          Please confirm your email address again.
        </p>
        <form onSubmit={handleDelete}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-lg font-semibold mb-1"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="youraddress@mail.com"
              onChange={handleChange}
              value={deleteEmail}
              required
              className="w-full text-gray-300 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
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
            >
              DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
