import Heading2 from "@/components/ui/heading-2";
import { FC, JSX } from "react";
import GuidanceBlock from "./block";

const Guidance: FC = (): JSX.Element => {
  return (
    <div className="relative border-b border-app-lavender md:py-12 py-9">
      <div className="container">
        <div className="flex flex-col text-center items-center">
          <Heading2
            content="Enhance Your Brew with Phin Filters"
            className="mb-3 md:mb-6"
          />
          <div className="text-primary md:text-lg max-w-[700px] font-medium">
            Amplify your Vietnamese coffee experience with the authentic brewing
            method. Coming soon: Cafely&apos;s own phin filters for maximum
            strength and flavor.
          </div>
        </div>

        {/* snap-x snap-mandatory: Bật chế độ snap scrolling, giúp các phần tử dừng đúng vị trí khi cuộn ngang. */}
        <div className="flex flex-row w-full gap-4 mt-12 no-scrollbar md:mt-16 md:place-content-center md:gap-8 items-baseline overflow-x-auto">
          <GuidanceBlock
            order={1}
            description="Add 2 cups of fresh ground coffee"
            img="/images/home/guidance-1.gif"
          />

          <GuidanceBlock
            order={2}
            description="Pour hot water up to the fill line"
            img="/images/home/guidance-2.gif"
          />

          <GuidanceBlock
            order={3}
            description="Mix with your favorite sweetener, milk, and ice"
            img="/images/home/guidance-2.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Guidance;
