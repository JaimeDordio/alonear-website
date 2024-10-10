import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

const brigesta = localFont({
  src: "./fonts/brigesta/brigesta-brigesta-regular-400.ttf",
  variable: "--font-brigesta",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alonear",
  description: "Get exclusive",
  openGraph: {
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brigesta.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
