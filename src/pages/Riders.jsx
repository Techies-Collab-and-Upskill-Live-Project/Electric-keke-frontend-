import { Section } from "@/layouts";
import { Outlet } from "react-router-dom";
import Btn from "@/components/btn/Btn";
import { AnimatePresence } from "framer-motion";

const Riders = () => {
  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="rider-container">
        <div className="relative">
          <div className="rider-sub-header">
            <h2 className="font-bold text-2xl md:text-[28px] lg:text-[2rem]">
              Available Riders
            </h2>
            <Btn styling="bg-transparent rounded-full" />
          </div>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Riders;
