"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NavItem from "./NavItem";

export default function Header() {
	const [isHidden, setIsHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isMainPage = pathname === "/"; // 메인 페이지 여부 확인

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 flex flex-col-reverse gap-3 items-center px-4 mb-[60px]
        transition-transform duration-300 ${
			isHidden ? "-translate-y-full" : "translate-y-0"
		}`}
		>
			<div
				className={`sm:absolute sm:left-4 sm:top-3 flex sm:flex-col gap-2 sm:gap-1 sm:py-3 px-2 `}
			>
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
					label="B:Origin"
					active={pathname.includes("/borigin")}
					onClick={() => router.push("/borigin")}
				/>
				<NavItem
					label="Contact"
					active={pathname === "/contact"}
					onClick={() => router.push("/contact")}
				/>
			</div>
			<div className="mx-auto cursor-pointer flex justify-center w-full pt-3 pb-0 sm:pt-6">
				<Image
					src={
						isMainPage
							? "/assets/blive_logo_white.png"
							: "/assets/blive_logo.png"
					}
					alt="Title Logo"
					width={120}
					height={30}
					onClick={() => router.push("/")}
					className={`w-[80px] sm:w-[110px]`}
					priority
				/>
			</div>
		</div>
	);
}
