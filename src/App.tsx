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
import MetricsPage from "./components/Dashboard/SubPages/SettingsPage/SettingsSubPages/MetricsPage";
import DataSourcePage from "./components/Dashboard/SubPages/SettingsPage/SettingsSubPages/DataSourcePage";
import AddOnsPage from "./components/Dashboard/SubPages/SettingsPage/SettingsSubPages/AddOnsPage";
import AccountsPage from "./components/Dashboard/SubPages/SettingsPage/SettingsSubPages/AccountsPage";
//importing context
import ProfileProvider from "components/Providers/ProfileProvider";
function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <ProfileProvider>
                <DashBoard />
              </ProfileProvider>
            }
          >
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="reports" element={<ReportPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="settings/metrics" element={<MetricsPage />} />
            <Route path="settings/add-ons" element={<AddOnsPage />} />
            <Route path="settings/data-source" element={<DataSourcePage />} />
            <Route path="settings/accounts" element={<AccountsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
