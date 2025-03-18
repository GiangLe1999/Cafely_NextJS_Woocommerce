import { FC, JSX } from "react";
import useCartStore from "@/lib/stores/useCartStore";
import { Button } from "@/components/ui/button";
import LockIcon from "@/components/icons/lock";
import { bag_discount, pouch_discount } from "@/constants";
import { formatPrice } from "@/lib/utils";

const CartFooterCalculator: FC = (): JSX.Element | null => {
  const { totalItems, totalPrice, items, totalBags, totalPouches } =
    useCartStore();

  const discountForBags =
    totalBags >= bag_discount.quantity_1
      ? formatPrice(
          items
            .filter((item) => item.type === "bag")
            .reduce(
              (acc, item) =>
                (acc + (item.backup_price - item.price)) * item.quantity,
              0
            )
        )
      : 0;

  const discountForPouches =
    totalPouches >= pouch_discount.quantity_1
      ? formatPrice(
          items
            .filter((item) => item.type === "pouch")
            .reduce(
              (acc, item) =>
                (acc + (item.backup_price - item.price)) * item.quantity,
              0
            )
        )
      : 0;

  if (totalPrice === 0) {
    return null;
  }

  return (
    <div className="px-4 py-4 border-t !m-0">
      <div className="space-y-[5px] mb-4">
        {totalBags >= bag_discount.quantity_1 && (
          <div className="flex items-center gap-1 justify-between">
            <div className="flex items-center gap-1">
              <span className="text-[#89695c] text-[13px] font-medium">
                Discount
              </span>
              <span className="ml-0.5 rounded-[6px] bg-[#fdba74] px-2 py-0.5 align-middle text-2xs font-bold text-brown md:text-xs">
                {totalBags < bag_discount.quantity_2
                  ? `${bag_discount.quantity_1} BAGS`
                  : `${bag_discount.quantity_2} BAGS`}
              </span>
            </div>

            <span className="font-bold text-[13px] text-brown">
              -${discountForBags}
            </span>
          </div>
        )}

        {totalPouches >= pouch_discount.quantity_1 && (
          <div className="flex items-center gap-1 justify-between">
            <div className="flex items-center gap-1">
              <span className="text-[#89695c] text-[13px] font-medium">
                Discount
              </span>
              <span className="ml-0.5 rounded-[6px] bg-[#fdba74] px-2 py-0.5 align-middle text-2xs font-bold text-brown md:text-xs">
                {totalPouches < pouch_discount.quantity_2
                  ? `${pouch_discount.quantity_1} POUCHES`
                  : `${pouch_discount.quantity_2} POUCHES`}
              </span>
            </div>

            <span className="font-bold text-[13px] text-brown">
              -${discountForPouches}
            </span>
          </div>
        )}

        <div className="flex items-center gap-1 justify-between">
          <span className="text-[#89695c] text-[13px] font-medium">
            Subtitle ({totalItems} items)
          </span>

          <span className="font-bold text-[13px] text-primary">
            ${totalPrice}
          </span>
        </div>
      </div>

      <Button className="rounded-[12px] w-full bg-primary text-white h-12 text-base font-bold">
        <LockIcon className="!w-[13] !h-[15px] mt-[-1px]" /> Secure Checkout
      </Button>

      <div className="mt-2 text-center text-2xs text-app-brown md:text-xs font-medium">
        <span>Taxes are calculated at checkout.</span>
      </div>
    </div>
  );
};

export default CartFooterCalculator;
