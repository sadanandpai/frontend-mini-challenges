import "./index.css";

import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./App.tsx";
import Challenge from "./components/challenge/Challenge.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createHashRouter([
  {
    path: "/:level/:name",
    element: <Challenge />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
