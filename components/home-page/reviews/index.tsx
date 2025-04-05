import Heading2 from "@/components/ui/heading-2";
import { FC, JSX } from "react";
import VideoBlock from "./video-block";
import { ReviewCarousel } from "./carousel";

const Reviews: FC = (): JSX.Element => {
  return (
    <div className="relative md:pt-12 md:pb-2 pt-9 pb-[6px]">
      <div className="container flex flex-col items-center">
        <Heading2 content="From Cafely Fans" />
        <div className="flex items-start w-full max-w-5xl snap-x snap-mandatory gap-4 mt-6 overflow-x-auto no-scrollbar md:mt-12 md:justify-center">
          <VideoBlock
            src="/videos/reviewer-1.mp4"
            thumbnail="/images/home/reviewer-1.jpg"
          />
          <VideoBlock
            src="/videos/reviewer-2.mp4"
            thumbnail="/images/home/reviewer-2.jpg"
          />
          <VideoBlock
            src="/videos/reviewer-3.mp4"
            thumbnail="/images/home/reviewer-3.jpg"
          />
          <VideoBlock
            src="/videos/reviewer-4.mp4"
            thumbnail="/images/home/reviewer-4.jpg"
          />
          <VideoBlock
            src="/videos/reviewer-5.mp4"
            thumbnail="/images/home/reviewer-5.jpg"
          />
        </div>
      </div>

      <div className="md:pt-12 pb-9">
        <div className="container flex flex-col text-center items-center">
          <div className="mt-6 w-full md:mt-8">
            <ReviewCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
