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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <SubHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
