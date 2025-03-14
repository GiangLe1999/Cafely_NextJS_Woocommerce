"use client";

import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Menu from "./menu";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import Link from "next/link";
import Search from "./search";
import { Product } from "@/types/product";
import { ChevronDown, SearchIcon } from "lucide-react";
import Cart from "./cart";

interface Props {
  categories: Category[];
  threeBestSellers: Product[];
}

const HeaderContent: FC<Props> = ({ categories, threeBestSellers }) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomepage);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!isHomepage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page is loaded when already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomepage]);

  const getTextColor = () => {
    if (isHomepage) {
      return isScrolled ? "text-primary" : "text-brown";
    }
    return "text-primary";
  };

  const getBadgeTextColor = () => {
    if (isHomepage) {
      return isScrolled ? "text-brown" : "text-white";
    }
    return "text-brown";
  };

  const getBadgeBackgroundColor = () => {
    if (isHomepage) {
      return isScrolled ? "bg-secondary" : "bg-primary";
    }
    return "bg-secondary";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full duration-500 block border-b z-50",
        isScrolled
          ? "border-border bg-white"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        id="header-content"
        className="container relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 py-3"
      >
        {/* Left side menu */}
        <div className="hidden lg:block">
          <ul role="list" className="flex flex-row items-center gap-11 text-sm">
            <li
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <div
                className={cn(
                  "cursor-pointer h-[41px] font-semibold group hover:text-foreground w-fit flex items-center rounded-full px-3.5 py-2 text-sm transition duration-400",
                  isScrolled
                    ? "bg-secondary"
                    : isHomepage
                    ? "bg-[#FFF6D9]"
                    : "bg-[#FFF4FE] hover:bg-[#FFF4FE]"
                )}
              >
                Shop
                <ChevronDown className="w-4 h-4 ml-3 group-hover:rotate-180 duration-150 shrink-0" />
              </div>
              <Menu categories={categories} showMenu={showMenu} />
            </li>

            <li>
              <Link
                href="/pages/about-us"
                className={cn(
                  "font-semibold transition-color duration-400",
                  getTextColor()
                )}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Logo className={isScrolled ? "text-primary" : ""} />

        {/* Right side */}
        <div className="flex items-center justify-end gap-x-6">
          <Link
            href="/account/login"
            className={cn(
              "font-semibold transition-color duration-400 text-sm",
              getTextColor()
            )}
          >
            Log In
          </Link>

          <button aria-label="Search">
            <SearchIcon
              className={cn(
                "w-[21px] h-[21px] transition-colors duration-400",
                getTextColor()
              )}
              onClick={() => setShowSearchResults(!showSearchResults)}
            />

            <Search
              threeBestSellers={threeBestSellers}
              showSearchResults={showSearchResults}
              setShowSearchResults={setShowSearchResults}
            />
          </button>

          <Cart
            getTextColor={getTextColor}
            getBadgeTextColor={getBadgeTextColor}
            getBadgeBackgroundColor={getBadgeBackgroundColor}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
