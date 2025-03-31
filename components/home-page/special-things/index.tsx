import SpecialArrowDownIcon from "@/components/icons/special-arrow-down";
import SpecialArrowUpIcon from "@/components/icons/special-arrow-up";
import SpecialLineIcon from "@/components/icons/special-line";
import Heading2 from "@/components/ui/heading-2";
import Image from "next/image";
import { FC, JSX } from "react";

const SpecialThings: FC = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden bg-light_pink pt-20 pb-12">
      <div className="container">
        <div className="relative z-[1] flex flex-col text-center items-center">
          <Heading2
            content="What Makes Our Coffee Special"
            className="mt-0 md:mb-6"
          />
        </div>

        <div className="relative mt-6 grid w-full grid-cols-2 items-stretch text-left lg:mt-8 lg:gap-x-[calc(300px_+_2rem)] lg:gap-y-12 lg:py-16 xl:gap-x-[calc(300px_+_6rem)]">
          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:text-right -lg:pr-4 -lg:mr-px after:content-[''] after:absolute after:inline-block after:w-px after:h-full after:bg-app-lavender after:-right-px after:top-4 before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:top-2 before:right-[-3.5px] before:z-[1] lg:after:content-none lg:before:content-none lg:pr-24 xl:pr-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              2X Stronger
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Premium Vietnamese robusta packs twice the caffeine of regular
              coffee, perfect for those seeking an extra edge.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -right-4">
              <SpecialArrowDownIcon className="w-[96px] h-[53.02px]" />
            </div>
          </div>

          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:pl-4 lg:pl-24 xl:pl-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              Authentic Bold Taste
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Traditional Vietnamese roasting brings out rich, complex flavors -
              bold yet smooth.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -left-4 -scale-x-100">
              <SpecialArrowDownIcon className="w-[96px] h-[53.02px]" />
            </div>
          </div>

          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:text-right -lg:pr-4 -lg:mr-px after:content-[''] after:absolute after:inline-block after:w-px after:h-full after:bg-app-lavender after:-right-px after:top-4 before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:top-2 before:right-[-3.5px] before:z-[1] lg:after:content-none lg:before:content-none lg:pr-24 xl:pr-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              Rich in Antioxidants
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Packed with natural compounds that support overall wellness and
              health.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -right-4">
              <SpecialLineIcon className="w-[96px] h-[15.53px]" />
            </div>
          </div>

          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:pl-4 lg:pl-24 xl:pl-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              Premium Single-Origin Quality
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Hand-selected beans from Vietnam&apos;s finest highland farms
              ensure exceptional quality.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -left-4 -scale-x-100">
              <SpecialLineIcon className="w-[96px] h-[15.53px]" />
            </div>
          </div>

          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:text-right -lg:pr-4 -lg:mr-px after:content-[''] after:absolute after:inline-block after:w-px after:h-full after:bg-app-lavender after:-right-px after:top-4 before:content-[''] before:absolute before:inline-block before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:top-2 before:right-[-3.5px] before:z-[1] lg:after:content-none lg:before:content-none lg:pr-24 xl:pr-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              Earth-Friendly Initiatives
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Eco-conscious practices from farm to cup, supporting communities
              and planet.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -right-4 translate-y-[calc(-1*(100%_-_1rem))]">
              <SpecialArrowUpIcon className="w-[96px] h-[53.02px]" />
            </div>
          </div>

          <div className="relative z-[1] flex flex-col -lg:pb-8 -lg:pl-4 lg:pl-24 xl:pl-28">
            <h5 className="mb-4 mt-0 text-xl text-primary md:text-2xl font-pp_sans uppercase">
              Sustainably Sourced
            </h5>
            <p className="text-xs leading-relaxed text-[#706360] md:text-sm font-medium">
              Direct farmer partnerships guarantee quality and sustainable
              practices.
            </p>
            <div className="absolute top-0 inline-block w-20 lg:w-24 -lg:hidden -left-4 -scale-x-100 translate-y-[calc(-1*(100%-1rem))]">
              <SpecialArrowUpIcon className="w-[96px] h-[53.02px]" />
            </div>
          </div>

          <div className="mx-auto w-full lg:absolute lg:left-1/2 lg:right-auto lg:top-1/2 lg:max-w-[300px] lg:-translate-x-1/2 lg:-translate-y-1/2 -lg:order-first -lg:col-span-2 -lg:mb-8 -lg:aspect-[2/1.4] -lg:max-w-md z-0 -md:hidden">
            <Image
              src="/images/home/special-things-bg.png"
              alt="Special Things"
              width={300}
              height={532.8}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialThings;
