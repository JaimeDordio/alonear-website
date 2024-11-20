"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-lg bg-black/500 border-b border-black-300 shadow-gray/500">
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

          <div className="ml-auto mr-8">
            <LocaleSwitcher />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <button className="group relative overflow-hidden rounded-md bg-black-500 text-lg shadow-lg px-6 py-0.5 border-2 border-black-50">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-black-300"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="flex flex-col gap-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full group relative overflow-hidden rounded-md bg-black-500 text-lg shadow-lg px-6 py-0.5 border-2 border-black-50">
                    <div className="absolute inset-0 bottom-0 h-0 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                    <span className="relative text-sm">{t("login")}</span>
                  </button>
                </Link>

                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <button className="w-full group relative overflow-hidden rounded-md bg-primary-500 text-lg shadow-lg px-6 py-0.5 border-2 border-primary-50">
                    <div className="absolute inset-0 bottom-0 h-0 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                    <span className="relative text-sm">{t("signup")}</span>
                  </button>
                </Link>

                <div className="flex justify-end">
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
