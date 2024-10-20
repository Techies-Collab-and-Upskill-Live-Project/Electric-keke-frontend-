import React from "react";

const CustomBadge = ({
  styling,
  badgeMainStyle,
  badgeText,
  badgeTextStyle,
  badgeLabel,

}) => {
  return (
    <div className={styling}>
      <div className={badgeMainStyle}>
        <p className={badgeTextStyle}>{badgeText}</p>
      </div>

      {badgeLabel && (
        <div className="process__tag">
          <p className="process__text">{badgeLabel}</p>
        </div>
      )}
    </div>
  );
};

export default CustomBadge;
