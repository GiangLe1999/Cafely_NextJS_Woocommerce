import { FC, JSX } from "react";
import HeaderContent from "./header-content";
import { getAllCategories } from "@/actions/queries";

const Header: FC = async (): Promise<JSX.Element> => {
  const categories = await getAllCategories();

  return <HeaderContent categories={categories} />;
};

export default Header;
