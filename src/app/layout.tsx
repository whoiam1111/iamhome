import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
