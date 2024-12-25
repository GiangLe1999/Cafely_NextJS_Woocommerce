"use client";

import { usePathname } from "next/navigation";
import { FC, JSX, useEffect, useState } from "react";
import Menu from "./menu";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import Link from "next/link";
import Search from "./search";
import { Product } from "@/types/product";

interface Props {
  categories: Category[];
  threeBestSellers: Product[];
}

const HeaderContent: FC<Props> = ({
  categories,
  threeBestSellers,
}): JSX.Element => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);

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

  const updateMenuWidth = () => {
    const headerContent = document.querySelector("#header-content");
    if (headerContent) {
      const computedStyle = getComputedStyle(headerContent);
      const paddingLeft = parseFloat(computedStyle.paddingLeft || "0");
      const paddingRight = parseFloat(computedStyle.paddingRight || "0");

      const widthWithoutPadding =
        headerContent.clientWidth - paddingLeft - paddingRight;

      setMenuWidth(widthWithoutPadding);
    }
  };

  useEffect(() => {
    updateMenuWidth();

    window.addEventListener("resize", updateMenuWidth);

    return () => {
      window.removeEventListener("resize", updateMenuWidth);
    };
  }, []);

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

        {/* Right side */}
        <div className="hidden lg:block">
          <ul
            role="list"
            className="flex flex-row items-center gap-11 text-sm font-semibold"
          >
            <li>
              <Menu
                isScrolled={isScrolled}
                categories={categories}
                menuWidth={menuWidth}
              />
            </li>

            <li>
              <Link href="/pages/about-us" className="text-primary">
                About
              </Link>
            </li>
          </ul>
        </div>

        <Logo />

        {/* Left side */}
        <div className="relative flex items-center justify-end gap-x-6">
          <Link
            href="/account/login"
            className="text-primary text-sm font-semibold"
          >
            Log In
          </Link>

          <Search menuWidth={menuWidth} threeBestSellers={threeBestSellers} />
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
