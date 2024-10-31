import React from "react";

const IconWrapper = ({
  containerStyle,
  iconElement: IconElement,
  iconElementProps,
  imageUrl,
  scale,
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
        <img src={imageUrl} alt="icon" className={`image ${scale}`} />
      </div>
    );
  };

  return imageUrl ? ImageIcon() : SvgIcon();
};

export default IconWrapper;
