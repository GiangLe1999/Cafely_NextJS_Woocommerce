import { Progress } from "@/components/ui/progress";
import { free_shipping_threshold } from "@/constants";
import useCartStore from "@/lib/stores/useCartStore";
import { formatPrice } from "@/lib/utils";
import { FC, JSX } from "react";

const FreeShippingProgress: FC = (): JSX.Element => {
  const { totalPrice } = useCartStore();
  const percents =
    (totalPrice / free_shipping_threshold) * 100 > 100
      ? 100
      : (totalPrice / free_shipping_threshold) * 100;

  return (
    <div className="bg-light_pink border-b p-4">
      <p className="text-center text-[13px]">
        {totalPrice >= free_shipping_threshold ? (
          <>
            You&apos;ve reached <b> FREE shipping!</b>
          </>
        ) : (
          <>
            You are{" "}
            <span className="font-bold text-primary">
              ${formatPrice(free_shipping_threshold - totalPrice)}
            </span>{" "}
            away from
            <b> FREE shipping </b>
          </>
        )}
      </p>

      <div className="flex items-center gap-4 mt-2">
        <Progress value={percents} className="flex-1" />

        <b className="text-primary text-xs w-fit shrink-0">$49</b>
      </div>
    </div>
  );
};

export default FreeShippingProgress;
