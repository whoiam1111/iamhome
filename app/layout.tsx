import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/header/Header";
import Footer from "../components/common/Footer";
import SubHeader from "../components/common/header/SubHeader";

export const metadata: Metadata = {
  title: "I AM Creators' Team",
  description: "I AM Creators' Team",
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
    <html lang="ko">
      <body>
        <Header />
        <SubHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
