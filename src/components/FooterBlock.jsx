import React from "react";
import RegularList from "./_design-patterns/RegularList";

const FooterBlock = ({
  containerStyle = "sub-link-nav",
  label = "label",
  labelStyle = "footer-link-title",
  listContainerStyle = "mt-6 space-y-4",
  listItems = [],
  footerRenderComponent: FooterRenderComponent,
}) => {
  return (
    <div className={containerStyle}>
      <h3 className={labelStyle}>{label}</h3>
      <ul className={listContainerStyle}>
        <RegularList list={listItems} component={FooterRenderComponent} />
      </ul>
    </div>
  );
};

export default FooterBlock;
