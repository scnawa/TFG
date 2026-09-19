import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Security from "./pages/SecurityPage/SecurityPage";
import PestControl from "./pages/PestControlPage/PestControlPage";
import BatteryBull from "./pages/BatteryBullPage/BatteryBullPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CleaningPage from "./pages/CleaningPage/CleaningPage";
import Shopfitting from "./pages/ShopfittingPage/ShopfittingPage";
import FacilityManagement from "./pages/FacilityManagementPage/FacilityManagementPage";
import Warehouse from "./pages/WarehousePage/WarehousePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path ="/about" element={<AboutPage/>} />
        <Route path="/shopfitting-construction" element={<Shopfitting />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/cleaning-page" element={<CleaningPage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/pest-control" element={<PestControl />} />
        <Route path="/warehouse-services" element={<Warehouse />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/battery-bull" element={<BatteryBull />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
