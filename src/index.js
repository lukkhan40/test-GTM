import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root";
import { ErrorPage } from "./routes/error";
import { Event } from "./routes/event";
import { Purchase } from "./routes/purchase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/event/purchase",
    element: <Purchase />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
