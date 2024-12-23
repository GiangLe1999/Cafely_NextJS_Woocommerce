import { FC, JSX } from "react";
import HeaderContent from "./header-content";
import { get3BestSellers, getAllCategories } from "@/actions/queries";

const Header: FC = async (): Promise<JSX.Element> => {
  const [categories, threeBestSellers] = await Promise.all([
    getAllCategories(),
    get3BestSellers(),
  ]);

  return (
    <HeaderContent
      categories={categories}
      threeBestSellers={threeBestSellers}
    />
  );
};

export default Header;
