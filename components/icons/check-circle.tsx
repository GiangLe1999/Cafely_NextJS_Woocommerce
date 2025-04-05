import { cn } from "@/lib/utils";
import { FC, JSX } from "react";

interface Props {
  className?: string;
}

const CheckCircleIcon: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      className={cn(className)}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13.2031"
        cy="13.2031"
        r="12.6211"
        fill="currentColor"
      ></circle>
      <path
        d="M8.23579 13.5602L8.24422 13.5767L8.25426 13.5922L10.7142 17.3998C10.945 17.8369 11.3768 18.125 11.8692 18.171C11.9157 18.1754 11.9614 18.1775 12.0065 18.1775C12.4569 18.1775 12.8815 17.9711 13.1594 17.6096L13.1595 17.6097L13.1654 17.6016L18.5438 10.1974C18.8477 9.79849 18.7746 9.22761 18.3757 8.9201C17.9749 8.60976 17.3995 8.68555 17.0928 9.08542L17.0927 9.08534L17.087 9.09315L12.0221 16.0654L9.85293 12.7082C9.61797 12.2736 9.07775 12.1004 8.63202 12.3302C8.18259 12.5602 8.00582 13.1113 8.23579 13.5602Z"
        fill="white"
        stroke="white"
        strokeWidth="0.73768"
      ></path>
    </svg>
  );
};

export default CheckCircleIcon;
