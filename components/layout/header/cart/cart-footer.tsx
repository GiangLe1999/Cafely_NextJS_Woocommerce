import { getAllProducts } from "@/actions/queries";
import { useQuery } from "@tanstack/react-query";
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
import useCartStore from "@/lib/stores/useCartStore";
import { Button } from "@/components/ui/button";
import LockIcon from "@/components/icons/lock";

const CartFooter: FC = (): JSX.Element => {
  const { totalItems, totalPrice } = useCartStore();

  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return (
    <>
      <div className="w-full px-4 pb-5 border-b">
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

      <div className="px-4 py-3">
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-1 justify-between">
            <p className="text-[#89695c] text-[13px] font-medium">Discount</p>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <p className="text-[#89695c] text-[13px] font-medium">
              Subtitle ({totalItems} items)
            </p>

            <p>{totalPrice}</p>
          </div>
        </div>

        <Button className="rounded-[12px] w-full bg-primary text-white h-12 text-base font-bold">
          <LockIcon className="!w-[13] !h-[15px] mt-[-1px]" /> Secure Checkout
        </Button>

        <div className="mt-2 text-center text-2xs text-app-brown md:text-xs font-medium">
          <span>Taxes are calculated at checkout.</span>
        </div>
      </div>
    </>
  );
};

export default CartFooter;
