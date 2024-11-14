import { Section } from "@/layouts";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Btn from "@/components/btn/Btn";
import { AnimatePresence } from "framer-motion";
import { RiderIndex, RiderInfo } from "@/features/booking";
import { XIcon } from "lucide-react";
import { useState } from "react";

const Riders = () => {
  const { pathname } = useLocation();
  const [riderTitle, setRiderTitle] = useState("Available Riders");
  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="rider-container">
        <div className="relative">
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

          <AnimatePresence mode="wait">
            <Routes>
              <Route
                index
                element={<RiderIndex setRiderTitle={setRiderTitle} />}
              />
              <Route path="/:id" element={<RiderInfo />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Riders;
