import {BannerSliders} from "../components/BannerSliders"
import { ContactUsSection } from "../components/Contactform"
import { FeaturedProducts } from "../components/FeaturedProducts"
import { ServicesSection } from "../components/Services"
import { TestimonialsSection } from "../components/Testimonials"
import { WhyUsSection } from "../components/WhyUsSection"


const Home = () => {
  return (
    <div>
      <BannerSliders/>
      <WhyUsSection/>
      <ServicesSection/>
      <FeaturedProducts/>
      <TestimonialsSection/>
      <ContactUsSection/>
    </div>
  )
}

export default Home