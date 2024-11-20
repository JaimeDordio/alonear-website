"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="group relative overflow-hidden rounded-md bg-black-500 text-lg shadow-lg px-6 py-0.5 border-2 border-black-50">
                {/* Slide from bottom to top */}
                <div className="absolute inset-0 bottom-0 h-0 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                <span className="relative text-sm">{t("login")}</span>
              </button>
            </Link>

            <Link href="/signup">
              <button className="group relative overflow-hidden rounded-md bg-primary-500 text-lg shadow-lg px-6 py-0.5 border-2 border-primary-50">
                <div className="absolute inset-0 bottom-0 h-0 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                <span className="relative text-sm">{t("signup")}</span>
              </button>
            </Link>
          </div>

          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
