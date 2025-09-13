import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Notification() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen flex items-center justify-center">
        <div className="bg-neutral-900 p-8 rounded-xl shadow-lg w-full text-[#3F3C38] md:w-3/7 px-10 py-15">
          <h4 className="text-3xl font-bold text-white text-center mb-4">
            Please login first
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen">
      <div className="p-5 md:p-10">
        <div className="bg-[#3E2723] pt-5 pl-7 pb-5 border-b-[2px] border-[#403B36] md:pl-20">
          <h1 className="w-[284px] top-[42px] left-24 text-[33px] text-[#C78E2C] font-semibold">
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
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4">
              <img
                src="/profile_avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl text-[#E8D9C6] mb-6">Obisidian Sipper</div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
              CHANGE AVATAR
            </button>
          </div>
          <div className="border-l-[2px] border-[#403B36]">
            <div className="text-xl text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
              Notifications
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="bg-[#fdedb1] p-4 rounded-xl shadow-md text-[#3B2F2F] text-center w-full max-w-xl border-1 border-gray-300">
                Your order is expected to arrive within 30 minutes.
              </div>
              <div className="bg-[#fdedb1] p-4 rounded-xl shadow-md text-[#3B2F2F] text-center w-full max-w-xl border-1 border-gray-300">
                Your order #12345 has been successfully processed and is now
                awaiting.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
