import { footer_note } from "@/constants";
import { motion } from "framer-motion";
// import { HashLink as Link } from "react-router-hash-link";
import { LogoPlain } from "@/assets/svg/Logo";
import RegularList from "./_design-patterns/RegularList";
import { footer_blocks } from "@/features/landing/constants";
import FooterBlock from "./FooterBlock";
import FooterBlockListItem from "./FooterBlockListItem";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="footer-main"
        >
          <div className="footer-brief-container">
            <LogoPlain styling="w-[72px] h-[39px]" logoClass="scale-[1.5]" />
            <p className="footer-brief">{footer_note}</p>
          </div>

          <RegularList
            list={footer_blocks}
            keyExtractor={footer_blocks.map((item) => item.label)}
            component={({ label, links, listContainerStyle }) => (
              <FooterBlock
                label={label}
                listItems={links}
                footerRenderComponent={FooterBlockListItem}
                listContainerStyle={listContainerStyle}
              />
            )}
          />
        </motion.div>
        <motion.p
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="footer__copywright-text"
        >
          All rights reserved. Copyright © 2024 | Eco-Ride
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
