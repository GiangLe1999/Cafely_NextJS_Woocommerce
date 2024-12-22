import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";

const Logo: FC = (): JSX.Element => {
  return (
    <Link href="/" className="block">
      <Image src="/logo.svg" alt="Cafely logo" width={110} height={31.92} />
    </Link>
  );
};

export default Logo;
