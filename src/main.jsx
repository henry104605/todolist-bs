import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ToDoPage from "./pages/ToDoPage";
import ImpressumPage from "./pages/ImpressumPage";
import NewToDoPage from "./pages/NewToDoPage";
import EditToDoPage from "./pages/EditToDoPage";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<ToDoPage />} />
      <Route path="new" element={<NewToDoPage />} />
      <Route path="edit" element={<EditToDoPage />} />
      <Route path="impressum" element={<ImpressumPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
