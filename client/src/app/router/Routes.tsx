import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import App from "../layout/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
