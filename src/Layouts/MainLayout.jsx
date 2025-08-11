import { Outlet } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* <footer/> */}
    </>
  );
};

export default Layout;
