import { ContactUsSection } from "../components/Contactform"
import { ProductsPage } from "../components/Products"
import { ProductsBanner } from "../components/ProductsBanner"


const Products = () => {
  return (
    <div>
      <ProductsBanner/>
      <ProductsPage/>
      <ContactUsSection/>
    </div>
  )
}

export default Products