import Image from "next/image";
import Header from "@/components/component/header/header";
import MainTop from "@/components/component/main/maintop";
import TitleMain from "@/components/component/main/titlemain";
import Product from "@/components/component/main/product";
import LookShop from "@/components/component/main/lookTheSho";
import Testimonial from "@/components/component/main/testimonial";
import { Insta } from "@/components/component/main/insta";
import Footer from "@/components/component/footer/footer";
export default function Homes() {
  return (

    <main>
      <Header/>
      <MainTop/>
      <TitleMain/>
      <Product/>
      <LookShop/>
      <Testimonial/>
      <Insta/>
      <Footer/>
    </main>
  );
}
