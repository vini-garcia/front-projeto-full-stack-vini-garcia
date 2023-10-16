import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { Register } from "../pages/Register";
import ErrorPage from "../pages/NotFound";
import { Profile } from "../pages/Profile";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/announcements/user/:id" element={<Profile />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  );
};
