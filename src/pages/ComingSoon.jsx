import IconWrapper from "@/components/IconWrapper";
import React from "react";
import Lottie from "lottie-react";
import coming_soon from "@/assets/animations-data/waiting.json";

const ComingSoon = () => {
  return (
    <section className="h-screen flex-center">
      <div>
        <IconWrapper
          iconElement={Lottie}
          iconElementProps={{ animationData: coming_soon }}
        />

        <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-basic to-peach bg-clip-text">Coming Soon</h1>
      </div>
    </section>
  );
};

export default ComingSoon;
