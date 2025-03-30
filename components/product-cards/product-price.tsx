import { cn } from "@/lib/utils";
import { FC, JSX } from "react";

interface Props {
  sale_price?: string;
  regular_price: string;
  regular_price_class?: string;
  sale_price_class?: string;
}

const ProductPrice: FC<Props> = ({
  sale_price,
  regular_price,
  regular_price_class,
  sale_price_class,
}): JSX.Element => {
  return (
    <div>
      {sale_price ? (
        <>
          <span
            className={cn(
              "font-bold text-[11px] text-app-brown/70 mr-1",
              regular_price_class
            )}
          >
            <s>${regular_price}</s>
          </span>
          <span
            className={cn(
              "text-[12px] font-bold text-primary",
              sale_price_class
            )}
          >
            ${sale_price}
          </span>
        </>
      ) : (
        <span
          className={cn(
            "text-[12px] font-bold text-primary",
            regular_price_class
          )}
        >
          ${regular_price}
        </span>
      )}
    </div>
  );
};

export default ProductPrice;
