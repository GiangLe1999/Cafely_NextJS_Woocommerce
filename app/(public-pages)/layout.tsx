import Header from "@/components/layout/header";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PublicPagesLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main className="h-[2000px]">{children}</main>
    </>
  );
};

export default PublicPagesLayout;
