import { HomeProduct } from "@/types/product";
import { FC, JSX } from "react";
import { Rating } from "@/components/ui/rating";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/product-cards/product-price";
import { Button } from "../ui/button";

interface Props {
  product: HomeProduct;
}

const StandardProductCard: FC<Props> = ({ product }): JSX.Element => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="bg-light_pink h-full group relative flex flex-col gap-y-4 rounded-3xl border border-transparent p-2 transition-all duration-500 hover:border-transparent hover:bg-white hover:border-app-lavender md:gap-y-5"
    >
      <div className="relative w-full overflow-hidden rounded-2xl md:aspect-[4/3.2]">
        {/* Ảnh thumbnail (hiển thị mặc định) */}
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill={true}
          className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          sizes="100vw"
        />

        {/* Ảnh gallery (hiển thị khi hover) */}
        <Image
          src={product.first_gallery_image || product.thumbnail} // Fallback nếu không có gallery image
          alt={`${product.name} hover`}
          fill={true}
          className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 text-left xs:px-3 lg:px-4.5 pb-3 md:pb-4">
        <div className="flex items-center text-primary mb-3">
          <div className="flex items-center">
            <div className="mr-1.5 mt-1 text-xs font-bold text-app-brown md:text-[13px]">
              {parseFloat(product.average_rating).toFixed(2)}
            </div>
            <div className="flex-1">
              <Rating
                value={parseFloat(product.average_rating) || 0}
                readonly
              />
            </div>
          </div>
        </div>

        <h2 className="tracking-[-0.18px] md:text-lg mb-3 mt-0 text-[13px] font-bold capitalize leading-snug text-primary line-clamp-2 md:min-h-[56px] min-h-[35.75px]">
          {product.name}
        </h2>

        <p className="line-clamp-2 overflow-hidden text-ellipsis text-[13px] tracking-[-.015rem] text-[#8c726c] md:text-sm font-medium">
          {product.short_description}
        </p>

        <div className="mt-4 flex flex-grow flex-col justify-end">
          <ProductPrice
            sale_price={product?.sale_price}
            regular_price={product?.regular_price}
            regular_price_class="md:text-[13px] text-[12px] font-extrabold text-[#8c726cb3]"
            sale_price_class="md:text-[13px] text-[12px] font-extrabold"
          />

          <div className="mt-5">
            <Button className="w-full font-bold h-12 md:text-base text-sm">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StandardProductCard;
