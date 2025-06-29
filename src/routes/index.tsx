import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountdownPage from "../pages/CountdownPage";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import LaunchDemo from "../pages/LaunchDemo";
import NotFound from "../pages/NotFound";
import Analytics from "../components/Analytics";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/demo" element={<LaunchDemo />} />
        <Route path="/wisata/:slug" element={<DetailPage />} />
        <Route path="/peninggalan/:slug" element={<DetailPage />} />
        <Route path="/umkm/:slug" element={<DetailPage />} />
        <Route path="/sejarah/:slug" element={<DetailPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
