import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import DashBoard from "./components/Dashboard/Layout";
import SignIn from "./components/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);
function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
