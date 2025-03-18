import { FC, JSX } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/product";
import CartFooterProductCard from "../../../product-cards/cart-footer-product-card";
import { getAllProducts } from "@/actions/queries";
import { useQuery } from "@tanstack/react-query";

const CartFooterCarousel: FC = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return (
    <div className="w-full px-4 pb-5">
      <h4 className="text-xs font-bold text-light_brown mb-4">
        Complete coffee routine
      </h4>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {isLoading ? (
            <>
              <CarouselItem className="basis-1/2 h-[96px] mr-3 animate-pulse bg-light_pink rounded-2xl"></CarouselItem>
              <CarouselItem className="basis-1/2 h-[96px] animate-pulse bg-light_pink rounded-2xl"></CarouselItem>
            </>
          ) : (
            <>
              {Array.isArray(data) &&
                data.map((product: Product, index: number) => (
                  <CarouselItem key={index} className="basis-1/2">
                    <CartFooterProductCard product={product} />
                  </CarouselItem>
                ))}
            </>
          )}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[88%] -top-6 bg-light_pink disabled:opacity-50 border-none text-primary w-6 h-6 transition-all duration-400 hover:bg-light_pink hover:text-primary" />
        <CarouselNext className="absolute right-0 -top-6 bg-light_pink disabled:opacity-50 border-none text-primary w-6 h-6 transition-all duration-400 hover:bg-light_pink hover:text-primary" />
      </Carousel>
    </div>
  );
};

export default CartFooterCarousel;
