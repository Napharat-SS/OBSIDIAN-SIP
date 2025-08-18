import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "../components/landingpage/Footer";
import Navbar from "../components/landingpage/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster richColors position="top-right" />
      <main></main>
    </>
  );
};

export default MainLayout;
