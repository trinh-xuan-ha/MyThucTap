import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
const jost = Jost({ subsets: ["cyrillic"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/component/header/header";
import Footer from "@/components/component/footer/footer";
import { ShoppingContextProvider } from "@/app/contexts/ShoppingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={jost.className}>
        <ShoppingContextProvider >
          <Header />
          {children}
          <Footer />
        </ShoppingContextProvider>
      </body>

    </html>
  );
}
