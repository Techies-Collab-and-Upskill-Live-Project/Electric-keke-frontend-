import { Overlay } from "@/components";
import React from "react";

const AdminSettings = () => {
  const settings = [
    "Ride management",
    "Vehicle tracking",
    "Payment settings",
    "Rides and users analytics",
    "Discount and promotion management",
  ];

  return (
    <section className="relative border overview isolate">
      <Overlay
        className="absolute inset-0 pointer-events-none flex-center -z-10 opacity-20"
        logoStyle="w-[700px] h-[300px]"
        logoImageStyle="size-full scale-[2]"
        logo
      />

      <h2 className="mb-12 font-bold text-[40px] font-josefin">Settings</h2>
    </section>
  );
};

export default AdminSettings;
