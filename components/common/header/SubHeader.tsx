"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import NavItem from "./NavItem";

export default function SubHeader() {
  const [isHidden, setIsHidden] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMainPage = pathname === "/"; // 메인 페이지 여부 확인

  if (isMainPage) return null;

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 flex justify-center mb-[60px]
        transition-transform duration-300 bg-white shadow-sm ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="flex justify-center items-center w-full xl:w-[80rem]">
        <div className={`flex gap-4 sm:gap-10 py-3 px-2 `}>
          <NavItem
            label="Home"
            active={pathname === "/"}
            onClick={() => router.push("/")}
          />
          <NavItem
            label="About"
            active={pathname === "/about"}
            onClick={() => router.push("/about")}
          />
          <NavItem
            label="Contents"
            active={pathname.includes("/contents")}
            onClick={() => router.push("/contents")}
          />
          <NavItem
            label="WhoIAM"
            active={pathname.includes("/whoiam")}
            onClick={() => router.push("/whoiam")}
          />
          <NavItem
            label="Contact"
            active={pathname === "/contact"}
            onClick={() => router.push("/contact")}
          />
        </div>
      </div>
    </div>
  );
}
