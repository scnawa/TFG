import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Security from "./pages/SecurityPage/SecurityPage";
import PestControl from "./pages/PestControlPage/PestControlPage";
import BatteryBull from "./pages/BatteryBullPage/BatteryBullPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/pest-control" element={<PestControl />} />
        <Route path="/battery-bull" element={<BatteryBull />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
