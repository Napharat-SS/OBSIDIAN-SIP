import { Link } from "react-router-dom";

export default function Profile() {
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
              className=" top-[120px] left-[106px] font-medium text-[#C78E2C]  text-[17px] leading-normal"
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
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] bg-[#2B1B17] ">
          <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6 ">
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
            <div className="text-xl text-[#E8D9C6] mb-6">Obisidian Sipper </div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-[#a8751d] transition duration-300 ease-in-out">
              CHANGE AVATAR
            </button>
          </div>
          <div className="border-l-[2px] border-[#403B36]">
            <div className="text-lg text-[#fdcf8e] font-medium pl-5 pb-5 border-b-[1px] border-[#403B36] md:pt-10">
              BASIC INFO
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 mb-6">
              <div>
                <label
                  for="first_name"
                  className="block  text-[#fdcf8e] text-sm font-medium mt-5 mb-2 uppercase"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={"Obsidian"}
                  readOnly
                  className="w-full  px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block text-[#fdcf8e] text-sm font-medium mt-5 mb-2 uppercase"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={"Sipper"}
                  readOnly
                  className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={"asdf@gmail.com"}
                  readOnly
                  className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="mx-5 mb-6">
              <label
                for="tel"
                className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
              >
                Tel.
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={"123456789"}
                readOnly
                className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
              />
            </div>
            <div className="mx-5 mb-6">
              <label
                for="address"
                className="block text-[#fdcf8e] text-sm font-medium mb-2 uppercase"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                readOnly
                className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none resize-y"
              >
                99/999 Debaratna Rd, Bang Na Nuea, Bang Na, Bangkok 10260
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
