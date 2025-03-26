import { FC, JSX } from "react";
import FooterContent from "./footer-content";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="border-t">
      <div className="container py-6 lg:py-10">
        <FooterContent />
      </div>
    </footer>
  );
};

export default Footer;
