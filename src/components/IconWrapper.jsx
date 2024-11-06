import React from "react";

const IconWrapper = ({
  containerStyle,
  iconElement: IconElement,
  iconElementProps,
  imageUrl,
  imageClassname,
}) => {
  const SvgIcon = () => {
    return (
      <div className={containerStyle}>
        <IconElement {...iconElementProps} />
      </div>
    );
  };

  const ImageIcon = () => {
    return (
      <div className={containerStyle}>
        <img src={imageUrl} alt="icon" className={`${imageClassname}`} />
      </div>
    );
  };

  return imageUrl ? ImageIcon() : SvgIcon();
};

export default IconWrapper;
