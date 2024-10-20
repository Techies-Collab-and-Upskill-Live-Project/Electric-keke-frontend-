import React from "react";

const Notify = ({ subject, message }) => {
  return (
    <div className="border-b py-[14px] mt-3" key={subject}>
      <p className="text-eiteen text-[#0A0B0A] font-semibold">{subject}</p>
      <p className="text-neutral-500 text-eiteen mt-6">{message}</p>
    </div>
  );
};

export default Notify;
