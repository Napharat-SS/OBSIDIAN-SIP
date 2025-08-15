import { Outlet } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";
import { Toaster } from "sonner";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* <footer/> */}
      <Toaster richColors position="top-right" />
      <main>

      </main>
    </>
  );
};

export default MainLayout;
