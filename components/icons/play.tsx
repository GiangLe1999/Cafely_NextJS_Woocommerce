import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const PlayIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.61 0C22.2531 0 0 22.2531 0 49.61C0 76.9669 22.2531 99.22 49.61 99.22C76.9669 99.22 99.22 76.9669 99.22 49.61C99.22 22.2531 76.9669 0 49.61 0ZM49.61 7.26C73.0441 7.26 91.96 26.1759 91.96 49.61C91.96 73.0441 73.0441 91.96 49.61 91.96C26.1759 91.96 7.26 73.0441 7.26 49.61C7.26 26.1759 26.1759 7.26 49.61 7.26ZM36.3 27.83V71.39L72.6 49.61L36.3 27.83Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default PlayIcon;
