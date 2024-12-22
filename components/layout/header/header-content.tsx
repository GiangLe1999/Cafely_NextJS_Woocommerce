"use client";

import { usePathname } from "next/navigation";
import { FC, JSX, useEffect, useState } from "react";
import Menu from "./menu";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";

interface Props {
  categories: Category[];
}

const HeaderContent: FC<Props> = ({ categories }): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        setIsScrolled(window.scrollY > 0);
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  return (
    <header
      className={cn(
        isScrolled
          ? "border-border bg-white"
          : "border-transparent bg-transparent",
        "fixed top-0 left-0 z-10 w-full duration-500 block border-b"
      )}
    >
      <div
        id="header-content"
        className="container relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 py-3"
      >
        {/* <div className="flex items-center gap-6 lg:hidden">test</div> */}

        <div className="hidden lg:block">
          <Menu isScrolled={isScrolled} categories={categories} />
        </div>

        <Logo />
      </div>
    </header>
  );
};

export default HeaderContent;
