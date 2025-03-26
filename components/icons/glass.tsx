import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const GlassIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="59"
      viewBox="0 0 80 59"
      fill="none"
    >
      <path
        d="M39.7179 45.1441C51.8203 45.1441 61.6312 41.2123 61.6312 36.3622C61.6312 34.6927 60.4688 33.1321 58.4507 31.8031C70.9399 34.2102 79.4344 38.949 79.4344 44.4014C79.4344 52.29 61.6524 58.6851 39.7172 58.6851C17.782 58.6851 0 52.29 0 44.4014C0 38.9487 8.49545 34.2096 20.9858 31.8027C18.9673 33.1318 17.8047 34.6926 17.8047 36.3622C17.8047 41.2123 27.6156 45.1441 39.7179 45.1441Z"
        fill="#FC470E"
      />
      <ellipse
        cx="39.7175"
        cy="7.25838"
        rx="26.1325"
        ry="7.25838"
        fill="#FC470E"
      />
    </svg>
  );
};

export default GlassIcon;
