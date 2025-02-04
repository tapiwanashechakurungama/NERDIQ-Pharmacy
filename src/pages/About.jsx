import { AboutBanner } from "../components/AboutBanner";
import { ContactUsSection } from "../components/Contactform";
import { FAQSection } from "../components/FrequentlyAskedquestions";
import { OurMission } from "../components/Mission";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <OurMission/>
      <FAQSection/>
      <ContactUsSection/>
    </div>
  );
};

export default About;
