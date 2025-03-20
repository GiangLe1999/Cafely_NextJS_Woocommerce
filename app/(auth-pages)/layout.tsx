import Header from "@/components/layout/header";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC, JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthPagesLayout: FC<Props> = async ({
  children,
}): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <>
      <Header />
      <div className="container mt-[70px] pt-[32px] pb-[72px]">{children}</div>
    </>
  );
};

export default AuthPagesLayout;
