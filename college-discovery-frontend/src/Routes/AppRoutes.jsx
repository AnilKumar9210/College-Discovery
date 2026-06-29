import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import Compare from "../Pages/Compare/Compare";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import SavedColleges from "../Pages/Dashboard/SavedColleges";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Recommendations from "../Pages/Recommendations/Recommendations";
import AIChat from "../Pages/AIChat/AIChat";
import AICompare from "../Pages/AICompare/AICompare";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ManageColleges from "../Pages/Admin/ManageColleges";
import AddCollege from "../Pages/Admin/AddCollege";
import EditCollege from "../Pages/Admin/EditCollege";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/college/:id" element={<CollegeDetails />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/saved-colleges" element={<SavedColleges />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/recommendations" element={<Recommendations/>} />
      <Route path="/ai-compare" element={<AICompare/>} />

      <Route path="/ai-chat" element={<AIChat/>} />
      <Route path='/admin' element={<AdminDashboard/>} />
      <Route path="/admin/colleges" element={<ManageColleges/>} />
      <Route path="/admin/add-college" element={<AddCollege/>} />
      <Route path="/admin/edit-college" element={<EditCollege/>} />
    </Routes>
  );
};

export default AppRoutes;
