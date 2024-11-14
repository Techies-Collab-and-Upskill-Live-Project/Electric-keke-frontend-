import React from "react";

const IconWrapper = ({
  containerStyle,
  iconElement: IconElement,
  iconElementProps,
  imageUrl,
  imageClassname,
  ...props
}) => {
  const SvgIcon = () => {
    return (
      <div className={containerStyle} {...props}>
        <IconElement {...iconElementProps} />
      </div>
    );
  };

  const ImageIcon = () => {
    return (
      <div className={containerStyle} {...props}>
        <img src={imageUrl} alt="icon" className={`${imageClassname}`} />
      </div>
    );
  };

  return imageUrl ? ImageIcon() : SvgIcon();
};

export default IconWrapper;
