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
import CartProductsList from "./cart-products-list";
import useCartStore from "@/lib/stores/useCartStore";
import CartFooterCarousel from "./cart-footer-carousel";
import CartFooterCalculator from "./cart-footer-calculator";

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
  const { totalItems } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger>
        <div aria-label="Cart" className="relative">
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
        </div>
      </SheetTrigger>
      <SheetContent className="p-0 bg-white m-3 h-auto rounded-[24px] !max-w-[512px] flex flex-col gap-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-base font-bold text-brown">
            Your cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <FreeShippingProgress />

        <CartProductsList />

        <SheetFooter className="pt-3 pb-0 sm:justify-start border-t block">
          <CartFooterCarousel />
          <CartFooterCalculator />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
