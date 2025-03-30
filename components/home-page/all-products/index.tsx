"use client";

import StandardProductCard from "@/components/product-cards/standard-product-card";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { FC, JSX, useState } from "react";

interface Props {
  bestsellers: Product[];
  whole_bean_coffee: Product[];
  whole_instant_coffee: Product[];
}

const AllProducts: FC<Props> = ({
  bestsellers,
  whole_bean_coffee,
  whole_instant_coffee,
}): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);

  const products =
    selectedTab === 0
      ? bestsellers
      : selectedTab === 1
      ? whole_bean_coffee
      : whole_instant_coffee;

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="pt-5 pb-12">
      <div className="container flex flex-col gap-y-8 lg:gap-y-12 text-center items-center">
        <div className="flex flex-col">
          <h2 className="text-primary font-pp_sans leading-[1.1] text-[72px] mt-[50px] mb-9 uppercase tracking-[-1.44px]">
            Shop Our Best Sellers
          </h2>
          <div className="text-primary md:text-lg max-w-[640px] font-medium">
            <p>
              Explore our premium selection of bold coffees, crafted to fuel
              your daily hustle, focusing on a healthy body and strong mind.{" "}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center">
          <div className="mb-6 flex flex-nowrap gap-2 overflow-x-auto md:gap-4 lg:mb-8 text-[15px] font-semibold">
            <button
              className={cn(
                "px-6 py-[14px] rounded-[14px] transition duration-400",
                selectedTab === 0
                  ? "text-primary bg-light_pink"
                  : "text-brown bg-transparent"
              )}
              onClick={() => handleTabClick(0)}
            >
              🔥 Bestsellers
            </button>
            <button
              className={cn(
                "px-6 py-[14px] rounded-[14px] transition duration-400",
                selectedTab === 1
                  ? "text-primary bg-light_pink"
                  : "text-brown bg-transparent"
              )}
              onClick={() => handleTabClick(1)}
            >
              Coffee Beans
            </button>
            <button
              className={cn(
                "px-6 py-[14px] rounded-[14px] transition duration-400",
                selectedTab === 2
                  ? "text-primary bg-light_pink"
                  : "text-brown bg-transparent"
              )}
              onClick={() => handleTabClick(2)}
            >
              Instant Coffee
            </button>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 md:gap-4 content-start md:col-span-4 md:grid-cols-4">
            {products?.map((product) => (
              <StandardProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
