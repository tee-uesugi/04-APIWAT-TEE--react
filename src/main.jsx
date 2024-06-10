import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import Owner from "./components/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/Owner",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);