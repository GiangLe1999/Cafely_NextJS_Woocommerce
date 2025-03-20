import {
  CircleAlertIcon,
  CircleCheckBigIcon,
  CircleXIcon,
  InfoIcon,
} from "lucide-react";
import { FC, JSX } from "react";
import { Toaster } from "@/components/ui/sonner";

const CustomToaster: FC = (): JSX.Element => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        classNames: {
          error:
            "bg-gradient-to-r from-red-700 to-red-500 text-white border border-white",
          success:
            "bg-gradient-to-r from-green-700 to-green-500 text-white border border-white",
          warning: "bg-yellow-600 text-white border border-white",
          info: "bg-blue-600 text-white border border-white",
          actionButton: "font-semibold",
          description: "!text-[10px]",
        },
      }}
      icons={{
        success: <CircleCheckBigIcon size={18} className="-mt-3" />,
        info: <InfoIcon size={18} className="-mt-3" />,
        warning: <CircleAlertIcon size={18} className="-mt-3" />,
        error: <CircleXIcon size={18} className="-mt-3" />,
      }}
    />
  );
};

export default CustomToaster;
