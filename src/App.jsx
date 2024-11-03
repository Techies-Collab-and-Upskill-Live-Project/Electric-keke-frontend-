import { Route, Routes, useLocation } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Support from "./pages/Support";
import ProtectedRoute from "./layouts/Private";
import InternalServer from "./pages/InternalServer";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
// import Balls from "./components/_custom-loaders/balls/Balls";
import General from "./components/_general/General";
import { useEffect } from "react";

function App() {
  return (
    <>
      <div className="relative mx-auto overflow-hidden App max-w-screen-2xl">
        <General />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/onboarding/*" element={<Onboarding />} />
          <Route path="/*" element={<ProtectedRoute />} />
          <Route path="/ie/:id" element={<InternalServer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
