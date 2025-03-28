"use client";

import { Progress } from "@/components/ui/progress";
import { FC, JSX, useState, useEffect } from "react";

const DURATION = 4000;
const INTERVAL = 200;

interface Props {
  isShowing: boolean;
  isShown: boolean;
  current: number;
}

const CarouselItemProgress: FC<Props> = ({
  isShowing,
  isShown,
  current,
}): JSX.Element => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isShowing) {
      if (!isShown) return;
      setValue(100);
      return;
    }

    let currentValue = 0; // Biến cục bộ để tránh lỗi state cập nhật chậm
    const interval = setInterval(() => {
      currentValue += (INTERVAL / DURATION) * 100; // Tính % tăng dần
      setValue(Math.min(currentValue, 100)); // Đảm bảo không vượt quá 100%

      if (currentValue >= 100) {
        setValue(100);
        clearInterval(interval); // Dừng interval khi đạt 100%
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [isShowing]);

  useEffect(() => {
    if (current === 0) setValue(0);
  }, [current]);

  return (
    <Progress
      value={value}
      className="w-full bg-white/25 h-[2px] rounded-none"
      indicatorColor="bg-white"
    />
  );
};

export default CarouselItemProgress;
