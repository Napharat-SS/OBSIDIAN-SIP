import { Outlet } from "react-router-dom";
import Navbar from "../components/landingpage/Navbar";
import ForgotPassword from "../views/ForgotPassword";
import { Toaster } from "sonner";
import { Checkout } from "../views/Checkout";
import { OrderConfirmation } from "../views/OrderConfirmation";

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
