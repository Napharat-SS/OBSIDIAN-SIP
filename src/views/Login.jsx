import { Link } from "react-router-dom";
import bgImage from "../assets/background.png";


const Login = () => {
  return (
    <div className="relative">
    <div className=" bg-left bg-[length:1800px_1800px] w-full min-h-screen flex justify-center items-center font-kanit"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-orange-300/50"></div>

          <div className="relative bg-white rounded-2xl p-8 w-100 h-100 shadow-md">
            <h1 className="text-3xl text-center mb-6">Login</h1>

            <div>
            <input
              className="bg-[#f6d794] text-sm rounded-xl py-3 px-4 mt-2 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Username"
              required
            />
          </div>

          <div>
            <input
              className="bg-[#f6d794] text-sm rounded-xl py-3 px-4 mt-4 w-full"
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
            <Link to="/forgotpassword" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            className="bg-[#C18343] text-white w-full p-3 rounded-xl mt-6 hover:bg-amber-900 transition duration-700 ease-in-out"
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
