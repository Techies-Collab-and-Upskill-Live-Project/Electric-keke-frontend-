import { Section } from "@/layouts";
import useTitle from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import {
  Connected,
  Contribution,
  Hero,
  PageBriefing,
  Testimonial,
} from "@/features/landing";

const Earn = () => {
  useTitle("Earn");

  return (
    <Section
      blurHeader={true}
      mobileHeaderStyle="mobile-header mobile-header-abs"
    >
      <Hero type="earn" />
      <PageBriefing type="earn" />
      <Contribution />
      <Testimonial type="earn" />
      <Connected type="earn" />
      <Footer />
    </Section>
  );
};

export default Earn;
