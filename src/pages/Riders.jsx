import { Section } from "@/layouts";
import { Outlet, useLocation } from "react-router-dom";
import Btn from "@/components/btn/Btn";
import { AnimatePresence } from "framer-motion";

const Riders = () => {
  const { pathname } = useLocation();
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

          <AnimatePresence mode="wait">
            <Outlet key={pathname} />
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Riders;
