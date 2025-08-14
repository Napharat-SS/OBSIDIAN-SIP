import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Aboutus from "./views/Aboutus";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Profile from "./views/Profile";
import Notification from "./views/Notification";
import Privacy from "./views/Privacy";

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
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/notification", element: <Notification /> },
      { path: "profile/privacy", element: <Privacy /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
