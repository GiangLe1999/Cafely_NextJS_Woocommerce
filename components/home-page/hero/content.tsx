import { FC, JSX } from "react";
import Link from "next/link";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import MoneyBackIcon from "@/components/icons/money-back";

const HeroContent: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        <div className="mb-6 flex flex-col items-center justify-center gap-[6px] text-start text-xs leading-none sm:text-sm sm:flex-row lg:mb-8">
          <Rating value={5} readonly activeFillColor="#D76400" />

          <Link
            href="#reviews"
            className="border-b border-transparent font-medium transition-colors duration-400 hover:border-brown"
          >
            Over 10,000 Happy Customers
          </Link>
        </div>

        <h1 className="font-pp_sans relative mb-6 mt-0 leading-[0.9] uppercase tracking-[-1.68px] text-[84px]">
          Awaken to <br />
          Boldness.
        </h1>

        <p className="relative mb-4 text-xl font-normal lg:text-2xl font-moret">
          Clean Energy. Bold Taste. Zero Compromise.
        </p>

        <p className="mx-auto text-base font-medium leading-normal text-brown lg:max-w-sm">
          Fuel your daily hustle with strong coffees and delicious functional
          drinks, supercharged with all natural ingredients and superfoods.
        </p>

        <div className="mt-6 text-center">
          <Button className="w-44 h-12 group p-0 bg-[#B65B31] hover:bg-brown transition duration-400 hover:translate-y-[1px]">
            <Link
              className="w-full text-base h-full text-center gap-1 font-bold text-white px-6 py-3"
              href="/collections/all"
            >
              Shop Now
            </Link>
          </Button>
        </div>

        <div className="mt-6 lg:mt-8">
          <div className="inline-flex items-center justify-start gap-3 text-start text-brown lg:gap-5">
            <MoneyBackIcon className="w-[72px] h-[72px]" />

            <div>
              <div className="text-sm font-bold lg:text-[15px]">
                100% Happiness Guarantee
              </div>
              <div className="mt-1 text-xs font-medium leading-snug lg:text-[13px]">
                60-day money back guarantee if you don&apos;t love it.
                <br />
                No questions asked.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
