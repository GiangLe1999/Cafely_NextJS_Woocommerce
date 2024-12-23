import { FC, JSX } from "react";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
  TouchProvider,
} from "@/components/ui/hybrid-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isScrolled: boolean;
  categories: Category[];
  menuWidth: number;
}

const listItemClass =
  "text-base font-medium relative after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-foreground after:duration-300 after:ease-in-out hover:after:w-full";

const Menu: FC<Props> = ({
  isScrolled,
  categories,
  menuWidth,
}): JSX.Element => {
  return (
    <TooltipProvider>
      <TouchProvider>
        <HybridTooltip>
          <HybridTooltipTrigger>
            <div
              className={cn(
                "cursor-pointer h-[41px] font-semibold group hover:text-foreground w-fit flex items-center rounded-full px-3.5 py-2 text-sm",
                isScrolled ? "bg-secondary" : "bg-[#FFF4FE] hover:bg-[#FFF4FE]"
              )}
            >
              Shop
              <ChevronDown className="w-4 h-4 ml-3 group-hover:rotate-180 duration-150 shrink-0" />
            </div>
          </HybridTooltipTrigger>
          <HybridTooltipContent
            align="start"
            className="z-[100] mt-3 origin-top-left bg-white border border-app-lavender py-8 px-10 flex h-full gap-4 rounded-2xl mx-auto"
            style={{ width: menuWidth }}
          >
            <div className="flex-1 h-auto grid grid-cols-3 content-between gap-x-8 gap-y-12">
              {/* Categories */}
              <div>
                <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
                  By Category
                </h2>
                <ul role="list" className="text-foreground">
                  {categories?.length > 0 &&
                    categories.map((category) => (
                      <li key={category.id} className="py-[3px] mb-0">
                        <Link
                          href={`/collections/${category.slug}`}
                          className={listItemClass}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
                  About Us
                </h2>
                <ul role="list" className="text-foreground">
                  <li className="py-[3px] mb-0">
                    <Link href="/pages/about-us" className={listItemClass}>
                      About Us
                    </Link>
                  </li>

                  <li className="py-[3px] mb-0">
                    <Link
                      href="/pages/happiness-guarantee"
                      className={listItemClass}
                    >
                      Happiness Guarantee
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn */}
              <div>
                <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
                  Learn
                </h2>
                <ul role="list" className="text-foreground">
                  <li className="py-[3px] mb-0">
                    <Link href="/blogs/all" className={listItemClass}>
                      Blog
                    </Link>
                  </li>

                  <li className="py-[3px] mb-0">
                    <Link href="/pages/faq" className={listItemClass}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <Button className="w-full h-[49px] group px-6">
                <Link
                  className="flex w-full h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500"
                  href="/collections/all"
                >
                  Shop All Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </Button>
            </div>

            <div className="border-app-lavender flex flex-col rounded-3xl border p-4 sm:p-5 md:rounded-4xl lg:rounded-none lg:border-0 lg:border-l lg:p-0 lg:pl-6 w-[320px]">
              {/* Quiz */}
              <Link
                className="block relative w-full aspect-[1.751] mb-2 overflow-hidden rounded-2xl"
                href="/pages/quiz"
                aria-label="Take Coffee Quiz"
              >
                <Image
                  src="/header/take-quiz.jpg"
                  alt="Take Coffee Quiz"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </Link>

              <h5 className="mb-1.5 text-base md:text-[17px] text-foreground font-bold mt-4">
                Take Coffee Quiz
              </h5>

              <p className="mb-5 text-1.5xs text-app-brown md:text-sm">
                Not sure which Cafely coffee to choose? Take our quiz to find
                your perfect match.
              </p>

              <Button className="w-full h-[49px] group px-6">
                <Link
                  className="flex w-full h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500"
                  href="/pages/quiz"
                >
                  Take Coffee Quiz
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </Button>
            </div>
          </HybridTooltipContent>
        </HybridTooltip>
      </TouchProvider>
    </TooltipProvider>
  );
};

export default Menu;
