"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NavItem from "./NavItem";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderShrunk = scrollPosition > 100;
  const hideNavbar = scrollPosition > 70;
  const isMainPage = pathname === "/"; // 메인 페이지 여부 확인

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-4 transition-all duration-300 mb-[60px] ${
        isHeaderShrunk ? "h-[50px]" : "h-[114px]"
      }`}
    >
      <div
        className={`absolute left-4 top-1 flex flex-col gap-1 text-sm p-2 ${
          hideNavbar ? "hidden" : ""
        }`}
      >
        <NavItem
          label="About"
          active={pathname === "/about"}
          onClick={() => router.push("/about")}
        />
        <NavItem
          label="Teams"
          active={pathname.includes("/teams")}
          onClick={() => router.push("/teams")}
        />
        <NavItem
          label="Project"
          active={pathname.includes("/project")}
          onClick={() => router.push("/project/whoiam")}
        />
        <NavItem
          label="Contact"
          active={pathname === "/contact"}
          onClick={() => router.push("/contact")}
        />
      </div>
      <div className="mx-auto cursor-pointer pt-[15px] flex justify-center w-full">
        <Image
          src={
            isMainPage
              ? "/assets/title_logo.png"
              : "/assets/title_logo_black.png"
          }
          alt="Title Logo"
          width={152}
          height={60}
          onClick={() => router.push("/")}
          className={`w-[152px] sm:w-[120px] ${isHeaderShrunk ? "hidden" : ""}`}
          priority
        />
      </div>
    </div>
  );
}
