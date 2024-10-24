import Footer from "@/components/Footer";
import {
  Hero,
  Meet,
  PageBriefing,
  Services,
  StandOut,
} from "@/features/landing";
import { Section } from "@/layouts";

const About = () => {
  return (
    <Section
      blurHeader={true}
      mobileHeaderStyle="mobile-header mobile-header-abs"
    >
      <Hero type="about" />
      <PageBriefing type="about" />
      <StandOut />
      <Services type="about" />
      <Meet />
      <Footer />
    </Section>
  );
};

export default About;
