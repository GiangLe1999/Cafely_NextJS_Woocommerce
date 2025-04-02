import Brew from "@/components/brew";
import AllProducts from "@/components/home-page/all-products";
import Benefits from "@/components/home-page/benefits";
import Guidance from "@/components/home-page/guidance";
import Hero from "@/components/home-page/hero";
import ProductMarketing from "@/components/home-page/product-marketing";
import SpecialThings from "@/components/home-page/special-things";
import { getHomeProducts } from "@/queries/product.query";
import { NextPage } from "next";

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
    </>
  );
};

export default Home;
