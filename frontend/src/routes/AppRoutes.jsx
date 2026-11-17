
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/Mainlayout";

import Dashboard from "../pages/dashboard/Dashboard";
import People from "../pages/people/People";
import Attendance from "../pages/attendance/Attendance";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route 
            path="/dashboard" 
            element={<Dashboard />} />
        <Route 
            path="/people" 
            element={<People />} />
        <Route 
            path="/attendance" 
            element={<Attendance />} />
        <Route 
            path="/reports" 
            element={<Reports />} />
        <Route 
            path="/settings" 
            element={<Settings />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;


