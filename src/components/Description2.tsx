"use client";

import { motion, useInView } from "framer-motion";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function Description2() {
  const t = useTranslations("Description2");

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
      x: -100,
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
    <section className="py-8 md:py-16 px-4 md:px-8 mb-16 md:mb-32">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-auto"
        >
          <Image
            src="https://placehold.co/200x200/111111/FFF"
            alt="Description 2"
            width={200}
            height={200}
            className="w-48 md:w-[200px] h-auto mx-auto"
          />
        </motion.div>

        <motion.div
          ref={ref}
          className="w-full md:w-1/2 max-w-lg"
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center md:text-left"
            variants={textItemVariants}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="mt-4 md:mt-6 font-light text-gray-400 text-center md:text-left"
            variants={textItemVariants}
          >
            {t("description")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
