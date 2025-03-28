"use client";

import { FC, JSX } from "react";
import SubscribeForm from "./subscribe-form";
import Link from "next/link";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import YoutubeIcon from "@/components/icons/youtube";
import GlassIcon from "@/components/icons/glass";
import AmericanExpressIcon from "@/components/icons/american-express";
import ApplePayIcon from "@/components/icons/apple-pay";
import DinersClubIcon from "@/components/icons/diners-club";
import DiscoverIcon from "@/components/icons/discover";
import GooglePayIcon from "@/components/icons/google-pay";
import MasterCardIcon from "@/components/icons/mastercard";
import ShopPayIcon from "@/components/icons/shop-pay";
import VisaIcon from "@/components/icons/visa";
import { usePathname } from "next/navigation";

const footerLinkClassnames =
  "relative after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-foreground after:duration-400 after:ease-in-out hover:after:w-full after:transition-all after:bg-primary";

const Footer: FC = (): JSX.Element => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={isHome ? "" : "border-t border-app-lavender"}>
      <div className="container py-6 lg:py-10">
        <div className="flex flex-row flex-wrap rounded-[20px] bg-light_pink px-4 pb-6 pt-8 sm:px-6 md:px-8 lg:gap-x-4 lg:gap-y-24 lg:rounded-[28px] lg:px-10 lg:pb-8 lg:pt-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-[380px_auto] lg:gap-x-14 lg:gap-y-8 xl:gap-x-36">
            {/* Block 1 */}
            <div className="flex flex-col gap-y-6 lg:gap-y-10">
              <div>
                <h2 className="mt-0 mb-5 font-pp_sans text-5xl text-primary uppercase">
                  Sip, Savor, Subscribe.
                </h2>

                <SubscribeForm />

                <p className="text-primary text-[13px] font-medium mt-5">
                  <b>Don&apos;t miss a drop!</b> Sign up to Club Cafely to
                  receive personalized offers and coffee wisdom directly to your
                  inbox.
                </p>
              </div>

              <div className="flex flex-row gap-6">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FacebookIcon className="h-5 w-[21px] text-primary" />
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <InstagramIcon className="h-5 w-5 text-primary" />
                </Link>

                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <YoutubeIcon className="h-5 w-6 text-primary" />
                </Link>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-x-1 md:grid md:grid-cols-3">
              {/* Block 2.1 */}
              <div className="flex-auto pt-5 mt-5 border-t border-t-app-lavender/50 lg:mt-0 lg:border-t-0 lg:pt-0">
                <div className="mb-4 text-[12px] text-primary font-bold md:mb-5">
                  SHOP
                </div>
                <ul
                  role="list"
                  className="flex flex-col gap-1 text-[15px] text-primary font-medium"
                >
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/collections/all"
                    >
                      Shop All
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/collections/vietnamese-coffee"
                    >
                      Vietnamese Coffee
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/collections/whole-bean-coffee"
                    >
                      Coffee Beans
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/collections/instant-coffee"
                    >
                      Instant Coffee
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/collections/bundles"
                    >
                      Bundles
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Block 2.2 */}
              <div className="flex-auto pt-5 mt-5 border-t border-t-app-lavender/50 lg:mt-0 lg:border-t-0 lg:pt-0">
                <div className="mb-4 text-[12px] text-primary font-bold md:mb-5">
                  HELP
                </div>
                <ul
                  role="list"
                  className="flex flex-col gap-1 text-[15px] text-primary font-medium"
                >
                  <li>
                    <Link className={footerLinkClassnames} href="/pages/faq">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className={footerLinkClassnames} href="/unsubscribe">
                      Manage My Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/pages/happiness-guarantee"
                    >
                      Happiness Guarantee
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/policies/refund-policy"
                    >
                      Returns and Refunds
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/policies/shipping-policy"
                    >
                      Shipping
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Block 2.3 */}
              <div className="flex-auto pt-5 mt-5 border-t border-t-app-lavender/50 lg:mt-0 lg:border-t-0 lg:pt-0">
                <div className="mb-4 text-[12px] text-primary font-bold md:mb-5">
                  LEARN
                </div>
                <ul
                  role="list"
                  className="flex flex-col gap-1 text-[15px] text-primary font-medium"
                >
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/pages/about-us"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link className={footerLinkClassnames} href="/blogs/all">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/pages/coffee-to-water-ratio-calculator"
                    >
                      Coffee To Water Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/pages/wholesale"
                    >
                      Wholesale Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={footerLinkClassnames}
                      href="/pages/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3 */}
            <div className="mt-2 lg:mt-auto -md:text-center -lg:order-last -lg:hidden">
              <Link href="/">
                <GlassIcon className="h-[44.25px] w-[60px]" />
              </Link>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:grid md:grid-cols-3 mb-6 mt-10 items-center justify-center gap-x-1 text-center text-[10.5px] leading-relaxed md:justify-start md:text-left lg:mb-0 lg:mt-0">
              <div className="flex flex-wrap justify-center gap-1 mb-6 md:col-span-3 md:justify-start lg:mb-7">
                <AmericanExpressIcon />
                <ApplePayIcon />
                <DinersClubIcon />
                <DiscoverIcon />
                <GooglePayIcon />
                <MasterCardIcon />
                <ShopPayIcon />
                <VisaIcon />
              </div>

              <div className="mb-4 md:mb-0 text-primary font-medium">
                <p>
                  © 2025 CAFELY <br />
                  All Rights Reserved
                </p>

                <div className="flex flex-wrap mt-1 gap-x-2">
                  <a href="/policies/terms-of-service" className="underline">
                    Terms of service
                  </a>
                  <a href="/policies/privacy-policy" className="underline">
                    Privacy policy
                  </a>
                </div>
              </div>

              <div className="col-span-2">
                <address className="not-italic text-primary font-medium">
                  Cafely LLC <br />
                  5940 S Rainbow Blvd, Las Vegas NV 89118
                  <br />
                  Phone: +1 (877) 947-7947
                </address>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative mt-4 flex size-full h-0 justify-center opacity-0 transition-opacity duration-500 md:col-span-2 md:mt-8 [&.is-loaded]:h-auto [&.is-loaded]:opacity-100 is-loaded">
            <Link href="/" className="inline-block w-full md:w-[480px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="object-contain size-full"
                poster="/images/cafely-logo-poster_large.png"
              >
                <source src="/videos/cafely-logo.mov" type="video/quicktime" />
                <source src="/videos/cafely-logo.webm" type="video/webm" />
              </video>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
