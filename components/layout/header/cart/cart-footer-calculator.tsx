import { FC, JSX, useMemo } from "react";
import useCartStore from "@/lib/stores/useCartStore";
import { Button } from "@/components/ui/button";
import LockIcon from "@/components/icons/lock";
import { bag_discount, pouch_discount } from "@/constants";
import { formatPrice } from "@/lib/utils";

const CartFooterCalculator: FC = (): JSX.Element | null => {
  const { totalItems, totalPrice, items, totalBags, totalPouches } =
    useCartStore();

  const calculateDiscount = (
    type: string,
    quantity: number,
    threshold: number
  ) => {
    return quantity >= threshold
      ? formatPrice(
          items
            .filter((item) => item.type === type)
            .reduce(
              (acc, item) =>
                acc + (item.backup_price - item.price) * item.quantity,
              0
            )
        )
      : 0;
  };

  const discountForBags = useMemo(
    () => calculateDiscount("bag", totalBags, bag_discount.quantity_1),
    [items, totalBags]
  );
  const discountForPouches = useMemo(
    () => calculateDiscount("pouch", totalPouches, pouch_discount.quantity_1),
    [items, totalPouches]
  );

  if (totalPrice === 0) return null;

  return (
    <div className="px-4 py-4 border-t !m-0">
      <div className="space-y-[5px] mb-4">
        {[
          {
            label: "BAGS",
            total: totalBags,
            discount: discountForBags,
            thresholds: bag_discount,
          },
          {
            label: "POUCHES",
            total: totalPouches,
            discount: discountForPouches,
            thresholds: pouch_discount,
          },
        ].map(
          ({ label, total, discount, thresholds }) =>
            total >= thresholds.quantity_1 && (
              <div
                key={label}
                className="flex items-center gap-1 justify-between"
              >
                <div className="flex items-center gap-1">
                  <span className="text-[#89695c] text-[13px] font-medium">
                    Discount
                  </span>
                  <span className="ml-0.5 rounded-[6px] bg-[#fdba74] px-2 py-0.5 align-middle text-2xs font-bold text-brown md:text-xs">
                    {total < thresholds.quantity_2
                      ? `${thresholds.quantity_1} ${label}`
                      : `${thresholds.quantity_2} ${label}`}
                  </span>
                </div>
                <span className="font-bold text-[13px] text-brown">
                  -${discount}
                </span>
              </div>
            )
        )}

        <div className="flex items-center gap-1 justify-between">
          <span className="text-[#89695c] text-[13px] font-medium">
            Subtotal ({totalItems} items)
          </span>
          <span className="font-bold text-[13px] text-primary">
            ${totalPrice}
          </span>
        </div>
      </div>

      <Button className="rounded-[12px] w-full bg-primary text-white h-12 text-base font-bold">
        <LockIcon className="!w-[13px] !h-[15px] mt-[-1px]" /> Secure Checkout
      </Button>

      <div className="mt-2 text-center text-2xs text-app-brown md:text-xs font-medium">
        <span>Taxes are calculated at checkout.</span>
      </div>
    </div>
  );
};

export default CartFooterCalculator;
