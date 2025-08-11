import { Outlet } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";

const MainLayout = () => {
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

export default MainLayout;
