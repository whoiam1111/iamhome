"use client";

import { usePathname } from "next/navigation";

export default function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <a
      onClick={onClick}
      className={`cursor-pointer transition-colors 
                ${
                  isMainPage
                    ? "text-white hover:text-gray-300"
                    : "text-gray-500 hover:text-black"
                } 
                ${active ? "font-semibold underline" : ""}`}
    >
      {label}
    </a>
  );
}
