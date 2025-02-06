import { ContactUsSection } from "../components/Contactform"
import { ProductsPage } from "../components/Products"
import { ProductsBanner } from "../components/ProductsBanner"
import { FeaturedProducts } from "../components/FeaturedProducts"

const Products = () => {
  return (
    <div>
      <ProductsBanner/>
      <ProductsPage/>
      <FeaturedProducts/>
      <ContactUsSection/>
    </div>
  )
}

export default Products