import { FC, JSX, useEffect, useState } from "react";
import { ArrowRight, SearchIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebouce";
import { getSearchResults } from "@/actions/queries";
import { SearchedPost, SearchedProduct } from "@/types/searched-results";
import { Product } from "@/types/product";
import SearchedProductCard from "@/components/product-cards/searched-product-card";
import SearchedPostCard from "@/components/post-cards/searched-post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  menuWidth: number;
  threeBestSellers: Product[];
}

const Search: FC<Props> = ({ menuWidth, threeBestSellers }): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 500);
  const [results, setResults] = useState<{
    products: SearchedProduct[];
    posts: SearchedPost[];
  }>({ products: [], posts: [] });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedKeyword) {
        setResults({ products: [], posts: [] });
        return;
      }
      try {
        setIsFetching(true);
        const results = await getSearchResults(debouncedKeyword);
        setResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchResults();
  }, [debouncedKeyword]);

  const renderResults = () => {
    // Nếu đang fetch kết quả
    if (isFetching) {
      return (
        <div className="z-[9] flex flex-col overflow-hidden pt-5">
          <ul className="flex max-h-96 md:max-h-none auto-cols-[minmax(200px,1fr)] grid-flow-col grid-cols-[repeat(auto-fill,minmax(200px,1fr))] flex-col content-start gap-3 px-4 md:grid md:overflow-x-auto md:px-0 md:pb-4 overflow-y-auto">
            {Array.from({ length: 10 }).map((_, idx) => (
              <li
                key={idx}
                className="w-full shrink-0 md:h-[325px] h-[71px] animate-pulse bg-app-light-pink rounded-2xl"
              />
            ))}
          </ul>
        </div>
      );
    }

    // Nếu tìm thấy kết quả trả về thích hợp
    if (results.products.length || results.posts.length) {
      return (
        <div className="z-[9] flex max-h-96 flex-col overflow-hidden pt-5 empty:hidden md:max-h-none">
          <ul
            role="listbox"
            className="flex auto-cols-[minmax(200px,1fr)] grid-flow-col grid-cols-[repeat(auto-fill,minmax(200px,1fr))] flex-col content-start gap-3 px-4 [scrollbar-gutter:stable] md:grid md:overflow-x-auto md:px-0 md:pb-4 overflow-y-auto"
          >
            {results.products.map((product) => (
              <li key={product.id}>
                <SearchedProductCard product={product} />
              </li>
            ))}
            {results.posts.map((post) => (
              <li key={post.id}>
                <SearchedPostCard post={post} />
              </li>
            ))}
          </ul>
          <div className="mt-3 px-4 text-center md:px-0">
            <Button className="w-[170px] h-[42px] group p-0">
              <Link
                href={`/search?q=${keyword}`}
                className="flex w-full h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-[14px]"
              >
                Show All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    // Nếu không tìm thấy kết quả nào thích hợp
    if (debouncedKeyword) {
      return (
        <div className="search-results z-[9] flex max-h-96 flex-col overflow-hidden pt-5 empty:hidden md:max-h-none">
          <h2 className="my-0 text-center text-sm font-bold leading-normal tracking-tight md:text-base px-4 md:px-0 text-foreground">
            Sorry! No results found.
          </h2>
        </div>
      );
    }

    // Trạng thái ban đầu
    return (
      <div className="mt-7 grid grid-cols-1 gap-8 px-4 md:mt-6 md:grid-cols-[.5fr,1fr] md:px-0 lg:grid-cols-[.65fr,1fr]">
        <div>
          <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
            Trending
          </h2>
        </div>
        <div>
          <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
            Bestsellers
          </h2>
          <div className="products-grid grid w-full grid-cols-2 content-start gap-3 md:grid-cols-3">
            {threeBestSellers.map((product) => (
              <SearchedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <SearchIcon className="w-[22px] h-[22px] text-primary" />
      </PopoverTrigger>
      <PopoverContent
        className="z-[100] mt-[22px] origin-top-right bg-white border border-app-lavender py-8 px-10 h-full gap-4 rounded-2xl mx-auto shadow-none"
        style={{ width: menuWidth }}
      >
        <div
          className={cn(
            "pr-10 relative w-full rounded-[8px] h-11 border-2 transition duration-500",
            isFocused ? "border-foreground" : ""
          )}
        >
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search"
            className="placeholder:text-base md:text-base h-full rounded-[8px] !outline-none !border-none"
            autoFocus
          />
          <button
            onClick={() => setKeyword("")}
            className="bg-app-light-pink w-8 h-8 grid place-items-center rounded-[8px] absolute top-1/2 -translate-y-1/2 right-1.5 text-foreground"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        {renderResults()}
      </PopoverContent>
    </Popover>
  );
};

export default Search;
