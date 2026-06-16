import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import Compare from "../Pages/Compare/Compare";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import SavedColleges from "../Pages/Dashboard/SavedColleges";
import Dashboard from "../Pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/college/:id" element={<CollegeDetails/>} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/saved-colleges" element={<SavedColleges/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default AppRoutes;