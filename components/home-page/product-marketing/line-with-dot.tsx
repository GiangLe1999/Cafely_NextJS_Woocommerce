import { FC, JSX } from "react";

const LineWithDot: FC = (): JSX.Element => {
  return (
    <span
      className="relative hidden h-px w-[6vw] max-w-[110px] shrink-0 bg-primary lg:inline-block"
      aria-hidden="true"
    >
      <span className="absolute top-1/2 size-3 rounded-full bg-primary -translate-y-1/2 group-[.left]:right-0 group-[.right]:left-0"></span>
    </span>
  );
};

export default LineWithDot;
