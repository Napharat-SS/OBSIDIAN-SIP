import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CardContext";
import MainLayout from "./Layouts/MainLayout";
import AboutUs from "./views/AboutUs";
import Addtocart from "./views/Addtocart";
import { Checkout } from "./views/Checkout";
import { ForgotPassword } from "./views/ForgotPassword";
import Home from "./views/Home";
import Login from "./views/Login";
import Menu from "./views/Menu";
import MyOrders from "./views/MyOrders";
import Notification from "./views/Notification";
import { OrderConfirmation } from "./views/OrderConfirmation";
import Privacy from "./views/Privacy";
import ProductDetail from "./views/ProductDetail";
import Profile from "./views/Profile";
import Profile_delete from "./views/Profile_delete";
import Profile_update from "./views/Profile_update";
import { SignupPage } from "./views/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "menu",
        children: [
          { index: true, element: <Menu /> },
          { path: ":id", element: <ProductDetail /> },
        ],
      },
      { path: "aboutus", element: <AboutUs /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <SignupPage /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/notification", element: <Notification /> },
      { path: "profile/privacy", element: <Privacy /> },
      { path: "profile/privacy/update", element: <Profile_update /> },
      { path: "profile/privacy/delete", element: <Profile_delete /> },
      { path: "profile/my-orders", element: <MyOrders /> },
      { path: "addtocart", element: <Addtocart /> },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
