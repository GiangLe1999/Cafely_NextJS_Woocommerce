import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const SpecialArrowUpIcon: FC<Props> = ({ className }) => {
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
        transform="matrix(-1 0 0 1 5.27795 52.9562)"
        fill="#FF4A11"
      ></circle>
      <line
        x1="5.27795"
        y1="55.4562"
        x2="48.278"
        y2="55.4562"
        stroke="#D49D7F"
      ></line>
      <line
        x1="94.6257"
        y1="9.81542"
        x2="47.6257"
        y2="55.3154"
        stroke="#D49D7F"
      ></line>
      <circle
        cx="96.278"
        cy="8.95618"
        r="8"
        transform="rotate(180 96.278 8.95618)"
        fill="#FFF9EB"
      ></circle>
      <circle
        cx="96.278"
        cy="8.95618"
        r="6"
        transform="rotate(180 96.278 8.95618)"
        fill="#FF4A11"
      ></circle>
    </svg>
  );
};

export default SpecialArrowUpIcon;
