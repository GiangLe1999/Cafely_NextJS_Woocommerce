"use client";

import PlayIcon from "@/components/icons/play";
import Image from "next/image";
import { FC, JSX, useRef, useState } from "react";

interface Props {
  src: string;
  thumbnail: string;
}

const VideoBlock: FC<Props> = ({ src, thumbnail }): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused || video.ended) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      onClick={handlePlay}
      className="relative aspect-[9/16] w-full max-w-64 shrink-0 overflow-hidden rounded-[8px] snap-start md:shrink md:rounded-xl md:basis-full basis-3/5 cursor-pointer"
    >
      {/* Thumbnail + Play Icon */}
      {!isPlaying && (
        <div className="video-cover absolute z-[2] size-full">
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          <PlayIcon className="absolute inline-block text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 size-10" />
        </div>
      )}

      {/* Video */}
      <div className="absolute left-0 top-0 z-[1] size-full">
        <video
          ref={videoRef}
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
          poster={thumbnail}
        >
          <source src={src} />
        </video>
      </div>
    </div>
  );
};

export default VideoBlock;
