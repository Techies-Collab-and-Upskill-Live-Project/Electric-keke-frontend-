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
import Section from "@/layouts/Section";

const Home = () => {
  useTitle("Home");

  return (
    <Section blurHeader={true}>
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
