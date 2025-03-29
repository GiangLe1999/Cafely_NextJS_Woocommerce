import Image from "next/image";
import { FC, JSX } from "react";
import Marquee from "react-fast-marquee";

const UpperMarquee: FC = (): JSX.Element => {
  return (
    <Marquee gradient={false} speed={30} loop={0} className="py-6 border-b">
      <div className="ml-12 flex flex-shrink-0 items-center gap-12 will-change-transform">
        <div className="inline-flex items-center font-pp_sans uppercase leading-none text-brown tracking-tighty text-2xl md:text-3xl tracking-[-0.3px]">
          Delicious Flavors
        </div>
        <Image
          src="/images/home/marque-1-img-1.png"
          alt="marque-1-img-1"
          width={75}
          height={70}
        />
        <div className="bg-[#BEE5E1] inline-flex items-center font-pp_sans uppercase leading-none text-brown tracking-[-0.22px] animate-flip rounded-xl px-6 py-3 text-xl md:text-[22px]">
          All Natural
        </div>
        <Image
          src="/images/home/marque-1-img-2.png"
          alt="marque-1-img-2"
          width={75}
          height={75}
        />
        <div className="inline-flex items-center font-pp_sans uppercase leading-none text-brown tracking-tighty text-2xl md:text-3xl tracking-[-0.3px]">
          Strong Coffee
        </div>
        <Image
          src="/images/home/marque-1-img-3.png"
          alt="marque-1-img-3"
          width={75}
          height={75}
        />
        <div className="bg-[#FFE18D] inline-flex items-center font-pp_sans uppercase leading-none text-brown tracking-[-0.22px] animate-flip rounded-xl px-6 py-3 text-xl md:text-[22px]">
          Low Sugar
        </div>
        <Image
          src="/images/home/marque-1-img-4.png"
          alt="marque-1-img-4"
          width={75}
          height={74}
        />
      </div>
    </Marquee>
  );
};

export default UpperMarquee;
