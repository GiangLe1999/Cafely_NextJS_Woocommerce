import { cn } from "@/lib/utils";
import { FC, JSX } from "react";

interface Props {
  content: string;
  className?: string;
}

const Subheading: FC<Props> = ({ content, className }): JSX.Element => {
  return (
    <div className={cn("text-primary md:text-lg font-medium", className)}>
      <p>{content}</p>
    </div>
  );
};

export default Subheading;
