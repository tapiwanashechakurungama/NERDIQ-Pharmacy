import { ContactUsSection } from "../components/Contactform"
import { PrescriptionsBanner } from "../components/PrescriptionsBanner"
import { PrescriptionsPage } from "../components/PrescriptionsSection"


const Prescriptions = () => {
  return (
    <div>
      <PrescriptionsBanner/>
      <PrescriptionsPage/>
      <ContactUsSection/>
    </div>
  )
}

export default Prescriptions