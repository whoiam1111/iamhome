import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/header/Header";
import Footer from "../components/common/Footer";
import SubHeader from "../components/common/header/SubHeader";

import { Noto_Sans, Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "B:LIVE Community",
  description: "B:LIVE Community",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSans.variable} ${notoSansKR.variable}`}>
      <body className="antialiased">
        <Header />
        <SubHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
