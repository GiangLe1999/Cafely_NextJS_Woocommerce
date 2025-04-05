import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating } from "@/components/ui/rating";
import { homePageReviews } from "@/constants";
import Image from "next/image";

export function ReviewCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-14"
    >
      <CarouselContent className="-ml-10">
        {homePageReviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 pl-10">
            <div className="flex items-center justify-center mb-4">
              <Rating
                value={review.rating}
                readonly
                activeFillColor="#FCB318"
              />
            </div>
            <div className="mb-2 text-sm leading-[1.25rem] font-bold line-clamp-2 min-h-10">
              {review.title}
            </div>
            <p className="leading-[1.4] text-[#89695c] text-[13px] font-medium line-clamp-4 text-center tracking-[-0.13px]">
              {review.desc}
            </p>
            <div className=" my-3 text-center leading-[1.4] text-[#9e7e6d] text-[12px]">
              {review.reviewer}
            </div>

            <div className="w-full min-h-20 grid place-items-center">
              <Image
                className="object-cover"
                src={review.img}
                alt={review.product}
                width={80}
                height={80}
              />
            </div>
            <div className="mx-auto w-fit max-w-full rounded-full bg-[#ff4a111a] px-3 py-1.5 text-[11px] leading-none text-primary">
              <p className="line-clamp-1">{review.product}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="bg-transparent border-none hover:bg-transparent -left-2 text-primary hover:text-primary/60 transition duration-400"
        iconClassName="!w-7 !h-7"
      />
      <CarouselNext
        className="bg-transparent border-none hover:bg-transparent -right-2 text-primary hover:text-primary/60 transition duration-400"
        iconClassName="!w-7 !h-7"
      />
    </Carousel>
  );
}
