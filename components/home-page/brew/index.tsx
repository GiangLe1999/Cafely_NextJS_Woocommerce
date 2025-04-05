import { FC, JSX } from "react";
import Heading2 from "../../ui/heading-2";
import Subheading from "../../ui/subheading";
import FrenchPressIcon from "../../icons/french-press";
import ChemexIcon from "../../icons/chemex";
import ExpressoCupIcon from "../../icons/expresso-cup";
import ExpressoMachineIcon from "../../icons/expresso-machine";
import PourOverIcon from "../../icons/pour-over";
import AeropressIcon from "../../icons/aeropress";
import MokaPotIcon from "../../icons/moka-pot";
import { Button } from "../../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Brew: FC = (): JSX.Element => {
  return (
    <div className="relative border-b border-b-app-lavender md:py-12 py-9">
      <div className="container">
        <div className="flex flex-col text-left items-start">
          <Heading2 content="Nail Your Brew, Everytime" className="md:mb-6" />
        </div>

        <Subheading
          content="Coffee is as diverse as it is delightful. While our heart beats for
          Vietnamese-style coffee, we embrace and celebrate all brews."
          className="max-w-[620px]"
        />

        <div className="mt-12 grid w-full grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 lg:grid-cols-7">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <FrenchPressIcon className="w-[60px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              French Press
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <ChemexIcon className="w-[42px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Chemex/Pourover
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <ExpressoCupIcon className="w-[67px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Vietnamese Iced Coffee
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <ExpressoMachineIcon className="w-[62px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Espresso
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <PourOverIcon className="w-[60px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Drip
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <AeropressIcon className="w-[46px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Aeropress
            </h5>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-transparent bg-light_pink px-1 pb-4 pt-7 text-center md:gap-5">
            <MokaPotIcon className="w-[52px] h-[94.75px]" />
            <h5 className="m-0 text-sm md:text-lg text-[#7c544e] uppercase font-pp_sans">
              Moka Pots
            </h5>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-12">
          <Button className="h-[49px] group p-0">
            <Link
              className="flex w-full text-base h-full items-center justify-between gap-12 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
              href="/collections/all"
            >
              Explore our brew guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brew;
