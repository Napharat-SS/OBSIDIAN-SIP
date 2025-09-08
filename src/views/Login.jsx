import { Link } from "react-router-dom";
import animationData from "../assets/HotCoffeeanimation.json";
import Lottie from "lottie-react";
import { IoMdContact } from "react-icons/io";





const Login = () => {
  return (
    <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex max-sm:flex-col md:flex-row items-center justify-center ">

        <div className="rounded-tl-3xl rounded-bl-3xl max-sm:rounded-bl-full max-sm:rounded-tl-full max-sm:rounded-br-full  bg-black w-120 h-120 shadow-md max-sm:w-50 max-sm:h-50">
          <Lottie className="p-8" animationData={animationData}/>
        </div>

        <div className="bg-black rounded-tr-full">
        <div className=" bg-[#615d58] pb-7 p-15 w-120 h-120 rounded-tr-full rounded-tl-full rounded-br-full">
          <div className="">
             <div className="flex justify-center content-center">
              <IoMdContact className="w-20 h-20" />
             </div>

            <input
              className="bg-white text-sm rounded-xl py-3 px-4 mt-2 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Username"
              required
            />
          </div>

          <div>
            <input
              className="bg-white text-sm rounded-xl py-3 px-4 mt-4 w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              required
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white w-full p-3 mt-6 transition duration-700 ease-in-out"
            type="submit"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?
            <Link to="/register" className="text-blue-400 hover:underline">
              &nbsp;Register
            </Link>
          </p>
</div>
     </div>
    </div>
  );
};

export default Login;
