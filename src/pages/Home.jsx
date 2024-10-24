import Footer from "@/components/Footer";
import {
  Connected,
  Hero,
  Mission,
  PageBriefing,
  Services,
  Testimonial,
} from "@/features/landing";
import useTitle from "@/hooks/useTitle";
import { Section } from "@/layouts";
const Home = () => {
  useTitle("Home");

  return (
    <Section
      blurHeader={true}
      mobileHeaderStyle="mobile-header mobile-header-abs"
    >
      <Hero />
      <PageBriefing />
      <Services />
      <Mission />
      <Testimonial />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Home;
