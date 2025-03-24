import { FC, JSX } from "react";
import HeaderContent from "./header-content";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { get3BestSellers } from "@/queries/product.query";
import { getAllCategories } from "@/queries/category.query";

const Header: FC = async (): Promise<JSX.Element> => {
  const [categories, threeBestSellers, session] = await Promise.all([
    getAllCategories(),
    get3BestSellers(),
    getServerSession(authOptions),
  ]);

  return (
    <HeaderContent
      categories={categories}
      threeBestSellers={threeBestSellers}
      session={session}
    />
  );
};

export default Header;
