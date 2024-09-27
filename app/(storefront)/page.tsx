import { CategoriesSelection } from "../_components/storefront/CategoriesSelection";
import { FeaturedProducts } from "../_components/storefront/FeaturedProducts";
import { Hero } from "../_components/storefront/Hero";


export default function IndexPage() {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
      <FeaturedProducts />
    </div>
  );
}