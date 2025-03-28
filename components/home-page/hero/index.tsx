import { FC, JSX } from "react";
import HeroContent from "./content";
import HeroCarousel from "./carousel";

const Hero: FC = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-[#ffd041] to-[#fff6e5] pb-12 pt-[114px]">
      <div className="container relative z-[2] flex flex-col items-center gap-6 text-center text-brown sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
        <HeroContent />

        <div className="relative mx-12 aspect-[4/3.35] w-full rounded-2xl lg:max-w-lg lg:rounded-3xl overflow-hidden">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
