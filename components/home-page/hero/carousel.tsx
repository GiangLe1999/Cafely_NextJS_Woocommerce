"use client";

import { useState, useEffect, FC } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { homePageHeroBanners } from "@/constants";
import Fade from "embla-carousel-fade";
import CarouselItemProgress from "./carousel-item-progress";

const DELAY_TIME = 4000;

const HeroCarousel: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Use selectedScrollSnap() to get the current slide index
    setCurrent(api.selectedScrollSnap());

    // Optional: Add a listener to update current slide when it changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Clean up the listener when component unmounts
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Fade({
            active: true,
          }),
          Autoplay({
            delay: DELAY_TIME,
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent>
          {homePageHeroBanners.map((src, index) => (
            <CarouselItem
              className="relative w-full aspect-[4/3.35]"
              key={`Hero banner ${index}`}
            >
              <Image
                src={src}
                alt={`Hero banner ${index}`}
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-md block"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute left-0 right-0 top-4 flex items-center gap-x-2 px-6">
        <CarouselItemProgress
          isShowing={current === 0}
          isShown={current > 0}
          current={current}
        />
        <CarouselItemProgress
          isShowing={current === 1}
          isShown={current > 1}
          current={current}
        />
        <CarouselItemProgress
          isShowing={current === 2}
          isShown={current > 2}
          current={current}
        />
        <CarouselItemProgress
          isShowing={current === 3}
          isShown={current > 3}
          current={current}
        />
      </div>
    </>
  );
};

export default HeroCarousel;

{
  /* <div className="absolute bottom-9 left-10 grid grid-cols-5 right-10 gap-x-[27px]">
        <ProgressResetProvider>
          {[...Array(count)].map((_, index) => (
            <CountDownProgress
              key={index}
              index={index}
              api={api}
              selected={current}
              count={count}
              setCurrent={setCurrent}
            />
          ))}
        </ProgressResetProvider>
      </div> */
}
