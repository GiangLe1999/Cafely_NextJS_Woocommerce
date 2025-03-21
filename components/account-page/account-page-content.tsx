"use client";
import { useSession, signOut } from "next-auth/react";

export default function AccountPageContent() {
  const { data: session } = useSession();
  console.log(session);

  // if (status === "loading") return <p>Đang tải...</p>;
  // if (!session) {
  //   router.push("/login");
  //   return null;
  // }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chào, {session?.user?.first_name}</h1>
      <p>Email: {session?.user?.email}</p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => signOut()}
      >
        Đăng xuất
      </button>
    </div>
  );
}
