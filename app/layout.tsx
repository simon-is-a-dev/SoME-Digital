import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Modern Boringsite",
  description: "A clean, modern website with generic content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${robotoCondensed.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main className="min-h-screen pt-20">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
