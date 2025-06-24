import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountdownPage from "../pages/CountdownPage";
// import Home from "../pages/Home";
// import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountdownPage />} />

        {/* <Route path="/home" element={<Home />} />

        <Route path="/detail/:slug" element={<DetailPage />} /> */}

        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
