import EnhancedFlowStateIcon from "@/components/icons/enhanced-flow-state";
import GutHealthIcon from "@/components/icons/gut-health";
import LastingEnergyIcon from "@/components/icons/lasting-energy";
import MentalClarityIcon from "@/components/icons/mental-clarity";
import PositiveMoodIcon from "@/components/icons/positive-mood";
import SteadyPerformanceIcon from "@/components/icons/steady-performance";
import { Button } from "@/components/ui/button";
import Heading2 from "@/components/ui/heading-2";
import Link from "next/link";
import { FC, JSX } from "react";

const Benefits: FC = (): JSX.Element => {
  return (
    <div className="relative border-b border-b-app-lavender h-full overflow-hidden md:pt-4 md:pb-[60px] pt-4 pb-[45px]">
      <div className="container relative z-[1]">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col text-center items-center md:mt-12 mt-9">
            <Heading2
              content="Coffee for The Bold"
              className="text-brown md:mb-5 mb-3"
            />
            <div className="text-brown font-moret leading-[1.3] font-light text-[25px]">
              Taste the transformation
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap md:grid md:grid-cols-6 items-start gap-6 md:gap-12 max-w-[880px] mx-auto md:my-12 my-9">
          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <LastingEnergyIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Lasting <br /> Energy
            </h5>
          </div>

          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <MentalClarityIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Mental <br /> Clarity
            </h5>
          </div>

          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <EnhancedFlowStateIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Enhanced <br /> Flow State
            </h5>
          </div>

          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <PositiveMoodIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Positive <br /> Mood
            </h5>
          </div>

          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <SteadyPerformanceIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Steady <br /> Perfomance
            </h5>
          </div>

          <div className="flex flex-1 basis-[calc(50%_-_1.5rem)] flex-col items-center justify-center gap-y-4 text-center md:gap-y-5">
            <GutHealthIcon className="flex-shrink-0 w-[85px] h-[72.41px]" />
            <h5 className="normal-case text-lg !leading-tight font-moret text-brown md:text-xl">
              Gut <br /> Health
            </h5>
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-4 justify-center">
          <Button className="h-[49px] group p-0 md:w-[240px] w-full">
            <Link
              className="text-center w-full text-base h-full font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
              href="/collections/vietnamese-coffee"
            >
              Shop Best-Sellers
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
