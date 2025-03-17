import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const LockIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M12.7791 7.03961H12.0593V4.87999C12.0593 2.36644 10.0136 0.320801 7.50006 0.320801C4.98651 0.320801 2.94087 2.36644 2.94087 4.87999V7.03961H2.221C1.42614 7.03961 0.78125 7.6845 0.78125 8.47936V14.2383C0.78125 15.0332 1.42614 15.6781 2.221 15.6781H12.7791C13.574 15.6781 14.2189 15.0332 14.2189 14.2383V8.47936C14.2189 7.6845 13.574 7.03961 12.7791 7.03961ZM9.65968 7.03961H5.34044V4.87999C5.34044 3.6892 6.30927 2.72038 7.50006 2.72038C8.69085 2.72038 9.65968 3.6892 9.65968 4.87999V7.03961Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default LockIcon;
