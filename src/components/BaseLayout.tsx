import { clsx } from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

const brigesta = localFont({
  src: "../app/fonts/brigesta/brigesta-brigesta-regular-400.ttf",
  variable: "--font-brigesta",
});
type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className={`h-full ${brigesta.variable}`} lang={locale}>
      <body className={clsx(inter.className, "flex h-full flex-col bg-black")}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
