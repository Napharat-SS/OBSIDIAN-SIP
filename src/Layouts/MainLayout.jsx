import Navbar from "../components/landingpage/Navbar";
import { Checkout } from "../views/Checkout";
import { OrderConfirmation } from "../views/OrderConfirmation";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Checkout />
        <OrderConfirmation />
      </main>
    </>
  );
};

export default Layout;
