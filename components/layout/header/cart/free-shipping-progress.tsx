import { Progress } from "@/components/ui/progress";
import { FC, JSX } from "react";

interface Props {
  freeShippPercents: number;
}

const FreeShippingProgress: FC<Props> = ({
  freeShippPercents,
}): JSX.Element => {
  return (
    <div className="bg-light_pink border-b p-4">
      <p className="text-center text-xs">
        You are
        <span className="font-bold text-primary"> $49 </span>
        away from
        <b> FREE shipping </b>
      </p>

      <div className="flex items-center gap-4 mt-3">
        <Progress value={freeShippPercents} className="flex-1" />

        <b className="text-primary text-xs w-fit shrink-0">$49</b>
      </div>
    </div>
  );
};

export default FreeShippingProgress;
