import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Prairie Light Photography",
  description:
    "Landscape and nature photography galleries with fine-art prints and licensing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        <div className="site-shell">
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
