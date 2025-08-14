import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="font-['Poppins', 'sans-serif'] bg-[url('/profile_bg.jpg')] bg-cover">
      <div className="p-5 md:p-10">
        <div className="bg-[#eceae3] pt-5 pl-7 pb-5 border-b-[2px] border-[#e6e6e6] md:pl-20">
          <h1 className="w-[284px] top-[42px] left-24 text-black text-[33px] font-normal">
            Profile
          </h1>
          <div className="text-2xl flex gap-15 pt-5 pl-3">
            <Link
              to="/profile"
              className=" top-[120px] left-[106px] font-light text-[#6b705c] text-[17px] leading-normal"
            >
              Info
            </Link>
            <Link
              to="/profile/notification"
              className=" top-[120px] left-[106px] font-light text-[#6b705c] text-[17px] leading-normal"
            >
              Notification
            </Link>
            <Link
              to="/profile/privacy"
              className=" top-[120px] left-[106px] font-light text-[#6b705c] text-[17px] leading-normal"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] bg-[#F8F5EC]">
          <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6 border-r-[2px] border-[#e6e6e6]">
            <div className="text-2xl font-semibold text-gray-700 mb-6">
              Profile
            </div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-300">
              <img
                src="/profile_avatar.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl text-gray-800 mb-6">Obisidian Sipper</div>
            <button className="bg-yellow-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
              UPLOAD NEW AVATAR
            </button>
          </div>
          <div>
            <div className="text-lg text-gray-700 font-medium pl-5 pb-5 border-b-[1px] border-[#e6e6e6] md:pt-10">
              Privacy
            </div>
            <div className="flex flex-col gap-7 my-5">
              <a
                href=""
                target="_blank"
                className="text-sm text-center mx-5 sm:w-80 px-12 py-2 bg-stone-500 text-white font-semibold rounded-lg shadow-md hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
              >
                UPDATE PROFILE
              </a>
              <a
                href=""
                target="_blank"
                className="text-sm text-center mx-5 sm:w-80 px-12 py-2 bg-stone-500 text-white font-semibold rounded-lg shadow-md hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
              >
                RESET YOUR PASSWORD
              </a>
              <a
                href=""
                target="_blank"
                className="text-sm text-center mx-5 sm:w-80 px-12 py-2 bg-stone-500 text-white font-semibold rounded-lg shadow-md hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
              >
                CHANGE PAYMENT METHOD
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
