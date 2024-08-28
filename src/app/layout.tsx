import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getMenuBySlug } from "@/utils/get-menu-by-slug";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dataHeader = await getMenuBySlug('header')
  const dataFooter = await getMenuBySlug('footer')

  if (!dataHeader) {
    return null
  }

  if (!dataFooter) {
    return null
  }
  console.log(dataFooter)
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar menu={dataHeader}/>
        <main className="container"> {children}</main>
        <Footer menu={dataFooter}/>
      </body>
    </html>
  );
}
