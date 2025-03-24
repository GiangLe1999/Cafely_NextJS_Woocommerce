import { FC, JSX } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Category } from "@/types/category";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  categories: Category[];
  showMenu: boolean;
}

const listItemClass =
  "text-[15px] font-medium relative after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-foreground after:duration-300 after:ease-in-out hover:after:w-full";

const Menu: FC<Props> = ({ categories, showMenu }): JSX.Element => {
  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 container origin-top transition duration-400 z-[100] after:absolute after:left-0 after:-top-5 after:h-6 after:w-[200px]",
        showMenu ? "scale-3d-1" : "scale-3d-0"
      )}
    >
      <div className="mt-2 bg-white border border-app-lavender py-8 px-10 flex h-full gap-4 rounded-2xl mx-auto">
        <div className="flex-1 h-auto grid grid-cols-3 content-between gap-x-8 gap-y-12">
          {/* Categories */}
          <div>
            <h2 className="mb-[1.25rem] text-xs font-bold uppercase tracking-wider text-light_brown">
              By Category
            </h2>
            <ul role="list" className="text-foreground space-y-1">
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
            <h2 className="mb-[1.25rem] text-xs font-bold uppercase tracking-wider text-light_brown">
              About Us
            </h2>
            <ul role="list" className="text-foreground space-y-1">
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
            <h2 className="mb-[1.25rem] text-xs font-bold uppercase tracking-wider text-light_brown">
              Learn
            </h2>
            <ul role="list" className="text-foreground space-y-1">
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

          <Button className="w-full h-[49px] group p-0">
            <Link
              className="flex w-full text-base h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
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

          <h5 className="font-pp_sans mb-1.5 text-base md:text-2xl text-brown uppercase font-bold mt-3">
            Take Coffee Quiz
          </h5>

          <p className="mb-5 text-1.5xs text-app-brown md:text-sm">
            Not sure which Cafely coffee to choose? Take our quiz to find your
            perfect match.
          </p>

          <Button className="w-full h-[49px] group py-0">
            <Link
              className="flex text-base w-full h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
              href="/pages/quiz"
            >
              Take Coffee Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
