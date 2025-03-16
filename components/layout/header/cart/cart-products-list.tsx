import { Button } from "@/components/ui/button";
import useCartStore from "@/lib/stores/useCartStore";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX, useEffect } from "react";

const CartProductsList: FC = (): JSX.Element => {
  const { items, removeItem, updateQuantity } = useCartStore();

  // Xử lý hydration cho zustand persist trong NextJS
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col gap-y-2.5 rounded-2xl border border-app-lavender p-4"
            >
              <div className="flex flex-row gap-x-4">
                {item.image && (
                  <div className="relative h-24 w-24 flex-initial flex-shrink-0 overflow-hidden rounded-lg bg-light_pink md:rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="relative mb-4">
                    <h3>
                      <Link
                        className="mb-1 mt-0 pr-6 font-bold text-brown tracking-tight leading-snug text-sm"
                        href={`/products/${item.slug}`}
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <div className="mt-1 flex items-center justify-between gap-2 leading-none">
                      {item.is_beans && (
                        <div className="text-xs text-[#9e7e6d]">Beans</div>
                      )}

                      <div>
                        {item.regular_price !== item.price ? (
                          <>
                            <span className="text-[12px] text-brown font-bold mr-1">
                              ${item.price}
                            </span>
                            <span className="font-bold text-[12px] text-app-brown/70">
                              <s>${item.regular_price}</s>
                            </span>
                          </>
                        ) : (
                          <span className="text-[12px] font-bold text-primary">
                            ${item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="inline-flex flex-initial items-center justify-between rounded-full bg-light_pink p-0.5 text-center text-sm font-bold text-app-brown">
                      <button
                        className="rounded-full bg-white leading-none h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-brown">
                        {item.quantity}
                      </span>
                      <button
                        className="rounded-full bg-white leading-none h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="ml-4 text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-8 text-center text-brown">
          <h2 className="font-bold tracking-tight">
            Your cart is currently empty.
          </h2>

          <Button className="rounded-[12px] h-[49px] group p-0 mt-6">
            <Link
              className="flex gap-x-8 text-base w-full h-full items-center justify-between font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-3"
              href="/collections"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default CartProductsList;
