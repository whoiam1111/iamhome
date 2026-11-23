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
      className={`cursor-pointer text-xs sm:text-sm
                ${
                  isMainPage
                    ? "text-white hover:text-gray-300"
                    : "text-gray-500 hover:text-blue-600"
                } 
                `}
    >
      {active ? (
        <span className="font-semibold underline decoration-brand-green decoration-2 underline-offset-4 text-blue-600 transition-all duration-300">
          {label}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </a>
  );
}
