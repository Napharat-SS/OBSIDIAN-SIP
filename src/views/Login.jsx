import { Link, useNavigate } from "react-router-dom";
import animationData from "../assets/HotCoffeeanimation.json";
import Lottie from "lottie-react";
import { IoMdContact } from "react-icons/io";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";



const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {

      const data = await loginUser(username, password, remember);
      setUser(data.user); // Save user to AuthContext
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-gradient-to-t from-black via-[#504f4f] to-[#070707] min-h-screen flex max-sm:flex-col md:flex-row items-center justify-center ">
      <div className="rounded-tl-3xl rounded-bl-3xl max-sm:rounded-bl-full max-sm:rounded-tl-full max-sm:rounded-br-full  bg-black w-120 h-120 shadow-md max-sm:w-50 max-sm:h-50">
        <Lottie className="p-8" animationData={animationData} />
      </div>

      <div className="bg-black rounded-tr-full">
        <div className=" bg-[#615d58] pb-7 p-15 w-120 h-120 rounded-tr-full rounded-tl-full rounded-br-full">
          <div className="flex justify-center content-center">
            <IoMdContact className="w-20 h-20" />
          </div>

          {error && (
            <div className=" text-black border-[#c58c4ce6] rounded-xl px-4 py-2 mb-4 text-center ">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div>
              <input
                className="bg-white text-sm rounded-xl py-3 px-4 mt-2 w-full"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Username"
                required
              />
            </div>

            <div>
              <input
                className="bg-white text-sm rounded-xl py-3 px-4 mt-4 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
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
              type="submit"
              disabled={loading}
              className="bg-[#c58c4ce6] text-black py-2 rounded-xl hover:bg-[#5c3202e6] hover:text-white w-full p-3 mt-6 transition duration-700 ease-in-out"
            >
              {loading ? "Logging in ..." : "Login"}
            </button>
          </form>

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
