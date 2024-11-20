"use client";

import { motion, useInView } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function AntiScreenshot() {
  const t = useTranslations("AntiScreenshot");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-10% 0% -10% 0%",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="py-8 md:py-16 lg:py-24">
      <motion.div
        ref={ref}
        className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
          variants={textVariants}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          variants={imageVariants}
        >
          <div className="relative aspect-video w-full">
            <Image
              src="https://placehold.co/400x200/111111/FFF"
              alt="Anti Screenshot"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
