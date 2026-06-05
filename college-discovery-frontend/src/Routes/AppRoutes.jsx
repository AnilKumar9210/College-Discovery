import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import Compare from "../pages/Compare/Compare";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/college/:id" element={<CollegeDetails />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;