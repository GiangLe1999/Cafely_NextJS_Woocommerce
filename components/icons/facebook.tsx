import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const FacebookIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0102 0C4.48177 0 0 4.28691 0 9.57498C0 14.0653 3.2321 17.8332 7.59214 18.8681V12.5011H5.52804V9.57498H7.59214V8.31415C7.59214 5.05521 9.13411 3.54466 12.4791 3.54466C13.1134 3.54466 14.2077 3.66377 14.6553 3.7825V6.43477C14.4191 6.41102 14.0087 6.39915 13.499 6.39915C11.8577 6.39915 11.2234 6.99395 11.2234 8.54012V9.57498H14.4932L13.9314 12.5011H11.2234V19.0799C16.1801 18.5073 20.0208 14.4705 20.0208 9.57498C20.0204 4.28691 15.5386 0 10.0102 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
