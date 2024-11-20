"use client";

import { motion, useInView } from "framer-motion";

import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function Fees() {
  const t = useTranslations("Fees");
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
        staggerChildren: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center max-w-3xl mx-auto"
          variants={titleVariants}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mt-6"
          variants={descriptionVariants}
        >
          {t("description")}
        </motion.p>
      </motion.div>
    </section>
  );
}
