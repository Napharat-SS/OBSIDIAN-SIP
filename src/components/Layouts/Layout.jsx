import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center gap-4 px-8 py-4 text-xl font-bold">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="">
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <div className="">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
