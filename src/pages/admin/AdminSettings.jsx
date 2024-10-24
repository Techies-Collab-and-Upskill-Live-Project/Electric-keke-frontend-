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
    <section className="bg-center bg-no-repeat bg-cover h-full">
      <h2 className="text-4xl font-bold mb-12">Settings</h2>
      <ul>
        {settings.map((item, index) => (
          <li key={index} className="mb-6 text-2xl">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdminSettings;
