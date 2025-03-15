import { FC, JSX } from "react";
import CartIcon from "@/components/icons/cart";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FreeShippingProgress from "./free-shipping-progress";

interface Props {
  getTextColor: () => string;
  getBadgeTextColor: () => string;
  getBadgeBackgroundColor: () => string;
}

const Cart: FC<Props> = ({
  getTextColor,
  getBadgeTextColor,
  getBadgeBackgroundColor,
}): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger>
        <button aria-label="Cart" className="relative">
          <CartIcon
            className={cn(
              "w-[21px] h-[21px] transition-colors duration-400",
              getTextColor()
            )}
          />
          <span
            className={cn(
              getBadgeTextColor(),
              getBadgeBackgroundColor(),
              "transition-all duration-400 absolute w-4 aspect-square -top-1 right-[-5px] rounded-full text-[10px] font-mono grid place-items-center"
            )}
          >
            0
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="p-0 bg-white m-3 h-auto rounded-[24px] !max-w-[512px]">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-base font-bold text-brown">
            Your cart (0)
          </SheetTitle>
        </SheetHeader>

        <div>
          <FreeShippingProgress freeShippPercents={33} />

          <div className="p-4">Name</div>
        </div>

        <SheetFooter className="pt-3 pb-4 px-4 sm:justify-start border-t">
          <div className="mb-2 flex items-center justify-between gap-1">
            <h4 className="text-xs font-bold text-light_brown">
              Complete coffee routine
            </h4>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
