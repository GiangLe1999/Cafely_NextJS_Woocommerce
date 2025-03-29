import Hero from "@/components/home-page/hero";
import ProductMarketing from "@/components/home-page/product-marketing";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProductMarketing />
    </>
  );
};

export default Home;
