import { Product } from "@/types/product";
import { SearchedProduct } from "@/types/searched-results";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";
import { Rating } from "../ui/rating";
import ProductPrice from "./product-price";

interface Props {
  product: SearchedProduct | Product;
}

const SearchedPostCard: FC<Props> = ({ product }): JSX.Element => {
  const imageUrl =
    "image" in product ? product.image : product.images?.[0]?.src || "";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="h-full group relative flex flex-col gap-y-4 rounded-3xl border border-app-lavender p-2 transition-all duration-500 hover:border-transparent hover:bg-light_pink md:gap-y-5"
    >
      <div className="relative w-full overflow-hidden rounded-2xl bg-light_pink md:aspect-[4/3.2]">
        <Image
          src={imageUrl}
          alt={product.name}
          fill={true}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pb-3 text-left">
        <div className="flex items-center mb-3">
          <div className="mr-1.5 mt-[1px] text-xs md:text-[13.5px] font-bold text-app-brown">
            {product.average_rating}
          </div>
          <div className="flex-1">
            <Rating value={parseFloat(product.average_rating) || 0} readonly />
          </div>
        </div>

        <h2 className="text-[15px] text-primary font-bold leading-snug tracking-tight line-clamp-2">
          {product.name}
        </h2>

        <div className="mt-4 flex flex-grow flex-col justify-end">
          <ProductPrice
            sale_price={product?.sale_price}
            regular_price={product?.regular_price}
          />
        </div>
      </div>
    </Link>
  );
};

export default SearchedPostCard;
