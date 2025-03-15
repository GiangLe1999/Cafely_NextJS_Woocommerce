import { FC, JSX, useEffect, useState, useRef } from "react";
import { ArrowRight, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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
  threeBestSellers: Product[];
  showSearchResults: boolean;
  setShowSearchResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: FC<Props> = ({
  threeBestSellers,
  showSearchResults,
  setShowSearchResults,
}): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 500);
  const [results, setResults] = useState<{
    products: SearchedProduct[];
    posts: SearchedPost[];
  }>({ products: [], posts: [] });
  const [isFetching, setIsFetching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Nếu click vào search-icon, không làm gì cả
      if ((event.target as HTMLElement).id === "search-icon") {
        return;
      }

      // Nếu click ra ngoài searchRef thì ẩn kết quả tìm kiếm
      if (searchRef.current && !searchRef.current.contains(target)) {
        setShowSearchResults(false);
      }
    };

    if (showSearchResults) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchResults, setShowSearchResults]);

  // Fetch search results when keyword changes
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
        setResults({ products: [], posts: [] });
      } finally {
        setIsFetching(false);
      }
    };

    fetchResults();
  }, [debouncedKeyword]);

  // Clear search when component unmounts or is hidden
  useEffect(() => {
    if (!showSearchResults) {
      setKeyword("");
    }
  }, [showSearchResults]);

  const handleClearSearch = () => {
    setKeyword("");
  };

  const renderSkeletons = () => (
    <ul className="flex max-h-96 md:max-h-none auto-cols-[minmax(200px,1fr)] grid-flow-col grid-cols-[repeat(auto-fill,minmax(200px,1fr))] flex-col content-start gap-3 px-4 md:grid md:overflow-x-auto md:px-0 md:pb-4 overflow-y-auto">
      {[1, 2, 3, 4, 5].map((_, idx) => (
        <li
          key={idx}
          className="w-full shrink-0 md:h-[325px] h-[71px] animate-pulse bg-light_pink rounded-2xl"
        />
      ))}
    </ul>
  );

  const renderSearchResults = () => {
    if (isFetching) {
      return (
        <div className="z-[9] flex flex-col overflow-hidden pt-5">
          {renderSkeletons()}
        </div>
      );
    }

    if (results?.products?.length || results?.posts?.length) {
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
                href={`/search?q=${encodeURIComponent(keyword)}`}
                className="flex w-full h-full items-center justify-between gap-1 font-bold text-foreground group-hover:text-white transition duration-500 px-6 py-[14px]"
                onClick={() => setShowSearchResults(false)}
              >
                Show All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    if (debouncedKeyword) {
      return (
        <div className="search-results z-[9] flex max-h-96 flex-col overflow-hidden pt-5 empty:hidden md:max-h-none">
          <h2 className="my-0 text-center text-sm font-bold leading-normal tracking-tight md:text-base px-4 md:px-0 text-foreground">
            Sorry! No results found.
          </h2>
        </div>
      );
    }

    return renderInitialState();
  };

  const renderInitialState = () => (
    <div className="mt-7 grid grid-cols-1 gap-8 px-4 md:mt-6 md:grid-cols-[.5fr,1fr] md:px-0 lg:grid-cols-[.65fr,1fr]">
      <div>
        <h2 className="mb-[1.25rem] text-xs font-bold uppercase tracking-wider text-light_brown text-left">
          Trending
        </h2>
      </div>
      <div>
        <h2 className="mb-[1.25rem] text-xs font-bold uppercase tracking-wider text-light_brown text-left">
          Bestsellers
        </h2>
        <div className="products-grid grid w-full grid-cols-2 content-start gap-3 md:grid-cols-3">
          {Array.isArray(threeBestSellers) &&
            threeBestSellers.map((product) => (
              <SearchedProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={searchRef}
      className={cn(
        "absolute top-full left-0 right-0 container origin-top transition duration-400 z-[100]",
        showSearchResults ? "scale-3d-1" : "scale-3d-0"
      )}
    >
      <div className="mt-2 bg-white border border-app-lavender py-8 px-10 gap-4 rounded-2xl">
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
          />
          {keyword && (
            <button
              onClick={handleClearSearch}
              className="bg-light_pink w-8 h-8 grid place-items-center rounded-[8px] absolute top-1/2 -translate-y-1/2 right-1.5 text-foreground"
              aria-label="Clear search"
            >
              <XIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        {renderSearchResults()}
      </div>
    </div>
  );
};

export default Search;
