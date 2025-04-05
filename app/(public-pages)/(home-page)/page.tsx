import Brew from "@/components/home-page/brew";
import AllProducts from "@/components/home-page/all-products";
import Benefits from "@/components/home-page/benefits";
import Guidance from "@/components/home-page/guidance";
import Hero from "@/components/home-page/hero";
import ProductMarketing from "@/components/home-page/product-marketing";
import SpecialThings from "@/components/home-page/special-things";
import TheDifference from "@/components/home-page/the-difference";
import { getHomeProducts } from "@/queries/product.query";
import { NextPage } from "next";
import Reviews from "@/components/home-page/reviews";
import Guarantee from "@/components/home-page/guarantee";

const Home: NextPage = async () => {
  const { bestsellers, whole_bean_coffee, whole_instant_coffee } =
    await getHomeProducts();

  return (
    <>
      <Hero />
      <ProductMarketing />
      <AllProducts
        bestsellers={bestsellers}
        whole_bean_coffee={whole_bean_coffee}
        whole_instant_coffee={whole_instant_coffee}
      />
      <SpecialThings />
      <Benefits />
      <Guidance />
      <Brew />
      <TheDifference />
      <Reviews />
      <Guarantee />
    </>
  );
};

export default Home;
