import { Product, ProductAttribute } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX, useMemo, useCallback } from "react";
import ProductPrice from "./product-price";
import { Button } from "../ui/button";
import useCartStore from "@/lib/stores/useCartStore";

interface Props {
  product: Product;
}

const CartFooterProductCard: FC<Props> = ({ product }): JSX.Element => {
  const { addItem } = useCartStore();

  // Memoize is_beans to prevent unnecessary recalculations
  const is_beans = useMemo(() => {
    return (
      product?.attributes?.find((a: ProductAttribute) => a.name === "is_beans")
        ?.options?.[0] === "true"
    );
  }, [product]);

  // Memoize handleAddToCart to prevent unnecessary re-renders
  const handleAddToCart = useCallback(() => {
    addItem({
      id: product.id,
      name: product.name,
      regular_price: parseFloat(product.regular_price),
      price: parseFloat(product?.sale_price || product.regular_price),
      is_beans,
      slug: product.slug,
      quantity: 1,
      image: product.images?.[0]?.src ?? "",
    });
  }, [product, addItem, is_beans]);

  return (
    <div className="flex h-full items-center gap-3 rounded-2xl border border-app-lavender p-2 sm:gap-4">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="w-[64px] shrink-0 relative aspect-square">
          <Image
            src={product.images?.[0]?.src ?? "/placeholder.png"}
            alt={product.name ?? "Product Image"}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between gap-1">
          <div className="flex-grow">
            <Link href={`/products/${product.slug}`}>
              <p className="text-primary text-[13px] font-bold leading-4 line-clamp-2">
                {product.name}
              </p>
            </Link>
            <p className="mt-[2px] text-2xs leading-none text-[#89695c] sm:text-xs font-medium min-h-[16px]">
              {is_beans ? "Beans" : ""}
            </p>
          </div>

          {/* Price & Add to Cart Button */}
          <div className="flex items-center justify-between">
            <ProductPrice
              sale_price={product?.sale_price}
              regular_price={product?.regular_price}
            />

            <Button
              onClick={handleAddToCart}
              className="w-fit font-bold bg-primary text-white text-xs px-2 py-1 h-fit hover:translate-y-[1px] transition-all"
            >
              ADD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFooterProductCard;
