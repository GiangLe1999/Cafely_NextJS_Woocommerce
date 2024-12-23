import { FC, JSX, useEffect, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
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

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const results = await getSearchResults(debouncedKeyword);

        setResults(results); // Lưu kết quả
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResults();
  }, [debouncedKeyword]);

  return (
    <Popover>
      <PopoverTrigger>
        <SearchIcon className="w-[22px] h-[22px] text-primary" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
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

        <div className="mt-7 grid grid-cols-1 gap-8 px-4 md:mt-6 md:grid-cols-[.5fr,1fr] md:px-0 lg:grid-cols-[.65fr,1fr]">
          {/* Trending keywords */}
          <div>
            <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
              Trending
            </h2>
          </div>

          <div>
            <h2 className="mb-[1.25rem] text-[0.6875rem] font-bold uppercase tracking-wider text-[#9e7e6d]">
              Bestsellers
            </h2>

            {results.posts?.length > 0 ? (
              <></>
            ) : (
              <div className="products-grid grid w-full grid-cols-2 content-start gap-3 md:grid-cols-3">
                {threeBestSellers &&
                  threeBestSellers.length > 0 &&
                  threeBestSellers.map((product) => (
                    <SearchedProductCard key={product.id} product={product} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Search;
