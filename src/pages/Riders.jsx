import Section from "../layouts/Section";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Btn from "@/components/btn/Btn";

const Riders = () => {
  const [ridersTitle, setRidersTitle] = useState("Available Riders");

  const switchRiderTitle = (title) => {
    setRidersTitle(title);
  };

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

          <Outlet context={{ ridersTitle, switchRiderTitle }} />
        </div>
      </div>
    </Section>
  );
};

export default Riders;
