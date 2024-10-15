import Footer from "@/components/Footer";
import { ContactSupport, Faq, Hero } from "@/features/landing";
import useTitle from "@/hooks/useTitle";
import Section from "@/layouts/Section";
import { useSelector } from "react-redux";

const Support = () => {
  useTitle("Support");
  // redux globals
  const { support } = useSelector((state) => state.global);

  return (
    <Section
      blurHeader={true}
      mobileHeaderStyle="mobile-header mobile-header-abs"
    >
      <Hero type="support" />

      <div className="support-intersect">
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>

      <Footer />
    </Section>
  );
};

export default Support;
