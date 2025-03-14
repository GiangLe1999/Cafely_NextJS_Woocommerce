import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const ppSans = localFont({
  src: [
    {
      path: "../public/fonts/PP-Sans.woff2",
    },
  ],
  display: "swap",
  variable: "--font-pp-sans",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(openSans.className, ppSans.variable, "antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
