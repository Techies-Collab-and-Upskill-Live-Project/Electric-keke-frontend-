import { Section } from "@/layouts";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Btn from "@/components/btn/Btn";
import { AnimatePresence } from "framer-motion";
import { RiderIndex, RiderInfo } from "@/features/booking";
import { XIcon } from "lucide-react";
import { useState } from "react";

const Riders = () => {
  const location = useLocation();
  const [riderTitle, setRiderTitle] = useState("Available Riders");
  const [showRiderTitle, setShowRiderTitle] = useState(true);

  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="rider-container">
        <div className="relative">
          {showRiderTitle && (
            <div className="rider-sub-header">
              <h2 className="font-bold text-2xl md:text-[28px] lg:text-[2rem]">
                {riderTitle}
              </h2>

              <Btn
                href="/riders"
                styling="rounded-full bg-transparent p-0"
                icon={<XIcon color="black" />}
                onClick={() => setRiderTitle("Available Riders")}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                index
                element={<RiderIndex setRiderTitle={setRiderTitle} />}
              />

              <Route
                path="/:id"
                element={<RiderInfo setShowRiderTitle={setShowRiderTitle} />}
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Riders;
