import { Button } from "@/components/ui/button";
import Heading2 from "@/components/ui/heading-2";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC, JSX } from "react";

const Guarantee: FC = (): JSX.Element => {
  return (
    <div className="relative md:py-12 py-9 bg-[linear-gradient(180deg,#fff5f5,rgba(255,255,255,1)_70.5%)]">
      <div className="container flex flex-col text-center items-center">
        <Heading2 content="100% Happiness Guarantee" />
        <div className="mb-4 text-[15px] leading-relaxed text-[#89695c] md:text-base mt-5">
          <p className="font-medium">
            Your happiness is our priority. If you’re not entirely pleased with
            your purchase, <br /> reach out within 60 days, and we&apos;ll
            provide a full refund or exchange it for a similar item.
          </p>
        </div>
        <div className="mt-6 md:mt-10">
          <Button className="h-[49px] group p-0">
            <Link
              className="flex w-full text-base h-full items-center justify-between gap-12 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
              href="/collections/all"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
