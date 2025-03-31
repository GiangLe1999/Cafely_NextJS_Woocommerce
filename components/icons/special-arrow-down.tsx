import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const SpecialArrowDownIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="105"
      height="58"
      viewBox="0 0 105 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(-1 0 0 1 5.27795 0.956177)"
        fill="#FF4A11"
      ></circle>
      <line
        y1="-0.5"
        x2="43"
        y2="-0.5"
        transform="matrix(1 0 0 -1 5.27795 2.95618)"
        stroke="#D49D7F"
      ></line>
      <line
        y1="-0.5"
        x2="65.416"
        y2="-0.5"
        transform="matrix(-0.718479 -0.695549 -0.695549 0.718479 94.278 49.4562)"
        stroke="#D49D7F"
      ></line>
      <circle
        cx="8"
        cy="8"
        r="8"
        transform="matrix(-1 0 0 1 104.278 41.9562)"
        fill="#FFF9EB"
      ></circle>
      <circle
        cx="6"
        cy="6"
        r="6"
        transform="matrix(-1 0 0 1 102.278 43.9562)"
        fill="#FF4A11"
      ></circle>
    </svg>
  );
};

export default SpecialArrowDownIcon;
