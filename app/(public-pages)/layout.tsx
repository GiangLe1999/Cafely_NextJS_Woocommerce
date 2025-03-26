import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PublicPagesLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container mt-[70px] pt-[32px] pb-[72px]">{children}</div>
      <Footer />
    </>
  );
};

export default PublicPagesLayout;
