import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";



export const metadata: Metadata = {
  title: "One Point Five",
  description: "Website created by Hirab Abdourazak"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body cz-shortcut-listen="true">
        <Header />
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}