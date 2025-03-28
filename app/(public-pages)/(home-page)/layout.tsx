import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HomePageLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
