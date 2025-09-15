import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "../components/landingpage/Footer";
import Navbar from "../components/landingpage/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
};

export default MainLayout;
