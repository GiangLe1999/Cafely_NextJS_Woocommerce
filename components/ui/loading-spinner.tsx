import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { FC, JSX } from "react";

interface Props {
  className?: string;
}

const LoadingSpinner: FC<Props> = ({ className }): JSX.Element => {
  return <LoaderCircle className={cn("animate-spin", className)} />;
};

export default LoadingSpinner;
