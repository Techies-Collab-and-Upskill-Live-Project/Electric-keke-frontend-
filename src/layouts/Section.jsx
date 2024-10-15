import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";

const Section = ({
  children,
  darkLogo,
  blurHeader,
  withDesktopHeader = true,
  mobileHeaderStyle,
}) => {
  return (
    <>
      <MobileHeader blur={blurHeader} mobileHeaderStyle={mobileHeaderStyle} />
      {withDesktopHeader && <Header darkLogo={darkLogo} blur={blurHeader} />}
      <section>{children}</section>
    </>
  );
};

export default Section;
