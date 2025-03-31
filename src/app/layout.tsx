import "./styles.css";

import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creators.alonear.com",
    siteName: "Alonear",
    title: "Alonear",

    description:
      "Alonear is a platform for creators to monetize their content and connect with their fans.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/og-cover.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
  applicationName: "Alonear",
  title: "Alonear",
  description:
    "Alonear is a platform for creators to monetize their content and connect with their fans.",
  authors: [{ name: "Alonear", url: "https://creators.alonear.com" }],
  creator: "Alonear",
  publisher: "Alonear",
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
