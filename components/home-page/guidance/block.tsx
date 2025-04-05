import Image from "next/image";
import { FC, JSX } from "react";

interface Props {
  img: string;
  order: number;
  description: string;
}

const GuidanceBlock: FC<Props> = ({ img, order, description }): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 shrink-0 basis-4/5 snap-start md:flex-1 md:gap-5">
      <div className="overflow-hidden relative rounded-[8px] md:rounded-[12px] w-full aspect-square">
        <Image
          src={img}
          alt={`Guidance ${order}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-row gap-3">
        <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary text-center text-[9.75px] font-bold text-brown md:h-5 md:w-5 md:text-xs">
          {order}
        </span>
        <p className="text-sm text-brown xs:text-[15px] font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GuidanceBlock;
