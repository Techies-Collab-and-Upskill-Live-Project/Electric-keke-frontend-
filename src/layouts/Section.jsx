import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";

const Section = ({
  children,
  darkLogo,
  blurHeader,
  withDesktopHeader = true,
  mobileHeaderStyle,
  homeHref = "/",
}) => {
  return (
    <>
      <MobileHeader
        blur={blurHeader}
        mobileHeaderStyle={mobileHeaderStyle}
        homeHref={homeHref}
      />
      
      {withDesktopHeader && (
        <Header darkLogo={darkLogo} blur={blurHeader} homeHref={homeHref} />
      )}
      <section>{children}</section>
    </>
  );
};

export default Section;
