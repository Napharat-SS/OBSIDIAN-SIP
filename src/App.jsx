import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Aboutus from "./views/Aboutus";
import { Checkout } from "./views/Checkout";
import { Contact } from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Notification from "./views/Notification";
import { OrderConfirmation } from "./views/OrderConfirmation";
import Privacy from "./views/Privacy";
import { RegisterForm } from "./views/Register";
import { ForgotPassword } from "./views/ForgotPassword";
import Profile from "./views/Profile";
import Addtocart from "./views/Addtocart";


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
      { path: "menu", element: <Menu /> },
      { path: "about", element: <Aboutus /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <RegisterForm />},
      { path: "forgotpassword", element: <ForgotPassword />},
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/notification", element: <Notification /> },
      { path: "profile/privacy", element: <Privacy /> },
      { path : "addtocart", element: <Addtocart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
