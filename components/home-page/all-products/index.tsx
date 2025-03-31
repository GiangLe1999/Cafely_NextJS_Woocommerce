"use client";

import StandardProductCard from "@/components/product-cards/standard-product-card";
import { cn } from "@/lib/utils";
import { HomeProduct } from "@/types/product";
import { FC, JSX, useState } from "react";

interface Props {
  bestsellers: HomeProduct[];
  whole_bean_coffee: HomeProduct[];
  whole_instant_coffee: HomeProduct[];
}

const AllProducts: FC<Props> = ({
  bestsellers,
  whole_bean_coffee,
  whole_instant_coffee,
}): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const products =
    selectedTab === 0
      ? bestsellers
      : selectedTab === 1
      ? whole_bean_coffee
      : whole_instant_coffee;

  const handleTabClick = (index: number) => {
    if (selectedTab !== index) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedTab(index);
        setIsAnimating(false);
      }, 300); // Thời gian cho animation ẩn
    }
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

          <div
            className={cn(
              "grid w-full grid-cols-2 gap-3 md:gap-4 content-start md:col-span-4 md:grid-cols-4",
              "transition-all duration-300 ease-in-out overflow-hidden",
              isAnimating
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
            )}
          >
            {products?.map((product, index) => (
              <StandardProductCard
                key={product.id}
                product={product}
                isBestseller={index === 0 && selectedTab === 0}
                isBestDeal={
                  product.attributes.find(
                    (attribute) => attribute.name === "is_best_deal"
                  )
                    ? true
                    : false
                }
                isStrongest={
                  product.attributes.find(
                    (attribute) => attribute.name === "is_strongest"
                  )
                    ? true
                    : false
                }
                isSale={
                  product.attributes.find(
                    (attribute) => attribute.name === "is_sale"
                  )
                    ? true
                    : false
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
