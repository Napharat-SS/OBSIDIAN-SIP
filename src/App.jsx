import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Register from "./views/Register";
import Home from "./views/Home";
import Menu from "./views/Menu";
import RegisterForm from "./views/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu/> },
      { path: "register", element: <RegisterForm /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
