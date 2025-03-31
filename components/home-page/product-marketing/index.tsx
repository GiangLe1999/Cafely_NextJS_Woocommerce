"use client";

import { useEffect, useState } from "react";

import ChartUpIcon from "@/components/icons/chart-up";
import CoffeeBagIcon from "@/components/icons/coffee-bag";
import LightBulbIcon from "@/components/icons/light-bulb";
import MeditateIcon from "@/components/icons/meditate";
import Image from "next/image";
import { FC, JSX } from "react";
import LineWithDot from "./line-with-dot";
import MicroscopeIcon from "@/components/icons/microscope";
import BoxesIcon from "@/components/icons/boxes";
import Heading2 from "@/components/ui/heading-2";

const ProductMarketing: FC = (): JSX.Element => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2); // Điều chỉnh tốc độ parallax
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative pt-12 h-full overflow-hidden bg-[linear-gradient(180deg,rgba(252,186,248,1),rgba(253,233,196,1)_36%,rgba(253,236,199,1)_76%,rgba(241,186,119,1)_100%)]">
      <div className="mix-blend-multiply pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
        <Image
          src="/images/home/product-marketing-bg.jpg"
          alt="Product Marketing Background"
          width={1400}
          height={855}
          className="left-0 bottom-0 right-0 absolute w-full h-[200%] -top-[150px] object-contain object-top"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      <div className="container relative z-[1]">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col text-center items-center mt-6 mb-12">
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.65px] text-[#5A251D] md:mb-8 md:text-[13px] mt-[10px]">
              Your morning ritual, totally transformed
            </h5>
            <Heading2
              content="Vietnamese Coffee 2.0"
              className="mb-4 md:mb-6 mt-0"
            />
            <p className="text-[#5A251D] font-moret leading-[1.3] text-2xl tracking-[-0.24px] font-medium">
              Start your day with bold, flavorful Vietnamese coffee, reimagined
              without the sugar.
            </p>
          </div>

          <div className="relative flex w-full flex-col justify-center gap-4 pb-12 sm:flex-row md:gap-x-8 lg:grid lg:grid-cols-[minmax(0,1fr)_370px_minmax(0,1fr)] lg:gap-x-10 lg:pb-0">
            <div className="group relative z-[1] mx-auto flex w-full max-w-sm flex-1 flex-col gap-4 md:max-w-none lg:gap-y-7 justify-center left">
              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  Clean, All-Day Energy
                </h5>

                <LightBulbIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />

                <span
                  className="relative hidden h-px w-[6vw] max-w-[110px] shrink-0 bg-primary lg:inline-block"
                  aria-hidden="true"
                >
                  {/* Áp dụng right: 0; cho phần tử con khi phần tử cha có class .left. */}
                  <span className="absolute top-1/2 size-3 rounded-full bg-primary -translate-y-1/2 group-[.left]:right-0 group-[.right]:left-0"></span>
                </span>
              </div>

              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  Jitter-Free Focus
                </h5>

                <MeditateIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />

                <span
                  className="relative hidden h-px w-[6vw] max-w-[110px] shrink-0 bg-primary lg:inline-block"
                  aria-hidden="true"
                >
                  {/* Áp dụng right: 0; cho phần tử con khi phần tử cha có class .left. */}
                  <span className="absolute top-1/2 size-3 rounded-full bg-primary -translate-y-1/2 group-[.left]:right-0 group-[.right]:left-0"></span>
                </span>
              </div>

              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  Peak Performance
                </h5>

                <ChartUpIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />

                <LineWithDot />
              </div>
            </div>

            <div className="w-full absolute z-0 opacity-20 lg:relative lg:opacity-100">
              <Image
                src="/images/home/product-marketing-coffee-glass.png"
                alt="Coffee Glass"
                width={400}
                height={499}
                className="object-contain object-bottom lg:max-w-[370px] mx-auto"
              />
            </div>

            <div className="group relative z-[1] mx-auto flex w-full max-w-sm flex-1 flex-col gap-4 md:max-w-none lg:gap-y-7 justify-center right">
              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  Specialty Coffee
                </h5>

                <CoffeeBagIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />

                <LineWithDot />
              </div>

              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  Research-Backed Ingredients
                </h5>

                <MicroscopeIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />
                <LineWithDot />
              </div>

              <div className="flex items-center justify-end gap-x-6 group-[.right]:flex-row-reverse -lg:group-[.left]:flex-row-reverse">
                <h5 className="font-moret font-light normal-case leading-snug md:text-xl lg:text-lg xl:whitespace-nowrap xl:text-2xl">
                  All Natural, Zero Guilt
                </h5>

                <BoxesIcon className="w-[calc(50_*_0.8)] flex-shrink-0 md:w-[50px]" />
                <LineWithDot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMarketing;
