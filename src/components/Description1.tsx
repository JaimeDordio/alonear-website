"use client";

import { motion, useInView } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function Description1() {
  const t = useTranslations("Description1");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-10% 0% -10% 0%",
  });

  const textContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-8 mb-32 text-start flex items-center justify-center gap-20 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        className="max-w-lg"
        variants={textContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl font-bold" variants={textItemVariants}>
          {t("title")}
        </motion.h2>
        <motion.p
          className="mt-6 font-light text-gray-400"
          variants={textItemVariants}
        >
          {t("description")}
        </motion.p>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src="https://placehold.co/200x200/111111/FFF"
          alt="Description 1"
          width={200}
          height={200}
        />
      </motion.div>
    </section>
  );
}
