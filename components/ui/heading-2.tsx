import { cn } from "@/lib/utils";
import { FC, JSX } from "react";

interface Props {
  content: string;
  className?: string;
}

const Heading2: FC<Props> = ({ content, className }): JSX.Element => {
  return (
    <h2
      className={cn(
        "text-primary uppercase text-[72px] tracking-[-1.44px] leading-[1.1] font-pp_sans",
        className
      )}
    >
      {content}
    </h2>
  );
};

export default Heading2;
