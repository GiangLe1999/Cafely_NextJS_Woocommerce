import { FC, JSX } from "react";
import HeaderContent from "./header-content";
import { get3BestSellers, getAllCategories } from "@/actions/queries";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

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
