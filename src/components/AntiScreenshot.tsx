"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AntiScreenshot() {
  const t = useTranslations("AntiScreenshot");

  return (
    <section className="py-16">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center">{t("title")}</h2>
          <p className="mt-4 text-sm text-center text-gray-300 max-w-3xl">
            {t("description")}
          </p>
        </div>

        {/* Content Section */}
        <div>
          <Image
            src="https://placehold.co/400x200/111111/FFF"
            alt="Anti Screenshot"
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
