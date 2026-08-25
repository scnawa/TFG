import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Security from "./pages/SecurityPage/SecurityPage";
import PestControl from "./pages/PestControlPage/PestControlPage";
import BatteryBull from "./pages/BatteryBullPage/BatteryBullPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path ="/about" element={<AboutPage/>} />
        <Route path="/security" element={<Security />} />
        <Route path="/pest-control" element={<PestControl />} />
        <Route path="/battery-bull" element={<BatteryBull />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
