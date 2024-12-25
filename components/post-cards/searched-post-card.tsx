import { SearchedPost } from "@/types/searched-results";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";

interface Props {
  post: SearchedPost;
}

const SearchedProductCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="h-full group relative flex flex-col gap-y-4 rounded-3xl border border-app-lavender p-2 transition-all duration-500 hover:border-transparent hover:bg-app-light-pink md:gap-y-5"
    >
      <div className="relative w-full overflow-hidden rounded-2xl bg-app-light-pink md:aspect-[4/3.2]">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill={true}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-1 flex-col text-left md:px-2 md:pb-3">
        <h2 className="my-0 line-clamp-2 text-[13px] font-extrabold leading-snug tracking-tight text-primary md:text-[15px]">
          {post.title}
        </h2>

        <div className="mt-4 hidden md:flex md:flex-col md:justify-end md:flex-grow">
          <p className="line-clamp-3 text-[13px] text-[#8c726c]">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchedProductCard;
