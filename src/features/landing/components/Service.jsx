import { Heading } from "@/components";
import IconWrapper from "@/components/IconWrapper";
import React from "react";

const Service = ({ title, desc, icon }) => {
  return (
    <div key={title} className="service-card">
      <div className="service-card__content">
        <IconWrapper iconElement={icon} containerStyle="service__icon p-3" />

        <Heading
          className="mt-[21px] tablet:mt-[22px] laptop:mt-8"
          dclass="service-card__desc"
          description={desc}
          tclass="service-card__title"
          title={title}
        />
      </div>
    </div>
  );
};

export default Service;
