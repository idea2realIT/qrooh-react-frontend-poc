import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import DashBoard from "./components/Dashboard/Layout";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsPage from "./components/Dashboard/SubPages/AnalyticsPage";
import Contact from "./components/Dashboard/SubPages/ContactsPage";
import ReportPage from "./components/Dashboard/SubPages/ReportPage";
import SettingsPage from "./components/Dashboard/SubPages/SettingsPage";
function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="reports" element={<ReportPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
