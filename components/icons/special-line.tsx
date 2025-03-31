import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const SpecialLineIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="105"
      height="17"
      viewBox="0 0 105 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="matrix(-1 0 0 1 5.27795 7.95618)"
        fill="#FF4A11"
      ></circle>
      <line
        y1="-0.5"
        x2="91"
        y2="-0.5"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 5.27795 9.95618)"
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

export default SpecialLineIcon;
