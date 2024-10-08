import React from "react";
import Heading from "../shared/Heading";
import TeamBoard from "./TeamBoard";

const Meet = () => {
  return (
    <section id="meet">
      <div className="w-full">
        <Heading title="Meet The Team" type="about" tclass="text-center" />
        <TeamBoard />
      </div>
    </section>
  );
};

export default Meet;
