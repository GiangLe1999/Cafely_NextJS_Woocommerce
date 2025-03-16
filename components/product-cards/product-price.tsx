import { FC, JSX } from "react";

interface Props {
  sale_price?: string;
  regular_price: string;
}

const ProductPrice: FC<Props> = ({
  sale_price,
  regular_price,
}): JSX.Element => {
  return (
    <div>
      {sale_price ? (
        <>
          <span className="font-bold text-[11px] text-app-brown/70 mr-1">
            <s>${regular_price}</s>
          </span>
          <span className="text-[12px] font-bold text-primary">
            ${sale_price}
          </span>
        </>
      ) : (
        <span className="text-[12px] font-bold text-primary">
          ${regular_price}
        </span>
      )}
    </div>
  );
};

export default ProductPrice;
