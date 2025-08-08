import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

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
      { path: "menu", element: <Menu /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
