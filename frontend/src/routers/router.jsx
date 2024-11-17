import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>ABOUT</div>,
      },
      {
        path: "/orders",
        element: <div>ORDERS</div>,
      },
    ],
  },
]);

export default router;
