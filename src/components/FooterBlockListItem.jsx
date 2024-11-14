import React from "react";
import IconWrapper from "./IconWrapper";
import { HashLink as Link } from "react-router-hash-link";
const FooterBlockListItem = ({
  title,
  icon,
  href,
  styling = "footer-link",
}) => {
  console.log(href)
  return (
    <li className={styling}>
      <Link smooth to={href} className="size-full">
        {title ? (
          title
        ) : (
          <IconWrapper iconElement={icon} containerStyle="social-link" />
        )}
      </Link>
    </li>
  );
};

export default FooterBlockListItem;
