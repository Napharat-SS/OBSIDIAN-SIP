import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import { useAuth } from "../context/AuthContext";
import api from "../services/api.js";

export default function Profile_update() {
  const { user, setUser, setLoading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: user?.username || "",
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put("/user/update", form);
      console.log("Update successfully");
      navigate("/profile");
      setUser(form);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (user === null) {
    navigate("/login");
  }

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen">
      <div className="p-5 md:p-10">
        <div className="bg-[#3E2723] pt-5 pl-7 pb-5 border-b-[2px] border-[#403B36] md:pl-20">
          <h1 className="w-[284px] top-[42px] left-24 text-[#C78E2C] text-[33px] font-semibold">
            Profile
          </h1>
          <div className="text-2xl flex gap-15 pt-5 pl-3">
            <Link
              to="/profile"
              className=" top-[120px] left-[106px] font-medium text-[#C78E2C] text-[17px] leading-normal"
            >
              Info
            </Link>
            <Link
              to="/profile/notification"
              className=" top-[120px] left-[106px] font-medium text-[#C78E2C] text-[17px] leading-normal"
            >
              Notification
            </Link>
            <Link
              to="/profile/privacy"
              className=" top-[120px] left-[106px] font-medium text-[#C78E2C] text-[17px] leading-normal"
            >
              Privacy
            </Link>
            <Link
              to="/profile/my-orders"
              className=" top-[120px] left-[106px] font-medium text-[#C78E2C]  text-[17px] leading-normal"
            >
              Orders
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] bg-[#2B1B17]">
          <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6">
            <div className="text-2xl font-semibold text-[#fdcf8e] mb-6">
              Profile
            </div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-300">
              <img
                src="/profile_avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl text-[#E8D9C6] mb-6">{user.username}</div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
              CHANGE AVATAR
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-l-[2px] border-[#403B36] text-[#fdcf8e] pb-5"
          >
            <div className="text-lg text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
              CHANGE YOUR INFO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 mb-6">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-[#fdcf8e] text-sm font-medium mt-5 mb-2 uppercase"
                >
                  First Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="firstname"
                  name="firstname"
                  value={form.firstname}
                  className="w-full px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-200 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-[#fdcf8e] text-sm font-medium mt-5 mb-2 uppercase"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="lastname"
                  name="lastname"
                  value={form.lastname}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-200 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  id="email"
                  name="email"
                  value={form.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-200 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mx-5 mb-6">
              <label
                htmlFor="phone"
                className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
              >
                Tel.
              </label>
              <input
                type="tel"
                onChange={handleChange}
                id="phone"
                name="phone"
                value={form.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-200 focus:border-transparent"
              />
            </div>
            <div className="mx-5 mb-6">
              <label
                htmlFor="address"
                className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                onChange={handleChange}
                value={form.address}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-200 focus:border-transparent resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block text-sm text-center mx-auto sm:w-50 px-12 py-2 bg-[#784601] text-white font-semibold rounded-lg shadow-md hover:bg-[#aa6401] focus:outline-none focus:ring-2 focus:ring-yellow-200 transition duration-300 ease-in-out;"
            >
              Submit Change
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
