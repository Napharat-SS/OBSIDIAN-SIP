import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AboutUs from "./views/AboutUs";
import Addtocart from "./views/Addtocart";
import { Checkout } from "./views/Checkout";
import { ForgotPassword } from "./views/ForgotPassword";
import Home from "./views/Home";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Notification from "./views/Notification";
import { OrderConfirmation } from "./views/OrderConfirmation";
import Privacy from "./views/Privacy";
import ProductDetail from "./views/ProductDetail";
import Profile from "./views/Profile";
import Profile_delete from "./views/Profile_delete";
import Profile_update from "./views/Profile_update";
import { RegisterForm } from "./views/Register";
import MyOrders from "./views/MyOrders";


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
      { path: "register", element: <RegisterForm /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/notification", element: <Notification /> },
      { path: "profile/privacy", element: <Privacy /> },
      { path: "profile/privacy/update", element: <Profile_update /> },
      { path: "profile/privacy/delete", element: <Profile_delete /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "addtocart", element: <Addtocart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
