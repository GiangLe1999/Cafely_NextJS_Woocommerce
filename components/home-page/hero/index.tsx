import { FC, JSX } from "react";
import HeroContent from "./content";
import HeroCarousel from "./carousel";
import UpperMarquee from "./upper-marquee";
import LowerMarquee from "./lower-marquee";

const Hero: FC = (): JSX.Element => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,208,65,1)_10.21%,rgba(255,246,229,1)_50%)]">
      <div className="container relative z-[2] flex flex-col items-center gap-6 text-center text-brown sm:gap-8 lg:flex-row lg:items-center lg:gap-12 pb-12 pt-[114px]">
        <HeroContent />

        <div className="relative mx-12 aspect-[4/3.35] w-full rounded-2xl lg:max-w-lg lg:rounded-3xl overflow-hidden">
          <HeroCarousel />
        </div>
      </div>

      <UpperMarquee />
      <LowerMarquee />
    </div>
  );
};

export default Hero;
