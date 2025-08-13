import bgImage from '../assets/background.png';

const Login = () => {
  return (
  <div className="relative">
    <div className=" absolute inser-0 h-screen w-full bg-left bg-[length:1800px_1800px] flex item-center justify-center " style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="absolute inset-0 bg-white/50" ></div>
  <div className="relative bg-white rounded-2xl p-8 w-96 h-96 shadow-md mt-20">
        <h1 className="font-bold text-3xl text-center mb-6">Login</h1>

        <div>
          <input
            className="bg-[#fff9a0] text-sm rounded-xl py-3 px-4 mt-2 w-full"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div>
          <input
            className="bg-[#fff9a0] text-sm rounded-xl py-3 px-4 mt-4 w-full"
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
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          className="bg-[#bb895c] text-white text-sm w-full p-3 rounded-xl mt-6 hover:bg-amber-900 transition duration-700 ease-in-out"
          type="submit"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <a href="#" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  </div>
   
  );
};

export default Login;
