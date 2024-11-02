import React from "react";
import IconWrapper from "./IconWrapper";

const FooterBlockListItem = ({ title, icon, styling = "footer-link" }) => {
  return (
    <li className={styling}>
      {title ? (
        title
      ) : (
        <IconWrapper iconElement={icon} containerStyle="social-link" />
      )}
    </li>
  );
};

export default FooterBlockListItem;
