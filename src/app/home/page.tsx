import MainTop from "@/components/component/main/maintop";
import TitleMain from "@/components/component/main/titlemain";
import Product from "@/components/component/main/product";
import LookShop from "@/components/component/main/lookTheSho";
import Testimonial from "@/components/component/main/testimonial";
import Insta from "@/components/component/main/insta";

export default function HomePage() {
  return (
    <nav>
      <MainTop />
      <TitleMain />
      <Product />
      <LookShop />
      <Testimonial />
      <Insta />
    </nav>
  );
}
